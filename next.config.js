/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const withPlugins = require('next-compose-plugins')
const withPwa = require('next-pwa')

module.exports = withPlugins([
  {
    images: {
      domains: ['avataaars.io']
    },
    distDir: 'build',
    future: {webpack5:true},
    typescript: {
      ignoreBuildErrors: true
    },
    env: {
      SERVER_URL: 'url.server',
      NEXT_PUBLIC_SITE_URL: 'http://localhost:3000'
    }
  },
  [withPwa, {
    pwa: {
      disable: process.env.NODE !== 'production',
      dest: 'public',
      register: true,
      sw: '/sw.js'
    }
  }],
  [nextConfig]
])
