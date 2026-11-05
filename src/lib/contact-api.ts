export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type ContactResult =
  | { ok: true }
  | { ok: false; reason: "not_configured" | "network" | "server"; message?: string };

/** URL base da API Rails (ex.: https://api.hotelmoreno.com.br). Envia para POST {base}/api/contact. */
export function getContactApiUrl(): string | null {
  const base = import.meta.env["VITE_CONTACT_API_URL"] as string | undefined;
  if (!base || !base.trim()) return null;
  return `${base.replace(/\/+$/, "")}/api/contact`;
}

export async function sendContact(payload: ContactPayload): Promise<ContactResult> {
  const url = getContactApiUrl();
  if (!url) return { ok: false, reason: "not_configured" };
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return { ok: false, reason: "server", message: `HTTP ${res.status}` };
    return { ok: true };
  } catch {
    return { ok: false, reason: "network" };
  }
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
