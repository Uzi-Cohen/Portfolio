/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: false,
    domains: [],
  },
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig
