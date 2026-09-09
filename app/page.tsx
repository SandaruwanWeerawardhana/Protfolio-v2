import type { Metadata } from 'next';
import Contact from '../src/components/sections/Contact';
import Education from '../src/components/sections/Education';
import Hero from '../src/components/sections/Hero';
import Projects from '../src/components/sections/Projects';
import Skills from '../src/components/sections/Skills';
import { site } from '../src/data/site';

const canonicalUrl = 'https://SandaruwanWeerawardhana.github.io/Portfolio';
const title = `${site.name} - ${site.role}`;
const description = `Portfolio of ${site.name}, ${site.role} specializing in web development.`;

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title,
  description,
  authors: [{ name: site.name }],
  keywords: ['frontend developer', 'react developer', 'web developer', 'portfolio', site.name],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: 'website',
    url: canonicalUrl,
    title,
    description,
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: canonicalUrl,
  sameAs: [site.githubUrl, site.linkedinUrl],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replaceAll('<', '\\u003c') }}
      />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
