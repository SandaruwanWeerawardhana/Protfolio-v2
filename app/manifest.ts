import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  const basePath =
    process.env.NODE_ENV === 'production'
      ? (process.env.NEXT_PUBLIC_BASE_PATH ?? '/Portfolio')
      : '';

  return {
    name: 'Sandaruwan Weerawardhana - Portfolio',
    short_name: 'Sandaruwan',
    description:
      'Portfolio of Sandaruwan Weerawardhana, FullStack Developer specializing in web development.',
    start_url: `${basePath}/`,
    display: 'standalone',
    background_color: '#070B14',
    theme_color: '#0090f5',
  };
}
