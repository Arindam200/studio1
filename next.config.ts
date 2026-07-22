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
  async redirects() {
    // Folded service pages: audit now lives under docs-as-service.
    return [
      {
        source: "/audit-services",
        destination: "/docs-as-service",
        permanent: true,
      },
      ...[
        "/video-production",
        "/product-launch",
        "/organic-campaign",
        "/influencer-management",
      ].map((source) => ({
        source,
        destination: "/devrel-as-service",
        permanent: true,
      })),
    ];
  },
};
export default withMDX(nextConfig);
