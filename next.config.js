/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local /public images only — no external domains needed
    // Add domains here if you later source images from external URLs
    formats: ['image/webp'],
  },
}

module.exports = nextConfig
