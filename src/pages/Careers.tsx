import { Link } from "react-router";
import { ArrowUpRight, MapPin, Briefcase } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";
import { ApplicationForm } from "@/sections/ApplicationForm";
import { openRoles, trainingProgramme } from "@/content/careers";
import { breadcrumbLd } from "@/lib/jsonld";

export function Component() {
  return (
    <>
      <Seo
        title="Caregiver and Nurse Jobs in Ibadan | Omojolagbe Geriatric Care"
        description="Join a team that trains, certifies and supports its caregivers. Open roles for caregivers, live-in caregivers and NMCN-registered nurses in Ibadan."
        path="/careers"
        jsonLd={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Careers", path: "/careers" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Careers"
        title="Build a caregiving career worth having"
        intro="We train, certify and supervise our caregivers, and we stand behind them. If you have a genuine heart for older people, we want to meet you."
        crumbs={[{ label: "Careers" }]}
      />

      <Section size="wide">
        <SectionHeading eyebrow="Open roles" title="Where we need people now" />
        <RevealGroup className="mt-10 grid gap-5 md:grid-cols-3">
          {openRoles.map((role) => (
            <RevealItem key={role.slug}>
              <Link
                to={`/careers/${role.slug}`}
                className="card group flex h-full flex-col p-6 transition-[transform,box-shadow] duration-(--dur-fast) hover:-translate-y-1 hover:shadow-pop"
              >
                <h2 className="text-[1.2rem] font-semibold text-ink-900">
                  {role.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-ink-600">
                  {role.summary}
                </p>
                <dl className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-600">
                  <div className="flex items-center gap-1.5">
                    <Briefcase size={14} aria-hidden="true" />
                    <dt className="sr-only">Type</dt>
                    <dd>{role.type}</dd>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} aria-hidden="true" />
                    <dt className="sr-only">Location</dt>
                    <dd>{role.location}</dd>
                  </div>
                </dl>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-800">
                  See the role
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-(--dur-fast) group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
                {role.placeholder && (
                  <PlaceholderTag className="mt-3 self-start" label="Sample role" />
                )}
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="sunken">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Training"
              title={trainingProgramme.title}
              intro={trainingProgramme.tagline}
            />
            <ul className="mt-6 space-y-2.5">
              {trainingProgramme.benefits.slice(0, 4).map((b) => (
                <li key={b} className="flex gap-3 text-ink-700">
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-brand-500"
                    aria-hidden="true"
                  />
                  {b}
                </li>
              ))}
            </ul>
            <Link to="/caregivers" className="btn btn-ghost mt-6">
              See the full programme
            </Link>
          </div>
          <div>
            <h2 className="type-h3">Apply to join us</h2>
            <p className="mt-3 text-ink-600">
              Tell us about yourself. If there is a fit, we will invite you to
              interview and take you through our vetting process.
            </p>
            <div className="mt-6">
              <ApplicationForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
