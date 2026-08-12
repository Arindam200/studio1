import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { JobDetailPage } from "@/components/careers/job-detail-page";
import { getJobById, getJobIds } from "@/lib/careers";
import {
  jobPostingJsonLd,
  localizedBreadcrumbJsonLd,
  pageMetadata,
} from "@/lib/seo";
import { headers } from "next/headers";
import { getSafeLocale } from "@/lib/i18n-messages";
import { getJobApplicationMailto } from "@/lib/careers-mailto";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return getJobIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const headerStore = await headers();
  const locale = getSafeLocale(headerStore.get("x-studio1-locale"));
  const job = getJobById(id, locale);

  if (!job) {
    return { title: "Not found" };
  }

  return pageMetadata({
    title: job.title,
    description: job.description,
    path: `/careers/${id}`,
    locale,
  });
}

export default async function CareerJobPage({ params }: Props) {
  const { id } = await params;
  const headerStore = await headers();
  const locale = getSafeLocale(headerStore.get("x-studio1-locale"));
  const job = getJobById(id, locale);

  if (!job) notFound();

  const breadcrumbSchema = localizedBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
    { name: job.title, path: `/careers/${id}` },
  ], locale);
  const jobSchema = jobPostingJsonLd({
    ...job,
    applyUrl: getJobApplicationMailto(job),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
      />
      <JobDetailPage job={job}>
        <MDXRemote
          source={job.content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </JobDetailPage>
    </>
  );
}
