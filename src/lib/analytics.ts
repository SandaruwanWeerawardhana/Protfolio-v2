import { track } from '@vercel/analytics';

/** Values Vercel Analytics accepts as event properties. */
export type AnalyticsProperties = Record<string, string | number | boolean | null>;

/**
 * Sends a custom event to Vercel Analytics.
 * Failures never bubble up to the UI - analytics is best effort.
 */
export const trackEvent = (eventName: string, properties?: AnalyticsProperties) => {
  if (!eventName) return;

  try {
    track(eventName, properties);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Analytics tracking error:', error);
    }
  }
};

export const trackPageView = (path?: string) =>
  trackEvent('page_view', {
    path: path ?? window.location.pathname,
    referrer: document.referrer,
    title: document.title,
    timestamp: new Date().toISOString(),
  });

export const trackInteraction = (elementName: string, action: string) =>
  trackEvent('user_interaction', {
    element: elementName,
    action,
    path: window.location.pathname,
    timestamp: new Date().toISOString(),
  });
