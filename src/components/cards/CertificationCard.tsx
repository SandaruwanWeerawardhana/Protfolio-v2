import { ArrowUpRight } from 'lucide-react';
import type { Certification } from '../../types';

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  const { title, issuer, href, icon: Icon } = certification;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="surface-interactive group flex items-start gap-4 p-5"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary-400/20 bg-primary-500/10 text-primary-300 transition-colors duration-300 group-hover:bg-primary-500/20">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block font-medium leading-snug text-content-primary">{title}</span>
        <span className="mt-1 flex items-center gap-1 text-sm text-content-muted transition-colors duration-200 group-hover:text-primary-300">
          {issuer}
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </span>
    </a>
  );
}

export default CertificationCard;
