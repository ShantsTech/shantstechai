// @ts-check

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

export default defineNextConfig({
  reactStrictMode: true,
  // Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      's3.us-west-1.wasabisys.com',
      'model-ai.s3.us-west-1.wasabisys.com',
      'shantsai-prod.s3.us-west-1.wasabisys.com',
      'shantsai-dev.s3.us-west-1.wasabisys.com',
    ],
  },
  experimental: {
    // scrollRestoration: true,
    largePageDataBytes: 512 * 100000,
  },
  redirects: async () => {
    return [
      {
        source: '/api/download/training-data/:modelVersionId',
        destination: '/api/download/models/:modelVersionId?type=Training%20Data',
        permanent: true,
      },
      {
        source: '/github/:path*',
        destination: 'https://github.com/ShantsTech/shantstechai/:path*',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/UwX5wKwm6c',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/HelloShantsTech',
        permanent: true,
      },
      {
        source: '/ideas',
        destination: 'https://github.com/ShantsTech/shantstechai/discussions/categories/ideas',
        permanent: true,
      },
    ];
  },
  output: 'standalone',
});
