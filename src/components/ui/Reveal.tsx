import type { ReactNode, ElementType } from "react";
import { motion } from "motion/react";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** delay in seconds for one-off reveals */
  delay?: number;
};

/** Single element scroll reveal: opacity + translateY, once only. */
export function Reveal({ children, as, className, delay = 0 }: RevealProps) {
  const Comp = motion.create(as ?? "div");
  return (
    <Comp
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </Comp>
  );
}

/** Parent that staggers Reveal-style children. Use with RevealItem. */
export function RevealGroup({
  children,
  as,
  className,
}: Omit<RevealProps, "delay">) {
  const Comp = motion.create(as ?? "div");
  return (
    <Comp
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </Comp>
  );
}

export function RevealItem({
  children,
  as,
  className,
}: Omit<RevealProps, "delay">) {
  const Comp = motion.create(as ?? "div");
  return (
    <Comp className={className} variants={fadeUp}>
      {children}
    </Comp>
  );
}
