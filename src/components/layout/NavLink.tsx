import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { cn } from '../../lib/cn';

interface NavLinkProps {
  to: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  /** Mobile links are full width with a larger touch target. */
  variant?: 'desktop' | 'mobile';
  layoutId?: string;
}

export function NavLink({
  to,
  label,
  isActive,
  onClick,
  variant = 'desktop',
  layoutId = 'nav-pill',
}: NavLinkProps) {
  const isDesktop = variant === 'desktop';

  return (
    <Link
      to={to}
      smooth
      offset={-96}
      duration={600}
      onClick={onClick}
      className={cn(
        'relative cursor-pointer select-none rounded-full font-medium transition-colors duration-200',
        isDesktop ? 'px-4 py-2 text-sm' : 'flex min-h-[48px] items-center px-4 py-3 text-base',
        isActive ? 'text-white' : 'text-content-muted hover:text-content-primary',
      )}
      aria-current={isActive ? 'true' : undefined}
    >
      {isActive ? (
        <motion.span
          layoutId={layoutId}
          className={cn(
            'absolute inset-0 -z-10 rounded-full',
            isDesktop
              ? 'bg-white/10 shadow-inner-line ring-1 ring-inset ring-white/10'
              : 'bg-primary-500/15 ring-1 ring-inset ring-primary-400/25',
          )}
          transition={{ type: 'spring', stiffness: 320, damping: 32 }}
        />
      ) : null}
      {label}
    </Link>
  );
}

export default NavLink;
