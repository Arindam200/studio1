import fs from "fs";
import path from "path";
import matter from "gray-matter";

const jobsDirectory = path.join(process.cwd(), "content/careers/jobs");

export type JobOpening = {
  id: string;
  title: string;
  description: string;
  department: string;
  location: string;
  type: string;
  isRemote: boolean;
  order: number;
  postedDate: string;
  requisitionId: string;
};

export type JobDetail = JobOpening & {
  content: string;
};

type JobFrontmatter = {
  id?: string;
  title?: string;
  description?: string;
  department?: string;
  location?: string;
  type?: string;
  isRemote?: boolean;
  order?: number;
  postedDate?: string | Date | number;
  requisitionId?: string | number;
};

function toFrontmatterString(value: unknown): string | undefined {
  if (value == null) return undefined;
  if (value instanceof Date) {
    return value.toISOString().split("T")[0];
  }
  return String(value).trim();
}

function toJobOpening(
  raw: JobFrontmatter,
  fallbackId: string,
  index: number,
): JobOpening | null {
  const id = raw.id?.trim() || fallbackId;
  if (!raw.title?.trim()) return null;

  return {
    id,
    title: raw.title.trim(),
    description: raw.description?.trim() ?? "",
    department: raw.department?.trim() ?? "General",
    location: raw.location?.trim() ?? "Remote",
    type: raw.type?.trim() ?? "Full-time",
    isRemote: raw.isRemote !== false,
    order: typeof raw.order === "number" ? raw.order : index + 1,
    postedDate:
      toFrontmatterString(raw.postedDate) ??
      new Date().toISOString().split("T")[0],
    requisitionId:
      toFrontmatterString(raw.requisitionId) ??
      id.toUpperCase().replace(/-/g, "_"),
  };
}

function readJobFile(fileName: string): JobDetail | null {
  const fullPath = path.join(jobsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const fallbackId = fileName.replace(/\.mdx?$/, "");
  const meta = toJobOpening(data as JobFrontmatter, fallbackId, 0);

  if (!meta) return null;

  return {
    ...meta,
    content: content.trim(),
  };
}

export function getJobOpenings(): JobOpening[] {
  if (!fs.existsSync(jobsDirectory)) return [];

  const fileNames = fs
    .readdirSync(jobsDirectory)
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"));

  return fileNames
    .map((fileName) => readJobFile(fileName))
    .filter((job): job is JobDetail => job !== null)
    .map(({ content: _content, ...meta }) => meta)
    .sort((a, b) => a.order - b.order);
}

export function getJobById(id: string): JobDetail | null {
  const markdownPath = path.join(jobsDirectory, `${id}.md`);
  const mdxPath = path.join(jobsDirectory, `${id}.mdx`);
  const fullPath = fs.existsSync(markdownPath)
    ? markdownPath
    : fs.existsSync(mdxPath)
      ? mdxPath
      : null;

  if (!fullPath) return null;

  return readJobFile(path.basename(fullPath));
}

export function getJobIds(): string[] {
  return getJobOpenings().map((job) => job.id);
}
