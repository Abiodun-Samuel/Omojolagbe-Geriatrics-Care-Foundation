import { MessageCircle } from "lucide-react";
import { whatsappLink, defaultWhatsappMessage } from "@/lib/site";
import { cn } from "@/lib/cn";

type WhatsAppButtonProps = {
  message?: string;
  label?: string;
  className?: string;
  variant?: "chip" | "inline";
};

/** A wa.me CTA with a prefilled message (Phase 8, best channel in-market). */
export function WhatsAppButton({
  message = defaultWhatsappMessage,
  label = "Chat on WhatsApp",
  className,
  variant = "chip",
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        variant === "chip"
          ? "inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-verify-500)] px-5 py-3 text-[0.95rem] font-semibold text-white transition-[transform,background-color] duration-[var(--dur-fast)] hover:-translate-y-0.5 hover:bg-[var(--color-verify-600)]"
          : "inline-flex items-center gap-1.5 font-medium text-[var(--color-verify-600)] underline-offset-4 hover:underline",
        className,
      )}
    >
      <MessageCircle size={18} aria-hidden="true" />
      {label}
    </a>
  );
}

/** Floating action, considered so it does not fight the design (Phase 8). */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-verify-500)] text-white shadow-[var(--shadow-pop)] transition-[transform,background-color] duration-[var(--dur-fast)] hover:-translate-y-0.5 hover:bg-[var(--color-verify-600)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] motion-reduce:transition-none"
    >
      <MessageCircle size={24} aria-hidden="true" />
    </a>
  );
}
