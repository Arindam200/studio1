import fs from "fs";
import path from "path";
import matter from "gray-matter";

const DEFAULT_AUTHOR = "Studio1";
const DEFAULT_POST_IMAGE = "/opengraph-image.png";
const postsDirectory = path.join(process.cwd(), "content/blog");

/** ~200 words per minute for technical content */
export function estimateReadingMinutes(content: string): number {
  const words = content
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
  readingTimeMinutes: number;
};

type Frontmatter = {
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
  image?: string;
};

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".mdx"));
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const d = data as Frontmatter;
    return {
      slug,
      title: d.title ?? "Untitled",
      description: d.description ?? "",
      date: d.date ?? new Date().toISOString().split("T")[0],
      author: DEFAULT_AUTHOR,
      tags: Array.isArray(d.tags) ? d.tags : [],
      image: d.image ?? DEFAULT_POST_IMAGE,
      readingTimeMinutes: estimateReadingMinutes(content),
    };
  });
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export type BlogPost = {
  slug: string;
  content: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
  readingTimeMinutes: number;
};

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const d = data as Frontmatter;
  return {
    slug,
    content,
    title: d.title ?? "Untitled",
    description: d.description ?? "",
    date: d.date ?? "",
    author: DEFAULT_AUTHOR,
    tags: Array.isArray(d.tags) ? d.tags : [],
    image: d.image ?? DEFAULT_POST_IMAGE,
    readingTimeMinutes: estimateReadingMinutes(content),
  };
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}
