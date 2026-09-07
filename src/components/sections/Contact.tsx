import { Mail, MapPin, Sparkles } from 'lucide-react';
import { site, socialLinks } from '../../data/site';
import { spotlight } from '../../lib/spotlight';
import { Reveal } from '../animations';
import ContactForm from '../forms/ContactForm';
import IconLink from '../ui/IconLink';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import SpotlightCard from '../ui/SpotlightCard';

export function Contact() {
  return (
    <Section id="contact" size="wide">
      <SectionHeading
        eyebrow="Contact"
        title="Get In Touch"
        subtitle="Have a project in mind or want to discuss opportunities? I'm just a message away."
      />

      <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
        {/* Details */}
        <Reveal direction="right" className="lg:col-span-2">
          <SpotlightCard
            className="surface h-full p-6 sm:p-8"
            spotlightColor={spotlight.skySoft}
          >
            <h3 className="font-display text-lg font-semibold text-content-primary sm:text-xl">
              Contact Information
            </h3>

            <div className="mt-6 space-y-4">
              <a
                href={`mailto:${site.email}`}
                className="surface-inset group flex items-start gap-3 p-4 transition-colors duration-200 hover:border-primary-400/30 hover:bg-white/[0.06]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-500/10 text-primary-300">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-content-secondary">Email</span>
                  <span className="mt-0.5 block break-all text-sm text-primary-300 transition-colors duration-200 group-hover:text-primary-200">
                    {site.email}
                  </span>
                </span>
              </a>

              <div className="surface-inset flex items-start gap-3 p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary-500/10 text-secondary-300">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-content-secondary">Location</span>
                  <span className="mt-0.5 block text-sm text-content-muted">{site.location}</span>
                </span>
              </div>

              <div className="surface-inset p-4">
                <span className="block text-sm font-medium text-content-secondary">Connect</span>
                <div className="mt-3 flex gap-3">
                  {socialLinks.map((social) => (
                    <IconLink
                      key={social.name}
                      href={social.href}
                      label={social.name}
                      icon={social.icon}
                    />
                  ))}
                </div>
              </div>

              <p className="flex gap-3 rounded-xl border border-primary-400/20 bg-primary-500/[0.07] p-4 text-sm italic leading-relaxed text-content-secondary">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary-300" aria-hidden="true" />
                {site.availabilityNote}
              </p>
            </div>
          </SpotlightCard>
        </Reveal>

        {/* Form */}
        <Reveal direction="left" delay={0.1} className="lg:col-span-3">
          <SpotlightCard
            className="surface h-full p-6 sm:p-8"
            spotlightColor={spotlight.violetSoft}
          >
            <h3 className="mb-6 font-display text-lg font-semibold text-content-primary sm:text-xl">
              Send Me a Message
            </h3>
            <ContactForm />
          </SpotlightCard>
        </Reveal>
      </div>
    </Section>
  );
}

export default Contact;
