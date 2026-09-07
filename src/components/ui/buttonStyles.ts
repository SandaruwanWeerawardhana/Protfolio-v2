import { cn } from '../../lib/cn';

export type ButtonVariant = 'primary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium ' +
  'transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out-expo ' +
  'hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ' +
  'disabled:pointer-events-none disabled:opacity-60 select-none whitespace-nowrap';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-gradient text-white shadow-[0_10px_30px_-10px_rgba(56,189,248,0.7)] hover:shadow-[0_16px_40px_-12px_rgba(56,189,248,0.85)]',
  outline:
    'border border-white/15 bg-white/[0.04] text-content-primary backdrop-blur-sm hover:border-primary-400/40 hover:bg-white/[0.08]',
  ghost: 'text-content-muted hover:bg-white/5 hover:text-content-primary',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm sm:text-base',
  lg: 'h-12 px-7 text-base',
};

export const buttonStyles = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  className?: string,
) => cn(base, variants[variant], sizes[size], className);
