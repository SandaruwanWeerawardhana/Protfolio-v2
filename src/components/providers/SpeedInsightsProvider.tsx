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
      const sections = document.querySelectorAll('section[id]');
      if (!sections.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const sectionId = entry.target.getAttribute('id');
            if (sectionId) {
              trackEvent('section_visible', { section: sectionId });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 },
      );

      sections.forEach((section) => observer.observe(section));
      disconnectSections = () => observer.disconnect();
    });

    return () => disconnectSections?.();
  }, []);

  return <>{children}</>;
}

export default SpeedInsightsProvider;
