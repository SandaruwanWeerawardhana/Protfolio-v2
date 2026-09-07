import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';
import { site } from '../../data/site';
import { cn } from '../../lib/cn';
import { Reveal, Stagger, StaggerItem } from '../animations';
import ProjectCard from '../cards/ProjectCard';
import { ButtonLink } from '../ui/Button';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';

export function Projects() {
  return (
    <Section
      id="projects"
      size="wide"
      backdrop={
        <div className="absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary-700/10 blur-[140px]" />
      }
    >
      <SectionHeading
        eyebrow="Work"
        title="Featured Projects"
        subtitle="Showcasing my best work and technical experience"
      />

      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8" stagger={0.09}>
        {projects.map((project, index) => (
          <StaggerItem
            key={project.title}
            className={cn('h-full', project.featured && 'sm:col-span-2')}
          >
            <ProjectCard project={project} featured={project.featured} priority={index === 0} />
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-14 flex justify-center" delay={0.1}>
        <ButtonLink
          href={site.reposUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          size="lg"
          className="group"
        >
          View All Projects
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
            aria-hidden="true"
          />
        </ButtonLink>
      </Reveal>
    </Section>
  );
}

export default Projects;
