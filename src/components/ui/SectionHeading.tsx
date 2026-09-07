import { cn } from '../../lib/cn';
import { Reveal } from '../animations';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

/** Shared header block so every section announces itself the same way. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <Reveal
      className={cn(
        'mb-12 flex flex-col gap-4 sm:mb-16',
        isCentered ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? (
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-400" aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}

      <h2 className="text-display-sm text-content-primary sm:text-display-md">
        <span className="text-gradient">{title}</span>
      </h2>

      {subtitle ? (
        <p
          className={cn(
            'text-base leading-relaxed text-content-muted sm:text-lg',
            isCentered ? 'max-w-2xl' : 'max-w-xl',
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}

export default SectionHeading;
