/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";

const withMDX = nextMDX();
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
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
export default withMDX(nextConfig);
