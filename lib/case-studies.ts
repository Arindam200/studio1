import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { estimateReadingMinutes } from "@/lib/blog";

const caseStudiesDirectory = path.join(process.cwd(), "content/case-studies");

export type CaseStudyMetric = {
  value: string;
  label: string;
  /** Public source backing the number (docs page, post, chart). Real data only. */
  evidence?: string;
};

export type CaseStudyMeta = {
  slug: string;
  /** Outcome-driven headline, e.g. "How Memori went from launch to 12,000+ GitHub stars". */
  title: string;
  client: string;
  /** Longer description used for SEO metadata. */
  description: string;
  /** One-sentence outcome summary shown on cards. Falls back to description. */
  summary: string;
  /** Short service tag, e.g. "Open-source Growth". */
  category: string;
  /** Fact-strip field, e.g. "LLM Infrastructure". */
  industry: string;
  /** Services Studio1 provided during the engagement. */
  services: string[];
  /** Client website or repo. */
  website: string;
  /** Optional human-readable engagement window. Only set when real. */
  timeline: string;
  /** Exactly one study should be featured on the listing page. */
  featured: boolean;
  date: string;
  order: number;
  cover: string;
  tags: string[];
  /** Verified outcome numbers only — never invented. Max 3 rendered. */
  metrics: CaseStudyMetric[];
  /** Qualitative outcomes for impact lists and metric-light studies. */
  outcomes: string[];
  /** Theme-matched closing CTA line, e.g. "Need docs that convert developers?" */
  ctaHook: string;
  readingTimeMinutes: number;
};

export type CaseStudy = CaseStudyMeta & {
  content: string;
};

type Frontmatter = {
  title?: string;
  client?: string;
  description?: string;
  summary?: string;
  category?: string;
  industry?: string;
  services?: string[];
  website?: string;
  timeline?: string;
  featured?: boolean;
  date?: string;
  order?: number;
  cover?: string;
  tags?: string[];
  metrics?: CaseStudyMetric[];
  outcomes?: string[];
  ctaHook?: string;
};

function toMeta(slug: string, data: Frontmatter, content: string): CaseStudyMeta {
  return {
    slug,
    title: data.title ?? "Untitled",
    client: data.client ?? data.title ?? "Untitled",
    description: data.description ?? "",
    summary: data.summary ?? data.description ?? "",
    category: data.category ?? "Case Study",
    industry: data.industry ?? "",
    services: Array.isArray(data.services) ? data.services : [],
    website: data.website ?? "",
    timeline: data.timeline ?? "",
    featured: data.featured === true,
    date: data.date ?? new Date().toISOString().split("T")[0],
    order: typeof data.order === "number" ? data.order : 999,
    cover: data.cover ?? "/opengraph-image.png",
    tags: Array.isArray(data.tags) ? data.tags : [],
    metrics: Array.isArray(data.metrics) ? data.metrics : [],
    outcomes: Array.isArray(data.outcomes) ? data.outcomes : [],
    ctaHook: data.ctaHook ?? "",
    readingTimeMinutes: estimateReadingMinutes(content),
  };
}

export function getAllCaseStudies(): CaseStudyMeta[] {
  if (!fs.existsSync(caseStudiesDirectory)) return [];
  const fileNames = fs
    .readdirSync(caseStudiesDirectory)
    .filter((f) => f.endsWith(".mdx"));
  const studies = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fileContents = fs.readFileSync(
      path.join(caseStudiesDirectory, fileName),
      "utf8",
    );
    const { data, content } = matter(fileContents);
    return toMeta(slug, data as Frontmatter, content);
  });
  return studies.sort((a, b) => a.order - b.order);
}

export function getFeaturedCaseStudy(): CaseStudyMeta | null {
  const studies = getAllCaseStudies();
  return studies.find((s) => s.featured) ?? studies[0] ?? null;
}

export function getRelatedCaseStudies(
  slug: string,
  limit = 3,
): CaseStudyMeta[] {
  return getAllCaseStudies()
    .filter((s) => s.slug !== slug)
    .slice(0, limit);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const fullPath = path.join(caseStudiesDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { ...toMeta(slug, data as Frontmatter, content), content };
}

export function getCaseStudySlugs(): string[] {
  return getAllCaseStudies().map((s) => s.slug);
}
