import { Link } from "react-router";
import { Check, Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { CaregiverCard } from "@/components/CaregiverCard";
import { WhatsAppButton } from "@/components/WhatsApp";
import { CtaBand } from "@/sections/CtaBand";
import { vettingFunnel, sampleCaregivers } from "@/content/caregivers";
import { trainingProgramme } from "@/content/careers";
import { media } from "@/content/media";
import { breadcrumbLd } from "@/lib/jsonld";
import { viewportOnce } from "@/lib/motion";

export function Component() {
  return (
    <>
      <Seo
        title="Our Caregivers and How We Vet Them | Omojolagbe Geriatric Care"
        description="Background checks, references, health screening, skills assessment, certified training and supervised placement. See exactly how we vet every caregiver."
        path="/caregivers"
        jsonLd={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Our caregivers", path: "/caregivers" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Our caregivers"
        title="The standard before anyone enters your parent's home"
        intro="Trust in care is earned by what you check, not what you claim. This is our vetting process in full."
        crumbs={[{ label: "Our caregivers" }]}
      />

      {/* The vetting funnel, made visible (Phase 1 research). */}
      <Section>
        <SectionHeading
          eyebrow="Vetting"
          title="Six stages, every single caregiver"
          intro="Most applicants do not make it through. That is the point."
        />
        <ol className="relative mt-10 max-w-3xl">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[19px] top-6 w-px bg-ink-200"
          />
          {vettingFunnel.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.06, duration: 0.32 }}
              className="relative flex gap-5 pb-9 last:pb-0"
            >
              <span
                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-brand-400 font-display text-lg font-semibold text-ink-900"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div className="pt-1">
                <h3 className="text-[1.15rem] font-semibold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-ink-600">{step.body}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </Section>

      <Section tone="sunken" size="wide">
        <SectionHeading
          eyebrow="The team"
          title="Meet the kind of people we place"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sampleCaregivers.map((c) => (
            <CaregiverCard key={c.id} caregiver={c} />
          ))}
        </div>
      </Section>

      {/* Training programme: TR01-TR18 preserved verbatim. */}
      <Section size="wide">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="eyebrow">{trainingProgramme.presenter}</p>
            <h2 className="mt-3 type-h2">{trainingProgramme.title}</h2>
            <p className="mt-3 type-lead italic text-ink-600">
              {trainingProgramme.tagline}
            </p>

            <h3 className="mt-8 text-[1.15rem] font-semibold text-ink-900">
              {trainingProgramme.whyHeading}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {trainingProgramme.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check
                    size={18}
                    className="mt-1 shrink-0 text-verify-500"
                    aria-hidden="true"
                  />
                  <span className="text-ink-700">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-card bg-paper-sunken p-5">
              <h3 className="font-semibold text-ink-900">
                {trainingProgramme.registerHeading}
              </h3>
              <ul className="mt-3 space-y-1">
                {trainingProgramme.contacts.map((c) => (
                  <li key={c.phone} className="text-ink-700">
                    {c.name}:{" "}
                    <a
                      href={`tel:${c.phone}`}
                      className="font-semibold text-brand-800 hover:underline"
                    >
                      {c.phone}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <WhatsAppButton
                  label="Register via WhatsApp"
                  message="Hello Omojolagbe Care, I would like to register for the caregiver training."
                />
                <Link to="/careers" className="btn btn-ghost">
                  See caregiver roles
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <SmartImage
              media={media.training}
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="card p-4">
                <Calendar
                  size={17}
                  className="text-ink-500"
                  aria-hidden="true"
                />
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Most recent cohort
                </p>
                <p className="mt-1 text-sm text-ink-800">
                  {trainingProgramme.recentCohort.date}
                </p>
              </div>
              <div className="card p-4">
                <Clock size={17} className="text-ink-500" aria-hidden="true" />
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Time
                </p>
                <p className="mt-1 text-sm text-ink-800">
                  {trainingProgramme.recentCohort.time}
                </p>
              </div>
              <div className="card p-4">
                <MapPin size={17} className="text-ink-500" aria-hidden="true" />
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Venue
                </p>
                <p className="mt-1 text-sm text-ink-800">
                  {trainingProgramme.recentCohort.venue}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-ink-500">
              Training runs in cohorts. Contact us for the next dates.
            </p>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
