import { Link } from "react-router";
import { HandHeart, Handshake, Users, Building2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { media } from "@/content/media";
import { foundingParagraphHome, objectivesWeVoice } from "@/content/about";

const objectiveIcons = [HandHeart, Handshake, Users, Building2];

/**
 * The original home About section, preserved: the founding paragraph (A02),
 * the four "We ..." objectives (A04-A07), and the "Read More" CTA (A03).
 * The foundation is the secondary narrative arm (docs/DECISIONS.md D4).
 */
export function AboutFoundation() {
  return (
    <Section tone="sunken" size="wide" ariaLabel="About us">
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <SmartImage
            media={media.about}
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </Reveal>

        <div>
          {/* A01 "About Us" preserved as the section heading. */}
          <SectionHeading
            eyebrow="About Us"
            title="A foundation for the aged, since 2018"
          />
          {/* A02 preserved verbatim. */}
          <p className="mt-5 text-ink-700">{foundingParagraphHome}</p>

          {/* A03 preserved verbatim. */}
          <Link to="/about" className="btn btn-ghost mt-6">
            Read More &#8594;
          </Link>

          {/* A04-A07 preserved verbatim. */}
          <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2">
            {objectivesWeVoice.map((obj, i) => {
              const Icon = objectiveIcons[i];
              return (
                <RevealItem key={obj} className="flex gap-3">
                  <Icon
                    size={20}
                    className="mt-0.5 shrink-0 text-brand-600"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-ink-600">{obj}</p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </Section>
  );
}
