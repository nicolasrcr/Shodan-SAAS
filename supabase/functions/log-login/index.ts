import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

function getIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return (
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-real-ip") ||
    null
  );
}

async function getGeoFromIp(ip: string | null): Promise<{ city: string | null; country: string | null }> {
  if (!ip) return { city: null, country: null };
  try {
    const res = await fetch(`http://ip-api.com/json/${ip}?fields=status,city,country`);
    const data = await res.json();
    if (data.status === "success") {
      return { city: data.city || null, country: data.country || null };
    }
  } catch (e) {
    console.error("Geo-IP lookup failed:", e);
  }
  return { city: null, country: null };
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY");
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      throw new Error("Missing SUPABASE_URL / SUPABASE_ANON_KEY");
    }

    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });

    const token = authHeader.replace("Bearer ", "");
    const { data: claimsData, error: claimsErr } = await supabase.auth.getClaims(token);
    if (claimsErr || !claimsData?.claims) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userId = claimsData.claims.sub as string;

    const body = await req.json().catch(() => ({}));
    const device_hash = body?.device_hash ?? null;
    const session_id = body?.session_id ?? null;
    const kind: "login" | "heartbeat" =
      body?.kind === "heartbeat" ? "heartbeat" : "login";

    const ip = getIp(req);
    const user_agent = req.headers.get("user-agent");

    // Register login event with geo-IP (only on login, not heartbeat)
    if (kind === "login") {
      const geo = await getGeoFromIp(ip);
      await supabase.from("auth_login_events").insert({
        user_id: userId,
        ip,
        user_agent,
        device_hash,
        city: geo.city,
        country: geo.country,
      });
    }

    // Upsert active session (for admin visibility only, no auto-revocation)
    if (session_id) {
      await supabase.from("user_sessions").upsert(
        {
          user_id: userId,
          session_id,
          device_hash,
          ip,
          user_agent,
          last_seen_at: new Date().toISOString(),
          revoked_at: null,
          revoke_reason: null,
        },
        { onConflict: "session_id" }
      );
    }

    return new Response(
      JSON.stringify({ ok: true, force_logout: false }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
