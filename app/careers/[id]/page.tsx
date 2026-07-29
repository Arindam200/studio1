import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { JobDetailPage } from "@/components/careers/job-detail-page";
import { getJobById, getJobIds } from "@/lib/careers";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return getJobIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const job = getJobById(id);

  if (!job) {
    return { title: "Not found" };
  }

  return pageMetadata({
    title: job.title,
    description: job.description,
    path: `/careers/${id}`,
  });
}

export default async function CareerJobPage({ params }: Props) {
  const { id } = await params;
  const job = getJobById(id);

  if (!job) notFound();

  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
    { name: job.title, path: `/careers/${id}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
