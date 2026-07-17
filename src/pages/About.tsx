import { Target, Eye, Dot, HeartHandshake } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/sections/CtaBand";
import { media } from "@/content/media";
import {
  foundingParagraph,
  objectivesToVoice,
  audienceLine,
  mission,
  vision,
  needs,
  personalCare,
  qualityOfLife,
} from "@/content/about";
import { breadcrumbLd } from "@/lib/jsonld";
import { site } from "@/lib/site";

const needIcons: Record<string, string> = {
  donor: "Donors",
  wheelchair: "Mobility equipment",
  ambulance: "An ambulance",
  building: "Land and building",
};

export function Component() {
  return (
    <>
      <Seo
        title="About Us | Omojolagbe Geriatric Care Foundation"
        description="Established in 2018 in Ibadan and registered with the Corporate Affairs Commission, Omojolagbe Geriatric Care Foundation has impacted over 1000 elderly lives."
        path="/about"
        jsonLd={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
          ]),
        ]}
      />
      {/* AB01 preserved. */}
      <PageHero
        eyebrow={`Since ${site.founded} in Ibadan`}
        title="About Us"
        intro="A foundation for the aged, and a home care service for families who want their parents cared for properly."
        crumbs={[{ label: "About Us" }]}
      />

      <Section size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SmartImage
              media={media.aboutSecondary}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>
          <Reveal>
            {/* AB02 preserved verbatim, rendered whole. */}
            <p className="text-(--text-lead) leading-relaxed text-ink-700">
              {foundingParagraph}
            </p>

            <hr className="my-8 border-ink-200" />

            {/* AB03-AB06 preserved verbatim. */}
            <h2 className="text-(--text-h3)">Our objectives</h2>
            <ul className="mt-5 space-y-4">
              {objectivesToVoice.map((obj) => (
                <li key={obj} className="flex gap-3">
                  <Dot
                    size={22}
                    className="mt-1 shrink-0 rounded bg-ink-900 text-brand-400"
                    aria-hidden="true"
                  />
                  <span className="text-ink-700">{obj}</span>
                </li>
              ))}
            </ul>

            <hr className="my-8 border-ink-200" />

            {/* AB07 preserved verbatim. */}
            <p className="text-ink-700">{audienceLine}</p>
          </Reveal>
        </div>
      </Section>

      {/* AB08-AB11 preserved verbatim. */}
      <Section tone="ink" size="wide">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-card border border-white/10 p-8">
            <Target
              size={26}
              className="text-brand-400"
              aria-hidden="true"
            />
            <h2 className="mt-4 text-(--text-h3) text-white">
              {mission.heading}
            </h2>
            <p className="mt-3 text-white/70">{mission.body}</p>
          </Reveal>
          <Reveal className="rounded-card border border-white/10 p-8">
            <Eye
              size={26}
              className="text-brand-400"
              aria-hidden="true"
            />
            <h2 className="mt-4 text-(--text-h3) text-white">
              {vision.heading}
            </h2>
            <p className="mt-3 text-white/70">{vision.body}</p>
          </Reveal>
        </div>
      </Section>

      {/* S01-S06 preserved verbatim (the original home Services narrative). */}
      <Section size="wide">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-(--text-h2)">{personalCare.heading}</h2>
            {personalCare.paragraphs.map((p) => (
              <p key={p} className="mt-4 text-ink-700">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal>
            <h2 className="text-(--text-h2)">{qualityOfLife.heading}</h2>
            {qualityOfLife.paragraphs.map((p) => (
              <p key={p} className="mt-4 text-ink-700">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* AB12-AB16 preserved verbatim: the foundation arm. */}
      <Section tone="sunken" size="wide">
        <SectionHeading
          align="center"
          eyebrow="The foundation arm"
          title="Our Needs"
          intro="Alongside our paid home care services, the foundation supports vulnerable elderly people. These are the things that would let us reach further."
        />
        <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {needs.map((need) => (
            <RevealItem key={need.label}>
              <div className="card flex h-full flex-col items-center p-6 text-center">
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-100"
                  aria-hidden="true"
                >
                  <HeartHandshake
                    size={24}
                    className="text-ink-900"
                  />
                </span>
                <p className="mt-4 font-semibold text-ink-900">
                  {need.label}
                </p>
                <p className="sr-only">{needIcons[need.icon]}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
        <p className="mt-8 text-center text-ink-600">
          If you would like to support this work,{" "}
          <a
            href={`mailto:${site.emails.foundation}`}
            className="font-semibold text-brand-800 hover:underline"
          >
            write to the foundation
          </a>
          .
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
