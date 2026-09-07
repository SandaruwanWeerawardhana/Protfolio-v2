import { useEffect, useState } from 'react';

/**
 * Scroll spy built on IntersectionObserver so no layout is read on scroll.
 * Returns the id of the section closest to the top of the viewport.
 */
export function useActiveSection(sectionIds: string[], offset = 96): string {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        });

        if (visible.size === 0) return;

        const [topMost] = [...visible.entries()].sort((a, b) => b[1] - a[1]);
        setActiveSection(topMost[0]);
      },
      {
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeSection;
}
