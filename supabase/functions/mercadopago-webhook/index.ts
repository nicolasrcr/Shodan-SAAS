import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const MERCADO_PAGO_ACCESS_TOKEN = Deno.env.get('MERCADO_PAGO_ACCESS_TOKEN');
    if (!MERCADO_PAGO_ACCESS_TOKEN) {
      throw new Error('MERCADO_PAGO_ACCESS_TOKEN is not configured');
    }

    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error('Supabase configuration is missing');
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Parse webhook notification
    const body = await req.json();
    console.log('Webhook received:', JSON.stringify(body, null, 2));

    // Mercado Pago sends different types of notifications
    if (body.type !== 'payment' && body.action !== 'payment.created' && body.action !== 'payment.updated') {
      console.log('Ignoring non-payment notification:', body.type || body.action);
      return new Response(JSON.stringify({ received: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Get payment ID from the notification
    const paymentId = body.data?.id;
    if (!paymentId) {
      console.log('No payment ID in notification');
      return new Response(JSON.stringify({ received: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Fetch payment details from Mercado Pago
    console.log('Fetching payment details for ID:', paymentId);
    const paymentResponse = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: {
        'Authorization': `Bearer ${MERCADO_PAGO_ACCESS_TOKEN}`,
      },
    });

    if (!paymentResponse.ok) {
      const errorText = await paymentResponse.text();
      console.error('Error fetching payment:', paymentResponse.status, errorText);
      throw new Error(`Failed to fetch payment: ${paymentResponse.status}`);
    }

    const payment = await paymentResponse.json();
    console.log('Payment details:', JSON.stringify(payment, null, 2));

    // Only process approved payments
    if (payment.status !== 'approved') {
      console.log('Payment not approved, status:', payment.status);
      return new Response(JSON.stringify({ received: true, status: payment.status }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Parse external reference to get user info
    let externalRef;
    try {
      externalRef = JSON.parse(payment.external_reference || '{}');
    } catch (e) {
      console.error('Error parsing external_reference:', e);
      throw new Error('Invalid external_reference format');
    }

    const { userId, type } = externalRef;
    if (!userId) {
      console.error('No userId in external_reference');
      throw new Error('Missing userId in payment reference');
    }

    console.log(`Processing ${type} payment for user:`, userId);

    // Get current profile to calculate new expiration date
    const { data: profile, error: fetchError } = await supabase
      .from('profiles')
      .select('access_expires_at, has_paid')
      .eq('id', userId)
      .single();

    if (fetchError) {
      console.error('Error fetching profile:', fetchError);
      throw new Error(`Failed to fetch user profile: ${fetchError.message}`);
    }

    // Calculate new expiration date
    let newExpirationDate: Date;
    
    if (type === 'renewal' && profile.access_expires_at) {
      // For renewals, add 1 year from current expiration (or now if already expired)
      const currentExpiration = new Date(profile.access_expires_at);
      const now = new Date();
      const baseDate = currentExpiration > now ? currentExpiration : now;
      newExpirationDate = new Date(baseDate);
      newExpirationDate.setFullYear(newExpirationDate.getFullYear() + 1);
    } else {
      // For new purchases, add 1 year from now
      newExpirationDate = new Date();
      newExpirationDate.setFullYear(newExpirationDate.getFullYear() + 1);
    }

    // Update user profile
    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        has_paid: true,
        access_expires_at: newExpirationDate.toISOString(),
        payment_method: 'cartao',
      })
      .eq('id', userId);

    if (updateError) {
      console.error('Error updating profile:', updateError);
      throw new Error(`Failed to update profile: ${updateError.message}`);
    }

    console.log(`Successfully updated user ${userId} with expiration: ${newExpirationDate.toISOString()}`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        userId, 
        type,
        newExpiration: newExpirationDate.toISOString() 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    console.error('Webhook processing error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    // Return 200 to acknowledge receipt (prevent retries for non-recoverable errors)
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
