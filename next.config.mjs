/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [60, 70, 75]
  }
};

export default nextConfig;
