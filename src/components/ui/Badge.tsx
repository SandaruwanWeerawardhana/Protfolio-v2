import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: 'neutral' | 'primary';
}

const tones = {
  neutral: 'border-white/10 bg-white/[0.05] text-content-secondary',
  primary: 'border-primary-400/25 bg-primary-500/10 text-primary-200',
} as const;

/** Small pill used for tech stacks and status labels. */
export function Badge({ children, className, tone = 'neutral' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium leading-none transition-colors duration-200',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
