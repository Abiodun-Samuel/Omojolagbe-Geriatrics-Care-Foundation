import type { Variants, Transition } from "motion/react";

/**
 * Motion presets tied to the token layer (docs/DESIGN_SYSTEM.md section 4).
 * Entrances are opacity + small translateY, once only. Reduced motion is
 * handled globally in CSS and by MotionConfig; these presets stay cheap.
 */

export const easeBrand: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const durBase = 0.32;
export const stagger = 0.07;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durBase, ease: easeBrand },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: durBase, ease: easeBrand } },
};

/** Parent that staggers its children on view. */
export const staggerParent: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger },
  },
};

/**
 * Reveal as soon as any part of the element enters the viewport, from a small
 * negative bottom margin so it triggers just before it is fully on screen.
 * A large negative margin (e.g. -10% all round) can leave the last item in a
 * tall, narrow column, like the booking-page sidebar, never satisfying the
 * threshold, so its content would stay at opacity 0 forever. Content
 * legibility must never depend on a scroll animation firing.
 */
export const viewportOnce = { once: true, margin: "0px 0px -80px 0px" } as const;

export const springSoft: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
};
