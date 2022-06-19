/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ['tsx'],
}
const withPlugins = require('next-compose-plugins')
const withPwa = require('next-pwa')
const withImages = require('next-images')
module.exports = withImages({
 esModule: true
})

module.exports = withPlugins([
  {
    images: {
      domains: ['www.montarumnegocio.com','firebasestorage.googleapis.com']
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
      sw: '/sw.js',
      skipWaiting: true,
    }
  }],
  [nextConfig]
])
