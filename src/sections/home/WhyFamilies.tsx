import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

/** Differentiators with proof, not adjectives (Phase 4). A dark punctuation
 *  band. Draws on the original objectives without repeating them verbatim (the
 *  verbatim objectives live on /about). */
const reasons = [
  {
    title: "You can see the care",
    body: "A report after every visit means a family member abroad or across town always knows how their parent is doing.",
  },
  {
    title: "Real vetting, not promises",
    body: "Background checks, references, health screening, skills assessment and certified training before anyone enters a home.",
  },
  {
    title: "Matched, then supervised",
    body: "We match a caregiver to the person, then a supervisor keeps checking that standards hold.",
  },
  {
    title: "Honest from the first call",
    body: "A free assessment and indicative pricing, so you are never sold the wrong plan.",
  },
];

export function WhyFamilies() {
  return (
    <Section tone="ink" size="wide" ariaLabel="Why families choose us">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Why families choose us"
          title={<span className="text-white">Care you can trust, and check</span>}
          intro={
            <span className="text-white/70">
              The reasons families in Ibadan and abroad choose Omojolagbe come
              down to visibility, vetting and honesty.
            </span>
          }
        />
        <RevealGroup className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {reasons.map((r) => (
            <RevealItem key={r.title} className="flex gap-4">
              <span
                className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-400)]"
                aria-hidden="true"
              >
                <Check size={16} className="text-[var(--color-ink-900)]" />
              </span>
              <div>
                <h3 className="text-[1.1rem] font-semibold text-white">
                  {r.title}
                </h3>
                <p className="mt-1.5 text-sm text-white/70">{r.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
