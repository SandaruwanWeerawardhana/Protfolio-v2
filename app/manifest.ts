import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sandaruwan Weerawardhana - Portfolio',
    short_name: 'Sandaruwan',
    description:
      'Portfolio of Sandaruwan Weerawardhana, FullStack Developer specializing in web development.',
    start_url: '/',
    display: 'standalone',
    background_color: '#070B14',
    theme_color: '#0090f5',
  };
}
