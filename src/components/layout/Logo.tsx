'use client';

import { Link } from 'react-scroll';
import { site } from '../../data/site';
import { cn } from '../../lib/cn';

interface LogoProps {
  className?: string;
  /** Hides the wordmark on small screens when space is tight. */
  compact?: boolean;
}

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      to="about"
      smooth
      offset={-96}
      duration={600}
      className={cn('group inline-flex cursor-pointer items-center gap-3 rounded-xl', className)}
      aria-label={`${site.name}, back to top`}
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient font-display text-lg font-bold text-white shadow-glow transition-transform duration-300 ease-out-expo group-hover:scale-105">
        S
        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/25" aria-hidden="true" />
      </span>

      <span
        className={cn(
          'whitespace-nowrap font-display text-base font-semibold leading-tight text-content-primary',
          compact && 'hidden sm:block',
        )}
      >
        {site.firstName}
        <span className="text-content-subtle"> {site.lastName}</span>
      </span>
    </Link>
  );
}

export default Logo;
