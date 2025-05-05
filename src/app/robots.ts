import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/',
        '/admin/',
        '/api/',
        '/_next/',
        '/404/',
      ],
    },
    sitemap: 'https://www.adnoxy.com/sitemap.xml',
    host: 'https://www.adnoxy.com',
  };
}