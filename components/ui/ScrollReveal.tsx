'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ENTERPRISE_EASE, ANIMATION_VARIANTS } from '@/lib/constants/animations';

export type ScrollRevealVariant = 'fadeUp' | 'fadeIn' | 'scaleIn' | 'slideLeft' | 'slideRight';

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
  variant = 'fadeUp',
  delay = 0,
  duration = 0.65,
  once = false,
  amount = 0.05,
  as = 'div',
}) => {
  const variants = ANIMATION_VARIANTS[variant];

  const MotionTag = (motion as any)[as] || motion.div;

  return (
    <MotionTag
      className={cn('will-change-transform', className)}
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
