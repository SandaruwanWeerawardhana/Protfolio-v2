import type { ReactNode } from 'react';
import Background from './Background';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';

interface LayoutProps {
  children: ReactNode;
}

/** Page chrome shared by every route: background, header, main, footer. */
export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Background />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Layout;
