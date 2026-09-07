import Contact from '../components/sections/Contact';
import Education from '../components/sections/Education';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';

/**
 * The single portfolio page.
 * Section order lives here so new sections are one import and one line away.
 * The Services section (components/sections/Services.tsx) is built and ready -
 * import and render it here when that offer goes live.
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}

export default HomePage;
