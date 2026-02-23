/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/iaAAAA' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/iaAAAA/' : '',
};

export default nextConfig;
