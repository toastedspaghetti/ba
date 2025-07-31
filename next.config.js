/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/about-us', destination: '/internal/about-us' },
      { source: '/inspiration', destination: '/internal/inspiration' },
      { source: '/vision', destination: '/internal/vision' },
      { source: '/portfolio', destination: '/internal/portfolio' },
      { source: '/contact', destination: '/internal/contact' },
    ];
  },
};

module.exports = nextConfig;