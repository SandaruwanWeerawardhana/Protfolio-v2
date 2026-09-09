'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, staggerContainer, staticVariants, viewportOnce } from './variants';

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** Delay between children, in seconds. */
  stagger?: number;
  delayChildren?: number;
  as?: 'div' | 'ul' | 'ol';
}

/** Parent that releases its children one after another as it scrolls into view. */
export function Stagger({
  children,
  className,
  stagger = 0.07,
  delayChildren = 0,
  as = 'div',
}: StaggerProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={staggerContainer(prefersReducedMotion ? 0 : stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  distance?: number;
  as?: 'div' | 'li';
}

/** Child of <Stagger>; inherits the parent timing. */
export function StaggerItem({
  children,
  className,
  distance = 20,
  as = 'div',
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={prefersReducedMotion ? staticVariants : fadeUp(distance)}
    >
      {children}
    </MotionTag>
  );
}
