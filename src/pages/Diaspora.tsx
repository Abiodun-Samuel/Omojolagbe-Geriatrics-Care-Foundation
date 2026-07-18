import { Link } from "react-router";
import {
  Clock,
  Banknote,
  FileText,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { WhatsAppButton } from "@/components/WhatsApp";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ProcessTimeline } from "@/sections/ProcessTimeline";
import { CtaBand } from "@/sections/CtaBand";
import { media } from "@/content/media";
import { sampleTestimonials } from "@/content/testimonials";
import { breadcrumbLd } from "@/lib/jsonld";

const answers = [
  {
    icon: Clock,
    title: "Reachable in your time zone",
    body: "A care line you can reach outside Nigerian business hours, including on WhatsApp. You should never have to wait until morning in Ibadan to ask a question.",
  },
  {
    icon: Banknote,
    title: "Pay from abroad, in Naira",
    body: "Arrange and pay for your parent's care from wherever you live. No asking a relative to handle money on your behalf.",
  },
  {
    icon: FileText,
    title: "A report after every visit",
    body: "You cannot see the care yourself, so we show it to you: what was done, how your parent is, what to watch.",
  },
  {
    icon: ShieldCheck,
    title: "Vetted people, verified",
    body: "Background checks, references, health screening and certified training, so you are not trusting a stranger a cousin recommended.",
  },
];

export function Component() {
  return (
    <>
      <Seo
        title="Care for Your Parents in Ibadan, Arranged from Abroad | Omojolagbe"
        description="For Nigerians abroad: arrange reliable, reported home care for your parents in Ibadan. Pay in Naira, reach us on WhatsApp across time zones, get a report after every visit."
        path="/diaspora"
        jsonLd={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Diaspora families", path: "/diaspora" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="For families abroad"
        title="You are thousands of miles away. Your parents should still be cared for properly."
        intro="Arranging care from London, Houston or Toronto usually means trusting someone else's word. We built this so you do not have to."
        crumbs={[{ label: "Diaspora families" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/book-assessment" className="btn btn-primary">
            Book a free assessment
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <WhatsAppButton
            message="Hello Omojolagbe Care, I live abroad and want to arrange care for my parent in Ibadan."
            label="Talk to us on WhatsApp"
          />
        </div>
      </PageHero>

      {/* Care before the crisis (Phase 1 research). */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <SmartImage
              media={media.about}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>
          <Reveal>
            <h2 className="type-h2">
              Most money sent home arrives after the emergency.
            </h2>
            <p className="mt-5 type-lead text-ink-600">
              Nigerians abroad send billions home every year, and a great deal
              of it goes on health. Almost all of it arrives after the fall,
              after the stroke, after the hospital call at 3am.
            </p>
            <p className="mt-4 text-ink-700">
              Structured care changes the order of events. A caregiver who is
              there every week notices the weight loss, the missed medication,
              the new unsteadiness, and tells you while it is still a small
              thing. That is what we are for.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="sunken" size="wide">
        <SectionHeading
          eyebrow="What you need, specifically"
          title="Built around the four things families abroad ask for"
        />
        <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2">
          {answers.map((a) => (
            <RevealItem key={a.title}>
              <div className="card flex h-full gap-4 p-6">
                <a.icon
                  size={24}
                  className="mt-0.5 shrink-0 text-verify-500"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-[1.1rem] font-semibold text-ink-900">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600">{a.body}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How it works from abroad"
          title="You can set this up this week"
          intro="The whole process works over the phone and WhatsApp. You do not need to fly home to start."
        />
        <div className="mt-10">
          <ProcessTimeline />
        </div>
      </Section>

      <Section tone="ink" size="wide">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="type-h2 text-white">
              Families who did exactly this
            </h2>
            <p className="mt-4 text-white/70">
              Adult children abroad are the families we serve most.
            </p>
            <WhatsAppButton
              className="mt-6"
              message="Hello Omojolagbe Care, I live abroad and want to arrange care for my parent in Ibadan."
              label="Ask us anything on WhatsApp"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {sampleTestimonials.slice(0, 2).map((t) => (
              <TestimonialCard key={t.id} item={t} />
            ))}
          </div>
        </div>
      </Section>

      <Section tone="sunken" size="prose">
        <div className="flex items-start gap-4 rounded-card bg-paper-raised p-6">
          <MessageCircle
            size={22}
            className="mt-1 shrink-0 text-verify-500"
            aria-hidden="true"
          />
          <div>
            <h2 className="text-[1.15rem] font-semibold text-ink-900">
              Different time zone? Start the conversation anyway.
            </h2>
            <p className="mt-2 text-ink-600">
              Send us a message whenever it suits you. We will reply and work
              around your hours, not ours.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Arrange care for your parents from anywhere"
        body="Tell us where your parents are and what worries you. The assessment is free, and we will be honest about what they actually need."
      />
    </>
  );
}
