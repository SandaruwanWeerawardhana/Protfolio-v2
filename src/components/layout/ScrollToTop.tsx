'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';
import { useScrolled } from '../../hooks/useScrolled';

/** Floating back-to-top control; only mounts once the page is scrolled. */
export function ScrollToTop() {
  const isVisible = useScrolled(600);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 8 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 right-5 z-40 sm:bottom-8 sm:right-8"
        >
          <Link
            to="about"
            smooth
            duration={600}
            aria-label="Scroll back to top"
            className="grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-brand-gradient text-white shadow-[0_10px_30px_-10px_rgba(56,189,248,0.8)] transition-transform duration-300 ease-out-expo hover:-translate-y-1"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </Link>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default ScrollToTop;
