export const baseUrl = "https://studio1hq.com/";

export default async function sitemap() {
  const routes = [
    "",
    "/blog-as-service",
    "devrel-as-service",
    "/blogs",
    "/careers",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
