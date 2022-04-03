/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  swcMinify: true,
  experimental: {
    runtime: 'nodejs',
  },
  reactStrictMode: true,
  images: {
    domains: [
      'media.graphcms.com',
      'avatars.githubusercontent.com',
      'i.ytimg.com',
    ],
  },
}
