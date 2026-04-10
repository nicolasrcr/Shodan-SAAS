const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts'

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/twilio'
const ADMIN_EMAIL = 'nicolasrcr@gmail.com'
const ADMIN_WHATSAPP = 'whatsapp:+5561996634944'

const BodySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
})

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const parsed = BodySchema.safeParse(await req.json())
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const { name, email, phone } = parsed.data
    const timestamp = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })

    // Send email via Resend
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    if (RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'Shodan Exame <onboarding@resend.dev>',
            to: [ADMIN_EMAIL],
            subject: `🥋 Novo cadastro: ${name}`,
            html: `
              <h2>Novo cadastro na plataforma</h2>
              <p><strong>Nome:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Telefone:</strong> ${phone}</p>
              <p><strong>Data:</strong> ${timestamp}</p>
            `,
          }),
        })
      } catch (e) {
        console.error('Resend error:', e)
      }
    }

    // Send WhatsApp via Twilio Gateway
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY')
    const TWILIO_API_KEY = Deno.env.get('TWILIO_API_KEY')
    const TWILIO_FROM = Deno.env.get('TWILIO_WHATSAPP_FROM')

    if (LOVABLE_API_KEY && TWILIO_API_KEY && TWILIO_FROM) {
      try {
        const whatsappBody = `🥋 *Novo cadastro no Shodan Exame*\n\n` +
          `*Nome:* ${name}\n` +
          `*Email:* ${email}\n` +
          `*Telefone:* ${phone}\n` +
          `*Data:* ${timestamp}`

        const resp = await fetch(`${GATEWAY_URL}/Messages.json`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${LOVABLE_API_KEY}`,
            'X-Connection-Api-Key': TWILIO_API_KEY,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            To: ADMIN_WHATSAPP,
            From: `whatsapp:${TWILIO_FROM}`,
            Body: whatsappBody,
          }),
        })

        if (!resp.ok) {
          const errData = await resp.text()
          console.error('Twilio WhatsApp error:', resp.status, errData)
        }
      } catch (e) {
        console.error('Twilio error:', e)
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('notify-new-signup error:', error)
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
