import logoMark from "@/assets/images/logo/logo-md.png";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

type LogoProps = {
  /** "mark" = badge only; "full" = badge + wordmark. */
  variant?: "mark" | "full";
  /** Set on dark surfaces so the wordmark stays legible. */
  onDark?: boolean;
  className?: string;
  /** Rendered pixel size of the mark. */
  size?: number;
};

/**
 * The existing logo is a photographic circular badge (no SVG available, see
 * docs/BRAND_AUDIT.md). We never stretch it: fixed square, object-contain.
 * On dark surfaces we sit it on a paper chip so the badge reads cleanly and
 * pair it with a light wordmark.
 */
export function Logo({
  variant = "full",
  onDark = false,
  className,
  size = 44,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <img
        src={logoMark}
        alt={`${site.legalName} logo`}
        width={size}
        height={size}
        decoding="async"
        className={cn(
          "shrink-0 rounded-full object-contain",
          onDark && "bg-paper p-0.5",
        )}
        style={{ width: size, height: size }}
      />
      {variant === "full" && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-[1.05rem] font-semibold tracking-tight",
              onDark ? "text-white" : "text-ink-900",
            )}
          >
            Omojolagbe
          </span>
          <span
            className={cn(
              "text-[0.68rem] font-medium uppercase tracking-[0.16em]",
              onDark ? "text-white/70" : "text-ink-600",
            )}
          >
            Geriatric Care
          </span>
        </span>
      )}
    </span>
  );
}
