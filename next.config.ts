import type { NextConfig } from "next";
import nextMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const withMDX = nextMDX();
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https" as const,
        hostname: "**",
      },
    ],
  },
  async redirects() {
    // Keep old service URLs alive while the public pages use SEO-friendly names.
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap",
        permanent: true,
      },
      {
        source: "/blog-as-service",
        destination: "/technical-content-marketing",
        permanent: true,
      },
      {
        source: "/docs-as-service",
        destination: "/developer-documentation-dx-audit",
        permanent: true,
      },
      {
        source: "/content-creation",
        destination: "/developer-video-production",
        permanent: true,
      },
      {
        source: "/devrel-as-service",
        destination: "/developer-relations-growth-campaigns",
        permanent: true,
      },
      {
        source: "/audit-services",
        destination: "/developer-documentation-dx-audit",
        permanent: true,
      },
      {
        source: "/video-production",
        destination: "/developer-video-production",
        permanent: true,
      },
      ...[
        "/product-launch",
        "/organic-campaign",
        "/influencer-management",
      ].map((source) => ({
        source,
        destination: "/developer-relations-growth-campaigns",
        permanent: true,
      })),
    ];
  },
};
export default withNextIntl(withMDX(nextConfig));
