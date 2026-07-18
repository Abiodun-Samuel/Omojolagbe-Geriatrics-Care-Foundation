/**
 * Form submission adapter (Phase 8).
 *
 * Every form on the site (contact, caregiver application, booking) submits
 * through here. There is no backend: submissions go straight from the browser
 * to Web3Forms, which emails them to the address registered with the access
 * key. The client wires it up in ONE place by setting VITE_WEB3FORMS_KEY.
 *
 * If no key is configured we do NOT fake a success. We fall back to opening
 * the user's mail client with the submission prefilled, and report that
 * honestly to the UI, so a real enquiry is never silently dropped.
 *
 * See docs/HANDOVER.md "How to wire forms".
 */

import { site } from "@/lib/site";

const accessKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export type SubmitResult =
  | { status: "sent" }
  | { status: "mailto"; href: string }
  | { status: "error"; message: string };

type Payload = Record<string, unknown> & {
  /** Honeypot. If filled, treat as spam and drop silently. */
  company?: string;
};

function buildMailto(subject: string, payload: Payload, to: string): string {
  const lines = Object.entries(payload)
    .filter(([k, v]) => k !== "company" && v !== undefined && v !== "")
    .map(([k, v]) => `${k}: ${String(v)}`)
    .join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
}

export async function submitForm(
  subject: string,
  payload: Payload,
  to: string = site.emails.homeCare,
): Promise<SubmitResult> {
  // Honeypot: pretend success, send nothing. (Web3Forms also has its own
  // botcheck field, set below, as a second line of defence.)
  if (payload.company) return { status: "sent" };

  // No key configured: never fake success, fall back to the mail client.
  if (!accessKey) {
    return { status: "mailto", href: buildMailto(subject, payload, to) };
  }

  // Strip the honeypot before sending.
  const fields = { ...payload };
  delete fields.company;

  try {
    const res = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject,
        from_name: site.name,
        // Where Web3Forms should route this. The key's own address is the
        // default; this makes the intended inbox explicit per form.
        to,
        botcheck: "",
        ...fields,
      }),
    });

    const data = (await res.json().catch(() => null)) as
      | { success?: boolean }
      | null;

    if (!res.ok || !data?.success) {
      return {
        status: "error",
        message:
          "We could not send that just now. Please try again, or reach us on WhatsApp and we will help right away.",
      };
    }
    return { status: "sent" };
  } catch {
    return {
      status: "error",
      message:
        "That did not send, which usually means a network problem. Please try again, or reach us on WhatsApp.",
    };
  }
}
