import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { conditions } from "@/content/conditions";

export function WhoWeCareFor() {
  return (
    <Section tone="sunken" size="wide" ariaLabel="Who we care for">
      <SectionHeading
        eyebrow="Who we care for"
        title="The people and moments we support"
        intro="Whatever your family is facing, care starts with understanding it. These are the situations we help with most."
      />
      <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {conditions.map((c) => (
          <RevealItem key={c.slug}>
            <Link
              to={`/who-we-care-for/${c.slug}`}
              className="group flex h-full flex-col justify-between rounded-card border border-ink-200 bg-paper-raised p-5 transition-[transform,box-shadow] duration-[var(--dur-fast)] hover:-translate-y-1 hover:shadow-card"
            >
              <div>
                <h3 className="text-[1.05rem] font-semibold text-ink-900">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm text-ink-600">
                  {c.summary}
                </p>
              </div>
              <ArrowUpRight
                size={18}
                className="mt-4 text-brand-800 transition-transform duration-[var(--dur-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
