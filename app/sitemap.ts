import { getAllPosts } from "@/lib/blog";

export const baseUrl = "https://studio1hq.com";

export default async function sitemap() {
  const routes = [
    "",
    "/blog-as-service",
    "/devrel-as-service",
    "/audit-services",
    "/video-production",
    "/product-launch",
    "/organic-campaign",
    "/influencer-management",
    "/work",
    "/blog",
    "/careers",
    "/about-us",
    "/case-studies",
    "/pricing",
    "/terms",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    priority: route === "" ? 1.0 : 0.8,
    changeFrequency: "weekly",
  }));

  const posts = getAllPosts();
  const blogPostRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));

  return [...routes, ...blogPostRoutes];
}
