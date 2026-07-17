import { useParams, Link } from "react-router";
import { Check, ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/sections/CtaBand";
import { ServiceCard } from "@/components/ServiceCard";
import { getService, services } from "@/content/services";
import { serviceLd, breadcrumbLd } from "@/lib/jsonld";
import { NotFoundBody } from "@/components/NotFoundBody";

export function Component() {
  const { slug } = useParams();
  const service = slug ? getService(slug) : undefined;

  if (!service) {
    return <NotFoundBody />;
  }

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={`${service.name} at Home in Ibadan | Omojolagbe Geriatric Care`}
        description={service.summary}
        path={`/services/${service.slug}`}
        jsonLd={[
          serviceLd(service.name, service.summary, `/services/${service.slug}`),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Home care service"
        title={service.name}
        intro={service.intro}
        crumbs={[
          { label: "Services", to: "/services" },
          { label: service.name },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="text-(--text-h3)">What this includes</h2>
            <ul className="mt-5 space-y-3">
              {service.includes.map((inc) => (
                <li key={inc} className="flex items-start gap-3">
                  <Check
                    size={19}
                    className="mt-1 shrink-0 text-verify-500"
                    aria-hidden="true"
                  />
                  <span className="text-ink-700">{inc}</span>
                </li>
              ))}
            </ul>

            {service.originalLabel && (
              <p className="mt-8 text-sm text-ink-500">
                One of our levels of care: {service.originalLabel}
              </p>
            )}
          </Reveal>

          <Reveal className="card h-fit p-6">
            <h2 className="text-[1.15rem] font-semibold text-ink-900">
              Who this is for
            </h2>
            <p className="mt-3 text-ink-600">{service.forWho}</p>
            <Link to="/book-assessment" className="btn btn-primary mt-6 w-full">
              Book a free assessment
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <p className="mt-3 text-center text-sm text-ink-500">
              Free, with no obligation.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="sunken" size="wide">
        <h2 className="text-(--text-h3)">Other services</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
