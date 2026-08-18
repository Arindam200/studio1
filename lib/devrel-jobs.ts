import jobsData from "@/data/devrel-jobs.json";

export type DevRelJobWorkplace =
  | "Remote"
  | "Hybrid"
  | "On-site"
  | "Unspecified";

export type DevRelJobCategory = string;

export type DevRelJob = {
  id: string;
  title: string;
  company: string;
  logo?: string;
  location: string;
  workplace: DevRelJobWorkplace;
  category: DevRelJobCategory;
  type: string;
  level: string;
  isYc: boolean;
  featured?: boolean;
  salary: string | null;
  url: string;
  postedDate: string;
  tags: string[];
};

export const DEVREL_JOB_SUBMIT_URL =
  "https://github.com/Arindam200/studio1/issues/new?template=submit-devrel-job.yml";

const NEW_JOB_WINDOW_MS = 14 * 24 * 60 * 60 * 1000;

export function getDevRelJobs(): DevRelJob[] {
  return (jobsData as DevRelJob[])
    .slice()
    .sort((a, b) => {
      if (Boolean(a.featured) !== Boolean(b.featured)) {
        return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
      }

      return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
    });
}

export function getDevRelJobCategories(jobs: DevRelJob[]): DevRelJobCategory[] {
  return Array.from(new Set(jobs.map((job) => job.category))).sort();
}

export function getDevRelJobWorkplaces(jobs: DevRelJob[]): DevRelJobWorkplace[] {
  const order: DevRelJobWorkplace[] = [
    "Remote",
    "Hybrid",
    "On-site",
    "Unspecified",
  ];
  const present = new Set(jobs.map((job) => job.workplace));
  return order.filter((workplace) => present.has(workplace));
}

export function getDevRelJobTypes(jobs: DevRelJob[]): string[] {
  return Array.from(new Set(jobs.map((job) => job.type))).sort();
}

export function getDevRelJobLocations(jobs: DevRelJob[]): string[] {
  return Array.from(new Set(jobs.map((job) => job.location))).sort();
}

export function getDevRelJobLevels(jobs: DevRelJob[]): string[] {
  return Array.from(new Set(jobs.map((job) => job.level))).sort();
}

export function isNewDevRelJob(job: DevRelJob, now = Date.now()): boolean {
  const posted = new Date(job.postedDate).getTime();
  if (Number.isNaN(posted)) return false;
  return now - posted <= NEW_JOB_WINDOW_MS;
}
