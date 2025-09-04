/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript:{
    ignoreBuildErrors:true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
  // Allow all hosts for Replit proxy compatibility
  experimental: {
    allowedRevalidateHeaderKeys: ['*'],
  },
  // Ensure proper host handling for Replit environment
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;
