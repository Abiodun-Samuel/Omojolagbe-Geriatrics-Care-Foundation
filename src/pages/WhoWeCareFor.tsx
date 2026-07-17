import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CtaBand } from "@/sections/CtaBand";
import { conditions } from "@/content/conditions";
import { breadcrumbLd } from "@/lib/jsonld";
import { audienceLine } from "@/content/about";

export function Component() {
  return (
    <>
      <Seo
        title="Who We Care For | Omojolagbe Geriatric Care"
        description="Elderly care, dementia, post-surgery recovery, stroke, chronic conditions, palliative care, new mothers and live-in companionship. Care built around the person."
        path="/who-we-care-for"
        jsonLd={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Who we care for", path: "/who-we-care-for" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Who we care for"
        title="The people and moments we support"
        intro={audienceLine}
        crumbs={[{ label: "Who we care for" }]}
      />

      <Section size="wide">
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((c) => (
            <RevealItem key={c.slug}>
              <Link
                to={`/who-we-care-for/${c.slug}`}
                className="card group flex h-full flex-col p-6 transition-[transform,box-shadow] duration-[var(--dur-fast)] hover:-translate-y-1 hover:shadow-pop"
              >
                <h2 className="text-[1.2rem] font-semibold text-ink-900">
                  {c.name}
                </h2>
                <p className="mt-2 flex-1 text-sm text-ink-600">
                  {c.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-800">
                  How we help
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-[var(--dur-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CtaBand />
    </>
  );
}
