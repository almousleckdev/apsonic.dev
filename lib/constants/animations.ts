// Enterprise Animation Constants
// Based on premium cubic-bezier easing for smooth, high-end transitions.

export const ENTERPRISE_EASE = [0.22, 1, 0.36, 1] as const;

export const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.96 },
    show: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0 },
  },
  staggerContainer: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  },
};

export const STAGGER_CONTAINER = ANIMATION_VARIANTS.staggerContainer;

export const TRANSITION_DEFAULTS = {
  duration: 1.0,
  ease: ENTERPRISE_EASE,
};
