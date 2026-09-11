import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // Served from the apex custom domain (https://sandaruwanweerawardhana.me),
  // so assets live at the site root: no basePath / assetPrefix.
  trailingSlash: true,
  images: {
    // GitHub Pages cannot run the default server-side image optimizer.
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
      { protocol: 'https', hostname: 'skillicons.dev' },
      { protocol: 'https', hostname: 'www.fleetroot.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'www.shutterstock.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
};

export default nextConfig;
