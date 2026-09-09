'use client';

import { useCallback, useRef } from 'react';
import type { CSSProperties, PointerEvent as ReactPointerEvent, ReactNode, Ref } from 'react';
import { cn } from '../../lib/cn';
import { spotlight } from '../../lib/spotlight';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** Colour of the cursor-following glow. */
  spotlightColor?: string;
  /** Classes for the inner content wrapper (layout lives here, not on the card). */
  contentClassName?: string;
  as?: 'div' | 'article' | 'li';
}

/**
 * Card with a pointer-tracking glow.
 * The pointer position is written to CSS variables instead of state, so moving
 * the mouse never triggers a React re-render.
 */
export function SpotlightCard({
  children,
  className,
  spotlightColor = spotlight.sky,
  contentClassName,
  as: Tag = 'div',
}: SpotlightCardProps) {
  const ref = useRef<HTMLElement>(null);

  const handlePointerMove = useCallback((event: ReactPointerEvent<HTMLElement>) => {
    const element = ref.current;
    if (!element || event.pointerType === 'touch') return;

    const rect = element.getBoundingClientRect();
    element.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
    element.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
  }, []);

  const setOpacity = useCallback((value: string) => {
    ref.current?.style.setProperty('--spot-opacity', value);
  }, []);

  return (
    <Tag
      ref={ref as Ref<never>}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setOpacity('1')}
      onPointerLeave={() => setOpacity('0')}
      onFocus={() => setOpacity('1')}
      onBlur={() => setOpacity('0')}
      className={cn('group/spotlight relative overflow-hidden', className)}
      style={
        {
          '--spot-x': '50%',
          '--spot-y': '0%',
          '--spot-opacity': '0',
          '--spot-color': spotlightColor,
        } as CSSProperties
      }
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[var(--spot-opacity)] transition-opacity duration-500 ease-out"
        style={{
          background:
            'radial-gradient(320px circle at var(--spot-x) var(--spot-y), var(--spot-color), transparent 72%)',
        }}
      />
      <div className={cn('relative', contentClassName)}>{children}</div>
    </Tag>
  );
}

export default SpotlightCard;
