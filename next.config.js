/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "adnoxy.com",
      "www.adnoxy.com",
      "cdn.sanity.io"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.adnoxy.com",
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  trailingSlash: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
      ],
    },
  ],
  // For internationalization if needed
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  // Enable if using Next.js analytics
  // analyticsId: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID,
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/blog/:slug/',
        destination: '/blog/:slug',
        permanent: true,
      },
      // Add other necessary redirects
    ];
  },
};

module.exports = nextConfig;