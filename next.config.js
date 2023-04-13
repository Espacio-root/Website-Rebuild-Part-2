/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdx.monstercat.com', 'cdn.monstercat.com'],
  },
}

module.exports = nextConfig
