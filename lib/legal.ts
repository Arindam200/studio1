import fs from "fs";
import path from "path";
import matter from "gray-matter";

const legalDirectory = path.join(process.cwd(), "content/legal");
const englishLegalDirectory = path.join(legalDirectory, "en");
const legalPages = ["terms", "privacy"] as const;

export type LegalPageSlug = (typeof legalPages)[number];

export type LegalPageContent = {
  slug: LegalPageSlug;
  title: string;
  description: string;
  lastUpdated: string;
  content: string;
};

type LegalFrontmatter = {
  title?: string;
  description?: string;
  lastUpdated?: string | Date | number;
};

function toFrontmatterString(value: unknown): string | undefined {
  if (value == null) return undefined;
  if (value instanceof Date) return value.toISOString().split("T")[0];
  return String(value).trim();
}

export function validateLegalPages() {
  const missing = legalPages
    .map((slug) => `${slug}.mdx`)
    .filter((fileName) => !fs.existsSync(path.join(englishLegalDirectory, fileName)));

  if (missing.length > 0) {
    throw new Error(`Missing English legal pages: ${missing.join(", ")}`);
  }
}

export function getLegalPage(slug: LegalPageSlug): LegalPageContent {
  validateLegalPages();

  const fullPath = path.join(englishLegalDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as LegalFrontmatter;

  return {
    slug,
    title: frontmatter.title ?? slug,
    description: frontmatter.description ?? "",
    lastUpdated: toFrontmatterString(frontmatter.lastUpdated) ?? "2025-01-15",
    content: content.trim(),
  };
}
