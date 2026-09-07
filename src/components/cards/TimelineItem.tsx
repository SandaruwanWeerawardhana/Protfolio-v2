import type { EducationItem } from '../../types';
import Badge from '../ui/Badge';

interface TimelineItemProps {
  item: EducationItem;
  /** Hides the connector below the last entry. */
  isLast?: boolean;
}

/** One entry on the education timeline. */
export function TimelineItem({ item, isLast = false }: TimelineItemProps) {
  return (
    <li className="relative pb-10 pl-10 last:pb-0 sm:pl-12">
      {!isLast ? (
        <span
          aria-hidden="true"
          className="absolute left-[0.4375rem] top-4 h-full w-px bg-gradient-to-b from-primary-400/40 to-transparent"
        />
      ) : null}

      <span
        aria-hidden="true"
        className="absolute left-0 top-2 grid h-4 w-4 place-items-center rounded-full border border-primary-400/40 bg-background"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
      </span>

      <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary-300">
        {item.period}
      </p>
      <h4 className="mt-2 font-display text-lg font-semibold text-content-primary">
        {item.degree}
      </h4>
      <p className="mt-1 text-sm text-content-muted">{item.institution}</p>

      {item.highlights?.length ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {item.highlights.map((highlight) => (
            <li key={highlight}>
              <Badge>{highlight}</Badge>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default TimelineItem;
