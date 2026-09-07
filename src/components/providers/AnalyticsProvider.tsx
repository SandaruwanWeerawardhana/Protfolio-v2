import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { trackPageView } from '../../lib/analytics';

interface AnalyticsProviderProps {
  children: ReactNode;
}

/**
 * Records a single page view per session.
 * The Vercel Analytics script itself is injected once from main.tsx.
 */
export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) return;
    hasTracked.current = true;
    trackPageView();
  }, []);

  return <>{children}</>;
}

export default AnalyticsProvider;
