import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  // Theme is permanently dark now, so we don't need the toggle
  // const { theme, toggleTheme } = useTheme();

  const navItems = useMemo(() => [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Education', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    // { name: 'Services', to: 'services' },
    { name: 'Contact', to: 'contact' },
  ], []);

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navItems.map(item => item.to);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    // Initial check to set active section on page load
    setTimeout(handleScroll, 300);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]); // Now navItems won't change between renders


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-xl bg-background/80 border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}>
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative z-50">
            <Logo />
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 p-2 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1 p-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.to
                  ? 'text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                  } cursor-pointer`}
                onSetActive={() => setActiveSection(item.to)}
              >
                {activeSection === item.to && (
                  <motion.div
                    className="absolute inset-0 bg-primary-600 rounded-full -z-10"
                    layoutId="desktopNav"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile navigation overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 p-4 mx-4 mt-2 glass-panel md:hidden border border-white/10"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className={`block px-4 py-3 rounded-xl transition-colors ${activeSection === item.to
                      ? 'bg-primary-600/20 text-primary-400 font-medium border border-primary-500/20'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;