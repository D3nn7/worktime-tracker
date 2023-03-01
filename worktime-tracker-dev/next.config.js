/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // rename hostname to your appwrite backend hostname
        hostname: 'appwrite-backend.dev.schapeit.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
