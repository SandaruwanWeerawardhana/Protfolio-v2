import { useEffect, useState } from 'react';

/** State updater that wraps around the end of the list. */
const advance = (length: number) => (previous: number) => (previous + 1) % length;

/**
 * Cycles through indices of a list on an interval.
 * Pauses while the tab is hidden so background tabs stay idle.
 */
export function useRotatingIndex(length: number, intervalMs = 2600): number {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (length <= 1) return;

    let timer: number | undefined;

    const tick = () => setIndex(advance(length));

    const start = () => {
      timer = window.setInterval(tick, intervalMs);
    };

    const stop = () => {
      if (timer) window.clearInterval(timer);
      timer = undefined;
    };

    const handleVisibility = () => (document.hidden ? stop() : start());

    start();
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      stop();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [length, intervalMs]);

  return index;
}
