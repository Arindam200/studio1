import type { NextConfig } from "next";
import nextMDX from "@next/mdx";

const withMDX = nextMDX();
const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https" as const,
        hostname: "**",
      },
    ],
  },
};
export default withMDX(nextConfig);
