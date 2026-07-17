import { useScroll, useSpring, useReducedMotion, motion } from "motion/react";

/**
 * The structural signature (docs/DESIGN_SYSTEM.md section 3): a continuous
 * vertical hairline pinned to the left edge that fills with brand yellow as
 * the reader scrolls, like the binding of a care record. Fixed to the
 * viewport left edge so it threads every page through the shared layout.
 *
 * Reduced motion: static hairline with a static yellow cap, no scroll fill.
 * It is purely decorative, so it is aria-hidden.
 */
export function CareSpine() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-2 top-0 z-30 hidden h-full w-0.5 sm:block md:left-4 lg:left-[max(1.5rem,calc((100vw-var(--container-wide))/2-1.5rem))]"
      style={{ backgroundColor: "var(--color-ink-200)" }}
    >
      {reduce ? (
        <span
          className="absolute left-1/2 top-24 block h-16 w-px -translate-x-1/2"
          style={{ backgroundColor: "var(--color-brand-400)" }}
        />
      ) : (
        <motion.div
          className="absolute inset-x-0 top-0 origin-top"
          style={{
            scaleY,
            height: "100%",
            backgroundColor: "var(--color-brand-400)",
          }}
        />
      )}
    </div>
  );
}
