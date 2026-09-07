import { Award, GraduationCap } from 'lucide-react';
import { certifications, education } from '../../data/education';
import { Reveal, Stagger, StaggerItem } from '../animations';
import CertificationCard from '../cards/CertificationCard';
import TimelineItem from '../cards/TimelineItem';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import SpotlightCard from '../ui/SpotlightCard';

export function Education() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Background"
        title="Education & Certifications"
        subtitle="My professional journey and academic background"
      />

      <div className="space-y-12">
        <Reveal direction="right" distance={20}>
          <div className="mb-6 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-primary-400/20 bg-primary-500/10 text-primary-300">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="font-display text-xl font-semibold text-content-primary sm:text-2xl">
              Education
            </h3>
          </div>

          <SpotlightCard className="surface p-6 sm:p-8" spotlightColor="rgba(56, 189, 248, 0.14)">
            <ol className="relative">
              {education.map((item, index) => (
                <TimelineItem
                  key={`${item.degree}-${item.period}`}
                  item={item}
                  isLast={index === education.length - 1}
                />
              ))}
            </ol>
          </SpotlightCard>
        </Reveal>

        <div>
          <Reveal direction="right" distance={20}>
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-secondary-400/20 bg-secondary-500/10 text-secondary-300">
                <Award className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-semibold text-content-primary sm:text-2xl">
                Certifications
              </h3>
            </div>
          </Reveal>

          <Stagger className="grid gap-4 sm:grid-cols-2" stagger={0.08}>
            {certifications.map((certification) => (
              <StaggerItem key={certification.title} className="h-full">
                <CertificationCard certification={certification} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}

export default Education;
