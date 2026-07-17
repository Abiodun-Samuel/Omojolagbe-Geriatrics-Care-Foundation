import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";
import { CtaBand } from "@/sections/CtaBand";
import { sampleTestimonials, sampleCaseStories } from "@/content/testimonials";
import { breadcrumbLd } from "@/lib/jsonld";
import { site } from "@/lib/site";

/** Review JSON-LD is intentionally omitted while testimonials are samples:
 *  publishing Review structured data for placeholder quotes would be a false
 *  claim to search engines. Wire it in when real reviews land. */
export function Component() {
  return (
    <>
      <Seo
        title="What Families Say | Omojolagbe Geriatric Care"
        description="Stories from families in Ibadan and abroad who trust us with the care of their parents."
        path="/testimonials"
        jsonLd={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Testimonials", path: "/testimonials" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="What families say"
        title="Trusted with the people who raised them"
        intro="Care is judged by the families living it. These are their words."
        crumbs={[{ label: "Testimonials" }]}
      />

      <Section size="wide">
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sampleTestimonials.map((t) => (
            <RevealItem key={t.id}>
              <TestimonialCard item={t} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="sunken">
        <SectionHeading
          eyebrow="Case stories"
          title="What good care actually looked like"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {sampleCaseStories.map((cs) => (
            <Reveal key={cs.id} className="card p-6">
              <h3 className="type-h3">{cs.title}</h3>
              <p className="mt-3 text-ink-600">{cs.summary}</p>
              {cs.placeholder && (
                <PlaceholderTag className="mt-4" label="Sample story" />
              )}
            </Reveal>
          ))}
        </div>
      </Section>

      <Section size="prose">
        <div className="rounded-card bg-paper-sunken p-6 text-center">
          <h2 className="text-[1.15rem] font-semibold text-ink-900">
            Cared for by us? We would value your words.
          </h2>
          <p className="mt-2 text-ink-600">
            Your experience helps another family decide.{" "}
            <a
              href={`mailto:${site.emails.homeCare}?subject=${encodeURIComponent("My experience with Omojolagbe Care")}`}
              className="font-semibold text-brand-800 hover:underline"
            >
              Share your story
            </a>
            .
          </p>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
