import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type SectionProps = {
  children: ReactNode;
  tone?: "paper" | "sunken" | "ink";
  size?: "prose" | "content" | "wide";
  spacing?: "default" | "tight";
  className?: string;
  id?: string;
  ariaLabel?: string;
};

const toneMap = {
  paper: "bg-[var(--color-paper)]",
  sunken: "bg-[var(--color-paper-sunken)]",
  ink: "bg-[var(--color-ink-900)] text-white",
} as const;

export function Section({
  children,
  tone = "paper",
  size = "content",
  spacing = "default",
  className,
  id,
  ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        toneMap[tone],
        spacing === "default"
          ? "py-[clamp(4rem,8vw,8rem)]"
          : "py-[clamp(3rem,5vw,5rem)]",
        className,
      )}
    >
      <Container size={size}>{children}</Container>
    </section>
  );
}
