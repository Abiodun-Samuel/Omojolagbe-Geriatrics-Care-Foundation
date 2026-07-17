import { useParams, Link } from "react-router";
import { Check, ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/sections/CtaBand";
import { ServiceCard } from "@/components/ServiceCard";
import { getCondition } from "@/content/conditions";
import { getService } from "@/content/services";
import { breadcrumbLd, serviceLd } from "@/lib/jsonld";
import { NotFoundBody } from "@/components/NotFoundBody";

export function Component() {
  const { slug } = useParams();
  const condition = slug ? getCondition(slug) : undefined;

  if (!condition) {
    return <NotFoundBody />;
  }

  const related = condition.relatedServices
    .map((s) => getService(s))
    .filter((s) => s !== undefined);

  return (
    <>
      <Seo
        title={`${condition.name} Support at Home | Omojolagbe Geriatric Care`}
        description={condition.summary}
        path={`/who-we-care-for/${condition.slug}`}
        jsonLd={[
          serviceLd(
            condition.name,
            condition.summary,
            `/who-we-care-for/${condition.slug}`,
          ),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Who we care for", path: "/who-we-care-for" },
            {
              name: condition.name,
              path: `/who-we-care-for/${condition.slug}`,
            },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Who we care for"
        title={condition.name}
        intro={condition.intro}
        crumbs={[
          { label: "Who we care for", to: "/who-we-care-for" },
          { label: condition.name },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="text-(--text-h3)">How we help</h2>
            <ul className="mt-5 space-y-3">
              {condition.approach.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <Check
                    size={19}
                    className="mt-1 shrink-0 text-verify-500"
                    aria-hidden="true"
                  />
                  <span className="text-ink-700">{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="card h-fit p-6">
            <h2 className="text-[1.15rem] font-semibold text-ink-900">
              Not sure what you need?
            </h2>
            <p className="mt-3 text-ink-600">
              That is what the assessment is for. We listen first, then
              recommend only the care that fits.
            </p>
            <Link to="/book-assessment" className="btn btn-primary mt-6 w-full">
              Book a free assessment
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="sunken" size="wide">
          <h2 className="text-(--text-h3)">Services that support this</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
