import { services } from '../../data/services';
import { Stagger, StaggerItem } from '../animations';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import SpotlightCard from '../ui/SpotlightCard';

/** Optional section - enable it from App when the services offer is live. */
export function Services() {
  return (
    <Section id="services" size="wide">
      <SectionHeading
        eyebrow="Services"
        title="Web Development & Optimization"
        subtitle="I create fast, responsive, and user-friendly, Full Stack websites using modern technologies. Whether you need a business website, portfolio, blog, or landing page, I ensure top-notch performance and smooth functionality with SEO-friendly optimizations."
      />

      <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.09}>
        {services.map(({ title, description, icon: Icon }) => (
          <StaggerItem key={title} className="h-full">
            <SpotlightCard className="surface-interactive h-full p-6 sm:p-8">
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-primary-400/20 bg-primary-500/10 text-primary-300">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-display text-lg font-semibold text-content-primary">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-content-muted">{description}</p>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export default Services;
