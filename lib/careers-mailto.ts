export const CAREERS_CONTACT_EMAIL = "contact@studio1hq.com";

export function getJobApplicationMailto(job: {
  title: string;
  department: string;
}): string {
  const subject = encodeURIComponent(`Application: ${job.title}`);
  const body = encodeURIComponent(
    `Hi Studio1 team,\n\nI would like to apply for the ${job.title} role (${job.department}).\n\n`,
  );

  return `mailto:${CAREERS_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}
