'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import profileWebp from '../../assets/profile.webp';
import { heroStats, site, socialLinks } from '../../data/site';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useInViewOnce } from '../../hooks/useInViewOnce';
import { useRotatingIndex } from '../../hooks/useRotatingIndex';
import { Reveal, Stagger, StaggerItem } from '../animations';
import Container from '../ui/Container';
import DecryptedText from '../ui/DecryptedText';
import IconLink from '../ui/IconLink';

export function Hero() {
  const { trackInteraction } = useAnalytics();
  const titleIndex = useRotatingIndex(site.titles.length, 2600);
  const sectionRef = useInViewOnce<HTMLElement>(
    () => trackInteraction('hero_section_visible', 'view'),
    0.5,
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative flex min-h-[100svh] scroll-mt-24 items-center overflow-hidden pb-24 pt-28 sm:pt-32"
    >
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div className="order-2 text-center lg:order-1 lg:col-span-7 lg:text-left">
            <Reveal immediate direction="up" distance={16}>
              <span className="eyebrow">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-400" />
                </span>
                {site.availability}
              </span>
            </Reveal>

            <Reveal immediate delay={0.08}>
              <h1 className="mt-6 text-display-lg text-content-primary">
                Hi, I&apos;m{' '}
                <span className="text-gradient">{site.firstName}</span>
              </h1>
            </Reveal>

            <Reveal immediate delay={0.16}>
              <p className="mt-4 flex min-h-[3rem] flex-wrap items-center justify-center gap-x-3 font-display text-xl font-semibold text-content-secondary sm:text-2xl lg:justify-start lg:text-3xl">
                <span className="text-content-muted">I&apos;m a</span>
                <DecryptedText
                  key={titleIndex}
                  text={site.titles[titleIndex]}
                  speed={25}
                  sequential
                  animateOn="view"
                  maxIterations={15}
                  className="text-primary-300"
                  encryptedClassName="text-primary-500/40"
                  revealDirection="center"
                />
              </p>
            </Reveal>

            <Reveal immediate delay={0.24}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-content-muted lg:mx-0 lg:text-lg">
                {site.intro}
                <span className="mt-4 block font-medium text-content-primary">
                  {site.introHighlight}
                </span>
              </p>
            </Reveal>

            <Reveal immediate delay={0.4}>
              <div className="mt-8 flex justify-center gap-3 lg:justify-start">
                {socialLinks.map((social) => (
                  <IconLink
                    key={social.name}
                    href={social.href}
                    label={social.name}
                    icon={social.icon}
                  />
                ))}
              </div>
            </Reveal>

            <Stagger
              className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-4 sm:gap-6 lg:mx-0"
              delayChildren={0.45}
            >
              {heroStats.map((stat) => (
                <StaggerItem key={stat.label} className="surface px-3 py-4 text-center lg:text-left">
                  <p className="font-display text-2xl font-bold text-content-primary sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-content-muted sm:text-sm">{stat.label}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Portrait */}
          <Reveal
            immediate
            direction="left"
            delay={0.2}
            className="order-1 flex justify-center lg:order-2 lg:col-span-5"
          >
            <div className="group relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-full bg-brand-gradient opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
              />
              <div className="relative h-60 w-60 overflow-hidden rounded-full border border-white/10 bg-surface shadow-card sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <Image
                  src={profileWebp}
                  alt={site.name}
                  width={760}
                  height={760}
                  priority
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 288px, 240px"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-105"
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/15"
              />
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Scroll cue */}
      <Link
        to="skills"
        smooth
        offset={-96}
        duration={700}
        className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 cursor-pointer flex-col items-center gap-2 sm:flex"
        aria-label="Scroll to skills"
      >
        <span className="text-[0.7rem] uppercase tracking-[0.2em] text-content-subtle transition-colors duration-200 group-hover:text-content-secondary">
          Scroll
        </span>
        <ChevronDown
          className="h-5 w-5 animate-float text-primary-400 transition-colors duration-200 group-hover:text-primary-300"
          aria-hidden="true"
        />
      </Link>
    </section>
  );
}

export default Hero;
