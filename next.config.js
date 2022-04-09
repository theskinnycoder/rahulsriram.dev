/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      'media.graphcms.com',
      'media.graphassets.com',
      'avatars.githubusercontent.com',
      'i.ytimg.com',
    ],
  },
}
