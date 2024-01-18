/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['mcusercontent.com', 'media.graphassets.com'],
  },
}

module.exports = nextConfig
