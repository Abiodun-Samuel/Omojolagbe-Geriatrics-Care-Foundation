import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as = "h2",
  className,
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <Reveal
      className={cn(
        align === "center" && "mx-auto text-center",
        "max-w-3xl",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow mb-3 on-ink:text-brand-300">{eyebrow}</p>}
      <Tag
        className={cn(
          as === "h2" ? "type-h2" : "type-h3",
        )}
      >
        {title}
      </Tag>
      {intro && (
        <p
          className={cn(
            "mt-4 type-lead text-ink-600",
            align === "center" && "mx-auto",
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
