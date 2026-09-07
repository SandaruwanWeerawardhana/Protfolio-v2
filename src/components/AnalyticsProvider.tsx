import { ReactNode, useEffect, useCallback } from 'react';
import { inject, track } from '@vercel/analytics';

interface AnalyticsProviderProps {
  children: ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  // Track page view with current path and referrer
  const trackPageView = useCallback(() => {
    track('page_view', { 
      path: window.location.pathname,
      referrer: document.referrer
    });
  }, []);

  useEffect(() => {
    inject();
    trackPageView();
    return () => {
      // Cleanup if needed
    };
  }, [trackPageView]);
  
  return <>{children}</>;
}
