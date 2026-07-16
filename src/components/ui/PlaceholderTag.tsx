import { FlaskConical } from "lucide-react";
import { cn } from "@/lib/cn";

/** Visibly marks placeholder content the client will swap (Phase 5.7, D7). */
export function PlaceholderTag({
  label = "Sample content",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] bg-[var(--color-paper-sunken)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-ink-500)]",
        className,
      )}
    >
      <FlaskConical size={12} aria-hidden="true" />
      {label}
    </span>
  );
}
