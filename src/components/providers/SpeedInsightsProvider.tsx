'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { trackEvent } from '../../lib/analytics';

interface SpeedInsightsProviderProps {
  children: ReactNode;
}

/** Runs a callback when the browser is idle, so tracking never blocks paint. */
const runWhenIdle = (callback: () => void) => {
  const idleCallback = window.requestIdleCallback;

  if (typeof idleCallback === 'function') {
    idleCallback(() => callback(), { timeout: 2000 });
    return;
  }

  window.setTimeout(callback, 200);
};

/**
 * Reports the first time each section scrolls into view.
 * Returns a disconnect function, or undefined when there is nothing to observe.
 */
const observeSections = (): (() => void) | undefined => {
  const sections = document.querySelectorAll('section[id]');
  if (!sections.length) return undefined;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const sectionId = entry.target.getAttribute('id');
        if (sectionId) {
          trackEvent('section_visible', { section: sectionId });
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.3 },
  );

  sections.forEach((section) => observer.observe(section));
  return () => observer.disconnect();
};

/**
 * Reports load timing and one-off section-visibility events.
 * All work is deferred to idle time to keep the main thread free.
 */
export function SpeedInsightsProvider({ children }: SpeedInsightsProviderProps) {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) return;
    hasTracked.current = true;

    trackEvent('performance_metric', {
      metric_name: 'app-loaded',
      value: Math.round(performance.now()),
      event: 'initial-load',
    });

    let disconnectSections: (() => void) | undefined;

    // Sections mount after the first paint, so wait for idle before observing.
    runWhenIdle(() => {
      disconnectSections = observeSections();
    });

    return () => disconnectSections?.();
  }, []);

  return <>{children}</>;
}

export default SpeedInsightsProvider;
