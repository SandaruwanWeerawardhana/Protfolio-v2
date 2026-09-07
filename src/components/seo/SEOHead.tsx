import { Helmet } from 'react-helmet-async';
import { publicAsset, site } from '../../data/site';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const SITE_URL = 'https://SandaruwanWeerawardhana.github.io/Portfolio';

export function SEOHead({
  title = `${site.name} - ${site.role}`,
  description = `Portfolio of ${site.name}, ${site.role} specializing in web development.`,
  canonicalUrl = SITE_URL,
  ogImage = publicAsset('images/og-preview.jpg'),
  noIndex = false,
}: SEOHeadProps) {
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    url: canonicalUrl,
    sameAs: [site.githubUrl, site.linkedinUrl],
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="theme-color" content="#070B14" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {noIndex ? <meta name="robots" content="noindex, nofollow" /> : null}

      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Helmet>
  );
}

export default SEOHead;
