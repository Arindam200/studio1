export const CAREERS_CONTACT_EMAIL = "careers@studio1hq.com";

export function getJobApplicationMailto(job: {
  title: string;
  department: string;
  applySubject: string;
}): string {
  const subject = encodeURIComponent(`Application: ${job.applySubject}`);
  const body = encodeURIComponent(
    `Hi Studio1 team,\n\nI would like to apply for the ${job.title} role (${job.department}).\n\nResume:\n\nProof of work / portfolio links:\n\nWhy this role fits me:\n\n`,
  );

  return `mailto:${CAREERS_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}
