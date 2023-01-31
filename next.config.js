/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: ['http2.mlstatic.com'],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};
