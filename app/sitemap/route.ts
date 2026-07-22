import { getAllCaseStudies } from "@/lib/case-studies";
import { getAllPosts } from "@/lib/blog";
import {
  LOCALIZED_PUBLIC_PATHS,
  LOCALES,
  languageAlternates,
  localizedUrl,
  type Locale,
} from "@/lib/i18n";
import { baseUrl } from "@/lib/site";

type SitemapEntry = {
  path: string;
  lastModified: string;
  priority: number;
};

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function urlEntry(
  entry: SitemapEntry,
  locale: Locale,
  includeAlternates = true,
) {
  const alternates = languageAlternates(entry.path, baseUrl);
  const links = includeAlternates
    ? Object.entries(alternates)
        .map(
          ([hreflang, href]) =>
            `    <xhtml:link rel="alternate" hreflang="${escapeXml(
              hreflang,
            )}" href="${escapeXml(href)}" />`,
        )
        .join("\n")
    : "";

  return `  <url>
    <loc>${escapeXml(localizedUrl(entry.path, locale, baseUrl))}</loc>
    <lastmod>${escapeXml(entry.lastModified)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
${links ? `${links}\n` : ""}  </url>`;
}

export async function GET() {
  const today = new Date().toISOString().split("T")[0];
  const localizedStaticPaths: SitemapEntry[] = LOCALIZED_PUBLIC_PATHS.map(
    (path) => ({
      path,
      lastModified: today,
      priority: path === "/" ? 1.0 : 0.8,
    }),
  );

  const englishOnlyStaticPaths: SitemapEntry[] = [
    { path: "/work", lastModified: today, priority: 0.8 },
    { path: "/blog", lastModified: today, priority: 0.8 },
    { path: "/careers", lastModified: today, priority: 0.8 },
    { path: "/about-us", lastModified: today, priority: 0.8 },
    { path: "/product", lastModified: today, priority: 0.8 },
    { path: "/terms", lastModified: today, priority: 0.8 },
    { path: "/privacy", lastModified: today, priority: 0.8 },
  ];

  const blogPaths: SitemapEntry[] = getAllPosts().map((post) => ({
    path: `/blog/${post.slug}`,
    lastModified: post.date,
    priority: 0.7,
  }));

  const caseStudyPaths: SitemapEntry[] = getAllCaseStudies().map((study) => ({
    path: `/case-studies/${study.slug}`,
    lastModified: study.date,
    priority: 0.7,
  }));

  const localizedEntries = localizedStaticPaths
    .flatMap((entry) => LOCALES.map((locale) => urlEntry(entry, locale)))
    .join("\n");

  const englishOnlyEntries = [
    ...englishOnlyStaticPaths,
    ...blogPaths,
    ...caseStudyPaths,
  ]
    .map((entry) => urlEntry(entry, "en", false))
    .join("\n");

  const entries = [localizedEntries, englishOnlyEntries].filter(Boolean).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
    },
  });
}
