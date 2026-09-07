import { useEffect, useState } from 'react';

/**
 * Tracks whether the page is scrolled past a threshold.
 * The listener is passive and only writes state on a real change.
 */
export function useScrolled(threshold = 12): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled((previous) => {
        const next = window.scrollY > threshold;
        return next === previous ? previous : next;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}
