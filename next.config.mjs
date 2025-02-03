/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Disable remotePatterns and allow fetching images from any host
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
