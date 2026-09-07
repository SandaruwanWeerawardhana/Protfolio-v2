import { useMemo } from 'react';
import { trackEvent, trackInteraction, trackPageView } from '../lib/analytics';

/**
 * Stable analytics helpers for components.
 * The returned object is memoised so it is safe inside effect dependencies.
 */
export function useAnalytics() {
  return useMemo(() => ({ trackEvent, trackPageView, trackInteraction }), []);
}
