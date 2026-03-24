/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    allowedDevOrigins: ['10.246.126.100'],
  },
  allowedDevOrigins: ['10.246.126.100'],
}

export default nextConfig
