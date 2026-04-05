import { baseUrl } from "./sitemap";

// Machine-readable site summary for AI crawlers: https://studio1hq.com/llms.txt

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
