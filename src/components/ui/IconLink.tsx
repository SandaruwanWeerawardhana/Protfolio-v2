import type { IconComponent } from '../../types';
import { cn } from '../../lib/cn';

interface IconLinkProps {
  href: string;
  label: string;
  icon: IconComponent;
  className?: string;
  size?: 'sm' | 'md';
}

const sizes = {
  sm: 'h-9 w-9',
  md: 'h-11 w-11',
} as const;

/** Round icon button used for social links in the hero, contact and footer. */
export function IconLink({ href, label, icon: Icon, className, size = 'md' }: IconLinkProps) {
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={cn(
        'inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-content-muted',
        'transition-[transform,color,border-color,background-color,box-shadow] duration-300 ease-out-expo',
        'hover:-translate-y-1 hover:border-primary-400/40 hover:bg-white/[0.08] hover:text-white hover:shadow-glow',
        sizes[size],
        className,
      )}
    >
      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
    </a>
  );
}

export default IconLink;
