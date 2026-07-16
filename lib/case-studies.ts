import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { estimateReadingMinutes } from "@/lib/blog";

const caseStudiesDirectory = path.join(process.cwd(), "content/case-studies");

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudyMeta = {
  slug: string;
  title: string;
  client: string;
  description: string;
  category: string;
  date: string;
  order: number;
  cover: string;
  tags: string[];
  metrics: CaseStudyMetric[];
  readingTimeMinutes: number;
};

export type CaseStudy = CaseStudyMeta & {
  content: string;
};

type Frontmatter = {
  title?: string;
  client?: string;
  description?: string;
  category?: string;
  date?: string;
  order?: number;
  cover?: string;
  tags?: string[];
  metrics?: CaseStudyMetric[];
};

function toMeta(slug: string, data: Frontmatter, content: string): CaseStudyMeta {
  return {
    slug,
    title: data.title ?? "Untitled",
    client: data.client ?? data.title ?? "Untitled",
    description: data.description ?? "",
    category: data.category ?? "Case Study",
    date: data.date ?? new Date().toISOString().split("T")[0],
    order: typeof data.order === "number" ? data.order : 999,
    cover: data.cover ?? "/opengraph-image.png",
    tags: Array.isArray(data.tags) ? data.tags : [],
    metrics: Array.isArray(data.metrics) ? data.metrics : [],
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
