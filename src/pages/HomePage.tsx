import Contact from '../components/sections/Contact';
import Education from '../components/sections/Education';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
// import Services from '../components/sections/Services';

/**
 * The single portfolio page.
 * Section order lives here so new sections are one import and one line away.
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <Education />
      <Projects />
      {/* <Services /> */}
      <Contact />
    </>
  );
}

export default HomePage;
