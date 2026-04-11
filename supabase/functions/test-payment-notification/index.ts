const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const timestamp = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const testData = {
      userName: 'Teste Pagamento',
      userEmail: 'teste@example.com',
      userPhone: '(61) 99999-9999',
      amount: 50,
      method: 'PIX',
      type: 'Novo acesso',
      expiration: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
    };

    const results: Record<string, string> = {};

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (RESEND_API_KEY) {
      try {
        const emailResp = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${RESEND_API_KEY}` },
          body: JSON.stringify({
            from: 'Shodan Exame <onboarding@resend.dev>',
            to: ['nicolasrcr@gmail.com'],
            subject: `🧪 [TESTE] Pagamento aprovado: ${testData.userName} (R$ ${testData.amount})`,
            html: `<h2>🧪 TESTE - Pagamento aprovado!</h2><p><strong>Aluno:</strong> ${testData.userName}</p><p><strong>Email:</strong> ${testData.userEmail}</p><p><strong>Telefone:</strong> ${testData.userPhone}</p><p><strong>Valor:</strong> R$ ${testData.amount}</p><p><strong>Método:</strong> ${testData.method}</p><p><strong>Tipo:</strong> ${testData.type}</p><p><strong>Validade até:</strong> ${testData.expiration}</p><p><strong>Data:</strong> ${timestamp}</p><hr><p><em>Esta é uma notificação de teste.</em></p>`,
          }),
        });
        const emailData = await emailResp.json();
        results.email = emailResp.ok ? 'sent' : `error: ${JSON.stringify(emailData)}`;
      } catch (e) { results.email = `error: ${e.message}`; }
    } else { results.email = 'skipped'; }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    const TWILIO_API_KEY = Deno.env.get('TWILIO_API_KEY');
    const TWILIO_FROM = Deno.env.get('TWILIO_WHATSAPP_FROM');

    if (LOVABLE_API_KEY && TWILIO_API_KEY && TWILIO_FROM) {
      try {
        const whatsappBody = `🧪 *[TESTE] Pagamento aprovado*\n\n*Aluno:* ${testData.userName}\n*Email:* ${testData.userEmail}\n*Valor:* R$ ${testData.amount}\n*Método:* ${testData.method}\n*Tipo:* ${testData.type}\n*Validade:* ${testData.expiration}\n*Data:* ${timestamp}`;
        const resp = await fetch('https://connector-gateway.lovable.dev/twilio/Messages.json', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${LOVABLE_API_KEY}`, 'X-Connection-Api-Key': TWILIO_API_KEY, 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ To: 'whatsapp:+5561996634944', From: `whatsapp:${TWILIO_FROM}`, Body: whatsappBody }),
        });
        const respData = await resp.json();
        results.whatsapp = resp.ok ? 'sent' : `error: ${JSON.stringify(respData)}`;
      } catch (e) { results.whatsapp = `error: ${e.message}`; }
    } else { results.whatsapp = 'skipped'; }

    console.log('Test results:', JSON.stringify(results));
    return new Response(JSON.stringify({ success: true, results }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }
});
