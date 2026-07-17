/**
 * Form submission adapter (Phase 8).
 *
 * The client can wire a real backend in ONE place: set VITE_FORM_ENDPOINT to a
 * Formspree URL, a Resend-backed function, or any API that accepts JSON POST.
 *
 * If no endpoint is configured we do NOT fake a success. We fall back to
 * opening the user's mail client with the submission prefilled, and report
 * that honestly to the UI, so a real enquiry is never silently dropped.
 *
 * See docs/HANDOVER.md "How to wire forms".
 */

import { site } from "@/lib/site";

const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

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
  // Honeypot: pretend success, send nothing.
  if (payload.company) return { status: "sent" };

  if (!endpoint) {
    return { status: "mailto", href: buildMailto(subject, payload, to) };
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ subject, ...payload }),
    });

    if (!res.ok) {
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
