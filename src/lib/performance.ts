import { trackEvent } from './analytics';
import type { AnalyticsProperties } from './analytics';

/**
 * Starts a timer and returns a stop function that reports the duration.
 * Very short durations are ignored to keep the analytics signal clean.
 */
export const measurePerformance = (metricName: string, properties?: AnalyticsProperties) => {
  const startTime = performance.now();

  return () => {
    const duration = performance.now() - startTime;

    if (duration > 5) {
      trackEvent('performance_metric', {
        metric_name: metricName,
        value: Math.round(duration),
        ...properties,
        timestamp: new Date().toISOString(),
      });
    }

    return duration;
  };
};
