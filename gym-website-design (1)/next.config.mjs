/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/EnerGym',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
