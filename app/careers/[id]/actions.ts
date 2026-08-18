"use server";

import { db } from "@/lib/db";
import { jobApplications } from "@/lib/db/schema";

export type ApplicationFormState = {
  status: "idle" | "error" | "success";
  message?: string;
  fieldErrors?: Partial<
    Record<"name" | "email" | "resumeUrl" | "portfolioUrl" | "message", string>
  >;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export async function submitJobApplication(
  _prevState: ApplicationFormState,
  formData: FormData,
): Promise<ApplicationFormState> {
  const jobId = String(formData.get("jobId") ?? "").trim();
  const jobTitle = String(formData.get("jobTitle") ?? "").trim();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const resumeUrl = String(formData.get("resumeUrl") ?? "").trim();
  const portfolioUrl = String(formData.get("portfolioUrl") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: ApplicationFormState["fieldErrors"] = {};

  if (!name) fieldErrors.name = "Please enter your name.";
  if (!email) {
    fieldErrors.email = "Please enter your email.";
  } else if (!emailPattern.test(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (!resumeUrl) {
    fieldErrors.resumeUrl = "Please add a link to your resume.";
  } else if (!isValidHttpUrl(resumeUrl)) {
    fieldErrors.resumeUrl = "Please enter a valid URL (https://...).";
  }
  if (portfolioUrl && !isValidHttpUrl(portfolioUrl)) {
    fieldErrors.portfolioUrl = "Please enter a valid URL (https://...).";
  }
  if (message.length > 2000) {
    fieldErrors.message = "Please keep your note under 2000 characters.";
  }

  if (!jobId || !jobTitle) {
    return { status: "error", message: "This job posting is unavailable." };
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors };
  }

  try {
    await db.insert(jobApplications).values({
      jobId,
      jobTitle,
      name,
      email,
      resumeUrl,
      portfolioUrl: portfolioUrl || null,
      message: message || null,
    });
  } catch (error) {
    console.error("Failed to save job application", error);
    return {
      status: "error",
      message:
        "Something went wrong while submitting your application. Please try again.",
    };
  }

  return { status: "success" };
}
