import { Link } from 'react-scroll';
import { navItems, site, socialLinks } from '../../data/site';
import Container from '../ui/Container';
import IconLink from '../ui/IconLink';
import Logo from './Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.07] bg-background/60 py-14">
      <Container size="wide">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-content-muted">
              {site.role} building scalable web applications and clean, dependable interfaces.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-content-subtle">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth
                    offset={-96}
                    duration={600}
                    className="cursor-pointer text-sm text-content-muted transition-colors duration-200 hover:text-primary-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-content-subtle">
              Elsewhere
            </h3>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => (
                <IconLink
                  key={social.name}
                  href={social.href}
                  label={social.name}
                  icon={social.icon}
                  size="sm"
                />
              ))}
            </div>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block break-all text-sm text-content-muted transition-colors duration-200 hover:text-primary-300"
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-content-subtle">
            &copy; {currentYear} {site.name}. All rights reserved.
          </p>
          <p className="text-sm text-content-subtle">Built with React, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
