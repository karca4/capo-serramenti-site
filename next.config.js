/** @type {import('next').NextConfig} */
const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      new URL(`https://res.cloudinary.com/${CLOUD_NAME}/**`)
    ],
  },
};

module.exports = nextConfig;
