
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536, 1920, 2560],
    imageSizes: [16, 32, 64, 128, 256],
    qualities: [75, 100],
  },
};

module.exports = nextConfig;
