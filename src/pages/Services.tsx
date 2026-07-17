import { Check } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { CtaBand } from "@/sections/CtaBand";
import { services, additionalCareItems } from "@/content/services";
import { homeServicesIntro } from "@/content/about";
import { breadcrumbLd } from "@/lib/jsonld";

export function Component() {
  return (
    <>
      <Seo
        title="Home Care Services in Ibadan | Omojolagbe Geriatric Care"
        description="Personal care, nursing, dementia, palliative, physiotherapy and more. Every service is vetted, supervised and reported. Book a free assessment."
        path="/services"
        jsonLd={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      {/* SV01 "Home Care" preserved as the page title. */}
      <PageHero
        eyebrow="Omojolagbe Home Care Services"
        title="Home Care"
        intro={homeServicesIntro.body}
        crumbs={[{ label: "Services" }]}
      />

      <Section size="wide">
        {/* SV02 preserved. */}
        <h2 className="sr-only">{homeServicesIntro.heading}</h2>
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <RevealItem key={service.slug}>
              <ServiceCard service={service} />
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Preserve remaining original "Level Of Care" items (SV05, SV06). */}
        <div className="mt-12 rounded-card bg-paper-sunken p-6">
          <h2 className="text-[1.15rem] font-semibold text-ink-900">
            Also part of our care
          </h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {additionalCareItems.map((item) => (
              <li key={item} className="chip bg-paper-raised">
                <Check
                  size={15}
                  className="text-verify-500"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
