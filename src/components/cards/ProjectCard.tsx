import { ArrowUpRight, Check, ExternalLink, Github } from 'lucide-react';
import type { Project } from '../../types';
import { cn } from '../../lib/cn';
import Badge from '../ui/Badge';
import OptimizedImage from '../ui/OptimizedImage';
import SpotlightCard from '../ui/SpotlightCard';

interface ProjectCardProps {
  project: Project;
  /** Featured cards get a wider, two-column layout on large screens. */
  featured?: boolean;
  priority?: boolean;
}

export function ProjectCard({ project, featured = false, priority = false }: ProjectCardProps) {
  const { title, description, image, techStack, achievements, links, spotlightColor } = project;
  const primaryLink = links.live ?? links.github;

  return (
    <SpotlightCard
      as="article"
      spotlightColor={spotlightColor}
      className="surface-interactive group h-full"
      contentClassName={cn(
        'flex h-full flex-col',
        featured && 'lg:flex-row lg:items-stretch',
      )}
    >
      <div
        className={cn(
          'relative shrink-0 overflow-hidden',
          featured ? 'lg:w-[46%]' : '',
        )}
      >
        <OptimizedImage
          src={image}
          alt={`${title} preview`}
          priority={priority}
          sizes={featured ? '(min-width: 1024px) 46vw, 100vw' : '(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw'}
          wrapperClassName={cn(
            'aspect-[16/10] w-full',
            featured ? 'lg:h-full lg:aspect-auto' : '',
          )}
          className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90"
        />

        {primaryLink ? (
          <a
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title}`}
            className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-background/70 text-white opacity-0 backdrop-blur transition-all duration-300 ease-out-expo hover:bg-primary-600 group-hover:opacity-100 focus-visible:opacity-100"
          >
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </a>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-content-primary sm:text-xl">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-content-muted">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        <ul
          className={cn(
            'mt-5 space-y-2 text-sm text-content-muted',
            featured ? '' : 'flex-1',
          )}
        >
          {achievements.map((achievement) => (
            <li key={achievement} className="flex gap-2.5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <span className="leading-relaxed">{achievement}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-white/[0.07] pt-5">
          {links.github ? (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-content-muted transition-colors duration-200 hover:text-primary-300"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              Code
            </a>
          ) : null}

          {links.live ? (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-content-muted transition-colors duration-200 hover:text-primary-300"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </SpotlightCard>
  );
}

export default ProjectCard;
