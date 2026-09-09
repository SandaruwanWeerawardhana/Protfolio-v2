'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import { navItems } from '../../data/site';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrolled } from '../../hooks/useScrolled';
import { cn } from '../../lib/cn';
import { buttonStyles } from '../ui/buttonStyles';
import Container from '../ui/Container';
import Logo from './Logo';
import NavLink from './NavLink';

const sectionIds = navItems.map((item) => item.to);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrolled(16);
  const activeSection = useActiveSection(sectionIds);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  // Close the mobile sheet on Escape and lock body scroll while it is open.
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,padding] duration-300 ease-out-expo',
        isScrolled
          ? 'border-b border-white/[0.07] bg-background/80 py-3 backdrop-blur-xl'
          : 'border-b border-transparent py-4 sm:py-5',
      )}
    >
      <Container size="wide">
        <nav className="flex items-center justify-between gap-4" aria-label="Main">
          <Logo compact />

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-md md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                label={item.name}
                isActive={activeSection === item.to}
              />
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="contact"
              smooth
              offset={-96}
              duration={600}
              className={cn(buttonStyles('primary', 'sm'), 'cursor-pointer')}
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-content-secondary transition-colors duration-200 hover:text-white md:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      {/* Reading progress */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-brand-gradient"
        style={{ scaleX: prefersReducedMotion ? 1 : progress, opacity: isScrolled ? 1 : 0 }}
      />

      {/* Mobile navigation sheet */}
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden"
          >
            <Container size="wide" className="pt-3">
              <div className="surface flex flex-col gap-1 p-3">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    label={item.name}
                    variant="mobile"
                    layoutId="nav-pill-mobile"
                    isActive={activeSection === item.to}
                    onClick={() => setIsMenuOpen(false)}
                  />
                ))}

                <Link
                  to="contact"
                  smooth
                  offset={-96}
                  duration={600}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(buttonStyles('primary', 'md'), 'mt-2 cursor-pointer')}
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Header;
