/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This replaces 'next export' in Next.js 13+
  images: {
    unoptimized: true,
  },
  basePath: '/EnerGym',
}

module.exports = nextConfig
