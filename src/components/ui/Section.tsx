import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import Container from './Container';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  size?: 'narrow' | 'default' | 'wide';
  /** Optional decorative layer rendered behind the content. */
  backdrop?: ReactNode;
}

/** Consistent vertical rhythm and container for every page section. */
export function Section({
  id,
  children,
  className,
  containerClassName,
  size = 'default',
  backdrop,
}: SectionProps) {
  return (
    <section id={id} className={cn('section-shell', className)}>
      {backdrop ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          {backdrop}
        </div>
      ) : null}
      <Container size={size} className={cn('relative z-10', containerClassName)}>
        {children}
      </Container>
    </section>
  );
}

export default Section;
