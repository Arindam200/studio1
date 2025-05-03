export const baseUrl = "https://studio1hq.com";

export default async function sitemap() {
  const routes = [
    "",
    "/blog-as-service",
    "/devrel-as-service",
    "/blogs",
    "/careers",
    "/about-us",
    "/case-studies",
    "/team",
    "/pricing",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    priority: route === "" ? 1.0 : 0.8,
    changeFrequency: "weekly",
  }));

  return [...routes];
}
