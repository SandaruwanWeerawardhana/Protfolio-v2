import { useEffect, useRef } from 'react';

/**
 * Fires a callback the first time the element enters the viewport.
 * Used for view-based analytics without re-render churn.
 */
export function useInViewOnce<T extends HTMLElement>(
  onEnter: () => void,
  threshold = 0.5,
) {
  const ref = useRef<T>(null);
  const callbackRef = useRef(onEnter);
  callbackRef.current = onEnter;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callbackRef.current();
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
