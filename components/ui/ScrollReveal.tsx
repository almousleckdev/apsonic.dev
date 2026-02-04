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
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * ScrollReveal
 * A premium "scroll into view" component using unified enterprise easing.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  duration = 0.65,
  once = false,
  amount = 0.05,
  as = "div",
}) => {
  const variants = ANIMATION_VARIANTS[variant];

  // Explicitly map supported tags to ensure stable references and avoid hydration mismatches
  const MotionTag = React.useMemo(() => {
    const tag = as as string;
    // Check for direct property availability first (most stable)
    if ((motion as any)[tag]) {
      return (motion as any)[tag];
    }
    // Fallback to create if available (v12+)
    if ((motion as any).create) {
      return (motion as any).create(tag);
    }
    // Final fallback to checking motion exports directly (legacy)
    // or defaulting to div if strictly necessary, but prefer configured tag
    return motion.div;
  }, [as]);

  return (
    <MotionTag
      className={cn("will-change-transform", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
      transition={{
        duration: duration,
        delay: delay,
        ease: ENTERPRISE_EASE,
      }}
    >
      {children}
    </MotionTag>
  );
};
