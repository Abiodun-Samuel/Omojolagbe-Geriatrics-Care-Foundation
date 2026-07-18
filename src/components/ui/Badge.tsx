import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export type BadgeTone =
  | "brand" // yellow fill, ink text: the loud one, use sparingly
  | "ink" // dark fill, for use on light surfaces
  | "verify" // evergreen: trust, verification, success
  | "neutral" // quiet grey pill on paper
  | "outline" // hairline border, transparent fill
  | "on-dark"; // translucent white, for use on dark bands

export type BadgeSize = "sm" | "md" | "lg";

type BadgeProps = {
  children: ReactNode;
  /** Optional leading icon. Rendered decorative (aria-hidden). */
  icon?: LucideIcon;
  tone?: BadgeTone;
  size?: BadgeSize;
  /** Render a small leading status dot instead of / alongside an icon. */
  dot?: boolean;
  className?: string;
};

const toneClasses: Record<BadgeTone, string> = {
  brand: "bg-brand-400 text-ink-900",
  ink: "bg-ink-900 text-white",
  verify: "bg-verify-50 text-verify-600",
  neutral: "bg-paper-sunken text-ink-700",
  outline: "border border-ink-300 text-ink-700",
  "on-dark": "bg-white/10 text-white",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "gap-1 px-2.5 py-0.5 text-xs",
  md: "gap-1.5 px-3 py-1 text-sm",
  lg: "gap-2 px-4 py-1.5 text-sm",
};

const iconSize: Record<BadgeSize, number> = { sm: 12, md: 14, lg: 16 };

const dotTone: Record<BadgeTone, string> = {
  brand: "bg-ink-900",
  ink: "bg-brand-400",
  verify: "bg-verify-500",
  neutral: "bg-ink-500",
  outline: "bg-brand-500",
  "on-dark": "bg-brand-400",
};

/**
 * Reusable, dynamic badge / pill. One component for trust chips, status tags,
 * category pills, and "verified" marks across the app, so they read as one
 * system. Tone controls colour, size controls scale, and an optional icon or
 * status dot leads the label.
 */
export function Badge({
  children,
  icon: Icon,
  tone = "neutral",
  size = "md",
  dot = false,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill font-medium whitespace-nowrap",
        toneClasses[tone],
        sizeClasses[size],
        className,
      )}
    >
      {dot && (
        <span
          aria-hidden="true"
          className={cn("h-1.5 w-1.5 rounded-full", dotTone[tone])}
        />
      )}
      {Icon && <Icon size={iconSize[size]} aria-hidden="true" />}
      {children}
    </span>
  );
}
