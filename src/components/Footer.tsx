import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent py-14 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo />
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/SandaruwanWeerawardhana"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sandaruwan-linkdin/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex justify-center">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Sandaruwan Weerawardhana. All rights reserved.
          </p>
        </div>
      </div>

      <ScrollLink
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        className="fixed right-6 bottom-6 p-3 bg-primary-600 text-white rounded-full shadow-lg shadow-primary-600/30 hover:bg-primary-500 transition-all duration-300 focus-ring cursor-pointer z-40 hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </ScrollLink>
    </footer>
  );
};

export default Footer;