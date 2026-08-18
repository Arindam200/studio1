import { DevRelJobsPage } from "@/components/devrel-jobs/devrel-jobs-page";
import { getDevRelJobs } from "@/lib/devrel-jobs";
import { baseUrl } from "@/lib/seo";

export default function DevRelJobs() {
  const jobs = getDevRelJobs();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "DevRel Jobs Board",
    url: `${baseUrl}/devrel-jobs`,
    numberOfItems: jobs.length,
    itemListElement: jobs.map((job, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "JobPosting",
        title: job.title,
        description: `${job.title} at ${job.company} - ${job.location}.`,
        datePosted: job.postedDate,
        employmentType: "FULL_TIME",
        hiringOrganization: {
          "@type": "Organization",
          name: job.company,
        },
        ...(job.workplace === "Remote"
          ? { jobLocationType: "TELECOMMUTE" }
          : {}),
        url: job.url,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <DevRelJobsPage jobs={jobs} />
    </>
  );
}
