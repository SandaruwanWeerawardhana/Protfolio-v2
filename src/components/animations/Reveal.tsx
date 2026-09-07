import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { easeOutExpo, viewportOnce } from './variants';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before the entrance starts. */
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  /** Animate on mount instead of on scroll (used above the fold). */
  immediate?: boolean;
}

const offsetFor = (direction: Direction, distance: number) => {
  switch (direction) {
    case 'up':
      return { y: distance };
    case 'down':
      return { y: -distance };
    case 'left':
      return { x: distance };
    case 'right':
      return { x: -distance };
    default:
      return {};
  }
};

/**
 * Entrance wrapper used by every section.
 * Falls back to a plain fade when the user prefers reduced motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.55,
  direction = 'up',
  distance = 24,
  immediate = false,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = prefersReducedMotion ? {} : offsetFor(direction, distance);

  const animation = {
    initial: { opacity: 0, ...offset },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: {
      duration: prefersReducedMotion ? 0.2 : duration,
      delay: prefersReducedMotion ? 0 : delay,
      ease: easeOutExpo,
    },
  };

  if (immediate) {
    return (
      <motion.div
        className={className}
        initial={animation.initial}
        animate={animation.animate}
        transition={animation.transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={animation.initial}
      whileInView={animation.animate}
      viewport={viewportOnce}
      transition={animation.transition}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
