/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    eslint: {
    ignoreDuringBuilds: true,
  },
    server: {
    port: 2000
  }
}

module.exports = nextConfig
