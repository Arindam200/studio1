export const CAREERS_CONTACT_EMAIL = "careers@studio1hq.com";

export function getJobApplicationMailto(job: {
  title: string;
  department: string;
  applySubject: string;
}): string {
  const subject = encodeURIComponent(`Application: ${job.applySubject}`);
  const isOpenPitch = job.applySubject.toLowerCase().includes("pitch");
  const body = encodeURIComponent(
    isOpenPitch
      ? `Hi Studio1 team,\n\nI would like to pitch a role for Studio1.\n\nResume / profile:\n\nProof of past work:\n\nSingle-page pitch link or summary:\n\nWhat I can help with:\n\nWhy this is relevant for Studio1:\n\nWhat I would do first:\n\n`
      : `Hi Studio1 team,\n\nI would like to apply for the ${job.title} role (${job.department}).\n\nResume:\n\nPast work / portfolio links if available:\n\n1-week plan if I join Studio1:\n\nWhy this role fits me:\n\n`,
  );

  return `mailto:${CAREERS_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}
