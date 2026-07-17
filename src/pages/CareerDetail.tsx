import { useParams } from "react-router";
import { Check, MapPin, Briefcase } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";
import { ApplicationForm } from "@/sections/ApplicationForm";
import { getRole } from "@/content/careers";
import { breadcrumbLd } from "@/lib/jsonld";
import { NotFoundBody } from "@/components/NotFoundBody";
import { site } from "@/lib/site";

export function Component() {
  const { slug } = useParams();
  const role = slug ? getRole(slug) : undefined;

  if (!role) {
    return <NotFoundBody />;
  }

  const jobLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: role.summary,
    employmentType: role.type,
    hiringOrganization: {
      "@type": "Organization",
      name: site.legalName,
      sameAs: site.url,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: role.location,
        addressRegion: site.address.state,
        addressCountry: "NG",
      },
    },
  };

  return (
    <>
      <Seo
        title={`${role.title} in ${role.location} | Omojolagbe Geriatric Care`}
        description={role.summary}
        path={`/careers/${role.slug}`}
        jsonLd={[
          jobLd,
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Careers", path: "/careers" },
            { name: role.title, path: `/careers/${role.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Open role"
        title={role.title}
        intro={role.summary}
        crumbs={[{ label: "Careers", to: "/careers" }, { label: role.title }]}
      >
        <dl className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <Briefcase size={16} aria-hidden="true" />
            <dt className="sr-only">Type</dt>
            <dd>{role.type}</dd>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} aria-hidden="true" />
            <dt className="sr-only">Location</dt>
            <dd>{role.location}</dd>
          </div>
        </dl>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="type-h3">What you will do</h2>
            <ul className="mt-5 space-y-3">
              {role.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <Check
                    size={18}
                    className="mt-1 shrink-0 text-verify-500"
                    aria-hidden="true"
                  />
                  <span className="text-ink-700">{r}</span>
                </li>
              ))}
            </ul>

            <h2 className="type-h3 mt-10">What we look for</h2>
            <ul className="mt-5 space-y-3">
              {role.requirements.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <Check
                    size={18}
                    className="mt-1 shrink-0 text-verify-500"
                    aria-hidden="true"
                  />
                  <span className="text-ink-700">{r}</span>
                </li>
              ))}
            </ul>

            {role.placeholder && (
              <PlaceholderTag className="mt-8" label="Sample role listing" />
            )}
          </Reveal>

          <Reveal>
            <div className="card p-6">
              <h2 className="type-h3">Apply for this role</h2>
              <p className="mt-2 text-ink-600">
                Every application is read by a person.
              </p>
              <div className="mt-6">
                <ApplicationForm roleTitle={role.title} />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
