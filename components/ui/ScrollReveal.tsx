"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ENTERPRISE_EASE,
  ANIMATION_VARIANTS,
} from "@/lib/constants/animations";

export type ScrollRevealVariant =
  | "fadeUp"
  | "fadeIn"
  | "scaleIn"
  | "slideLeft"
  | "slideRight";

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: ScrollRevealVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  // NOTE: The `as` prop has been intentionally removed.
  // Dynamic tag resolution (motion[tag] / useMemo) diverges between the SSR
  // and client renders, causing a persistent hydration mismatch. All
  // ScrollReveal elements now render as <div>. For semantic elements like
  // <section>, wrap the ScrollReveal in the appropriate HTML element instead.
}

/**
 * ScrollReveal – scroll-triggered reveal animation.
 *
 * Always renders as motion.div (fixed at module scope, identical on server
 * and client — zero chance of a hydration tag mismatch).
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.1,
}) => {
  const reduceMotion = useReducedMotion();
  const variants = ANIMATION_VARIANTS[variant];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={reduceMotion ? { hidden: {}, show: {} } : variants}
      transition={{
        duration: reduceMotion ? 0 : duration,
        delay: reduceMotion ? 0 : delay,
        ease: ENTERPRISE_EASE,
      }}
    >
      {children}
    </motion.div>
  );
};
