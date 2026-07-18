import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SmartImage } from "@/components/ui/SmartImage";
import { WhatsAppButton } from "@/components/WhatsApp";
import { Badge } from "@/components/ui/Badge";
import { heroCollage } from "@/content/media";
import { heroLegacyLine } from "@/content/about";
import { easeBrand } from "@/lib/motion";

/**
 * The flagship hero: an editorial image collage, not a slideshow (Phase 1:
 * things we will not do). One orchestrated load sequence. Text is in the DOM
 * immediately and readable before motion completes; only transform/opacity
 * animate.
 *
 * Preserved original copy: H01 ("Best Home Care & Services Provider") as the
 * eyebrow badge, and H02 ("We create healthier, happier and fruitful life for
 * the elderly.") as the trust line, so the original positioning is not lost.
 */
export function Hero() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.56, ease: easeBrand },
    },
  };
  const imageIn = (delay: number) => ({
    hidden: { opacity: 0, y: 24, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: easeBrand, delay },
    },
  });

  return (
    <section className="relative overflow-hidden bg-paper pb-[clamp(3rem,6vw,6rem)] pt-[clamp(1.5rem,4vw,3.5rem)]">
      {/* soft brand wash behind the collage */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-[42rem] w-[42rem] translate-x-1/4 -translate-y-1/4 rounded-full bg-brand-100/60 blur-3xl lg:block"
      />

      <Container size="wide" className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          {/* ---- Left column: the thesis ---- */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item}>
              <Badge tone="brand" size="md" dot>
                Best Home Care &amp; Services Provider
              </Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-5 type-hero leading-[0.98] tracking-[-0.02em]"
            >
              The people you love,{" "}
              <span className="text-brand-800">in the best hands.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="measure-lead mt-6 type-lead text-ink-600"
            >
              Compassionate home care in Ibadan. Vetted caregivers, licensed
              nurses, and a report after every visit.
            </motion.p>

            {/* H02 preserved verbatim, with its three highlighted words.
                Yellow cannot be text on paper (1.10:1), so emphasis is a
                yellow marker behind ink. */}
            <motion.p
              variants={item}
              className="mt-4 font-display text-[1.15rem] text-ink-800"
            >
              We create{" "}
              {heroLegacyLine.words.map((word, i) => (
                <span key={word}>
                  <em className="marker-brand">{word}</em>
                  {i === 0 ? ", " : i === 1 ? " and " : " "}
                </span>
              ))}
              life for the elderly.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link to="/book-assessment" className="btn btn-primary">
                Book a free care assessment
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <WhatsAppButton message="Hello Omojolagbe Care, I would like to arrange home care for my parent." />
            </motion.div>

            {/* H03 and H04 preserved verbatim as the secondary paths. */}
            <motion.p
              variants={item}
              className="mt-5 flex flex-wrap gap-x-5 text-sm"
            >
              <Link
                to="/about"
                className="cursor-pointer font-semibold text-brand-800 hover:underline"
              >
                Learn More &#8594;
              </Link>
              <Link
                to="/contact"
                className="cursor-pointer font-semibold text-brand-800 hover:underline"
              >
                Contact
              </Link>
            </motion.p>
          </motion.div>

          {/* ---- Right column: the editorial image collage ---- */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="relative mx-auto w-full max-w-xl lg:mx-0"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <motion.div
                  variants={imageIn(0.15)}
                  className="overflow-hidden rounded-lg shadow-pop"
                >
                  <SmartImage
                    media={heroCollage[0]}
                    priority
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    aspectRatio="3 / 4"
                  />
                </motion.div>
                <motion.div
                  variants={imageIn(0.3)}
                  className="overflow-hidden rounded-lg shadow-card"
                >
                  <SmartImage
                    media={heroCollage[1]}
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    aspectRatio="1 / 1"
                  />
                </motion.div>
              </div>

              <div className="flex flex-col gap-4 pt-10">
                <motion.div
                  variants={imageIn(0.22)}
                  className="overflow-hidden rounded-lg shadow-card"
                >
                  <SmartImage
                    media={heroCollage[2]}
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    aspectRatio="1 / 1"
                  />
                </motion.div>
                <motion.div
                  variants={imageIn(0.37)}
                  className="overflow-hidden rounded-lg shadow-pop"
                >
                  <SmartImage
                    media={heroCollage[3]}
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    aspectRatio="3 / 4"
                  />
                </motion.div>
              </div>
            </div>

            {/* floating proof card */}
            <motion.div
              variants={imageIn(0.5)}
              className="card absolute -bottom-5 left-1/2 w-[15rem] -translate-x-1/2 p-4"
            >
              <div className="flex items-center gap-2">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-verify-50"
                  aria-hidden="true"
                >
                  <ShieldCheck size={18} className="text-verify-500" />
                </span>
                <p className="text-sm font-semibold text-ink-900">
                  A report after every visit
                </p>
              </div>
              <p className="mt-2 text-sm text-ink-600">
                So a family member anywhere always knows how their parent is
                doing.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
