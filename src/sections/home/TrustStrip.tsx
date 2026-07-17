import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { trustStats, trustPoints } from "@/content/trust";

/** At-a-glance credentials and proof (Phase 1: trust before price). */
export function TrustStrip() {
  return (
    <section
      aria-label="Why families trust us"
      className="border-y border-ink-200 bg-paper-raised py-[clamp(2.5rem,4vw,3.5rem)]"
    >
      <Container size="wide">
        <RevealGroup className="grid gap-x-8 gap-y-10 md:grid-cols-3">
          {trustStats.map((stat) => (
            <RevealItem
              key={stat.label}
              className="flex items-center gap-4 md:justify-center"
            >
              <stat.icon
                size={28}
                className="shrink-0 text-ink-400"
                aria-hidden="true"
              />
              <div>
                <p className="font-display text-[2rem] font-semibold leading-none text-ink-900">
                  <CountUp
                    to={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-1 text-sm text-ink-600">
                  {stat.label}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-10 grid gap-6 border-t border-ink-200 pt-8 md:grid-cols-3">
          {trustPoints.map((point) => (
            <div key={point.title} className="flex gap-3">
              <point.icon
                size={22}
                className="mt-0.5 shrink-0 text-verify-500"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-ink-900">
                  {point.title}
                </p>
                <p className="mt-1 text-sm text-ink-600">
                  {point.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
