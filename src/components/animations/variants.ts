import type { Easing, Variants } from 'framer-motion';

/** Shared easing so every entrance feels like the same system. */
export const easeOutExpo: Easing = [0.16, 1, 0.3, 1];

export const viewportOnce = { once: true, margin: '-80px 0px -80px 0px' } as const;

export const fadeUp = (distance = 24, duration = 0.55): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: easeOutExpo },
  },
});

export const fadeIn = (duration = 0.5): Variants => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration, ease: easeOutExpo } },
});

export const slideIn = (axis: 'x' | 'y' = 'x', distance = 24): Variants => ({
  hidden: axis === 'x' ? { opacity: 0, x: distance } : { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.55, ease: easeOutExpo },
  },
});

export const scaleIn = (from = 0.96): Variants => ({
  hidden: { opacity: 0, scale: from },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
});

export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Motion-free fallbacks used when the user asks for reduced motion. */
export const staticVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};
