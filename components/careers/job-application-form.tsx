"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  submitJobApplication,
  type ApplicationFormState,
} from "@/app/careers/[id]/actions";

const initialState: ApplicationFormState = { status: "idle" };

const textareaClassName =
  "flex min-h-28 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";

function Field({
  label,
  error,
  optional = false,
  children,
}: {
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {optional && (
          <span className="ml-1.5 text-xs font-normal text-muted-foreground">
            (optional)
          </span>
        )}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="gradient"
      size="cta"
      className="rounded-md px-8"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit application"}
      {!pending && <ArrowRight className="size-4" weight="bold" />}
    </Button>
  );
}

export function JobApplicationForm({
  jobId,
  jobTitle,
}: {
  jobId: string;
  jobTitle: string;
}) {
  const [state, formAction] = useActionState(
    submitJobApplication,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div
        id="apply"
        className="not-prose mt-16 scroll-mt-24 rounded-lg border border-border/60 bg-muted/10 px-6 py-10 text-center dark:border-white/[0.08] dark:bg-white/[0.02]"
      >
        <CheckCircle
          className="mx-auto size-10 text-primary"
          weight="duotone"
        />
        <h2 className="mt-4 font-inter text-xl font-semibold tracking-tight text-foreground">
          Application received
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thanks for applying to the {jobTitle} role. We review every
          application and will reach out if there&apos;s a fit.
        </p>
      </div>
    );
  }

  return (
    <div
      id="apply"
      className="not-prose mt-16 scroll-mt-24 overflow-hidden rounded-lg border border-border/60 bg-muted/10 dark:border-white/[0.08] dark:bg-white/[0.02]"
    >
      <div className="border-b border-border/50 px-6 py-4 dark:border-white/[0.06]">
        <h2 className="font-inter text-lg font-semibold tracking-tight text-foreground">
          Apply for this role
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Tell us a bit about yourself — we read every application.
        </p>
      </div>

      <form action={formAction} className="grid gap-5 px-6 py-6">
        <input type="hidden" name="jobId" value={jobId} />
        <input type="hidden" name="jobTitle" value={jobTitle} />

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full name" error={state.fieldErrors?.name}>
            <Input
              name="name"
              autoComplete="name"
              placeholder="Jane Doe"
              className={cn(state.fieldErrors?.name && "border-destructive")}
            />
          </Field>
          <Field label="Email" error={state.fieldErrors?.email}>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jane@example.com"
              className={cn(state.fieldErrors?.email && "border-destructive")}
            />
          </Field>
        </div>

        <Field label="Resume link" error={state.fieldErrors?.resumeUrl}>
          <Input
            name="resumeUrl"
            type="url"
            inputMode="url"
            placeholder="https://drive.google.com/..."
            className={cn(
              state.fieldErrors?.resumeUrl && "border-destructive",
            )}
          />
        </Field>

        <Field
          label="Portfolio / LinkedIn"
          optional
          error={state.fieldErrors?.portfolioUrl}
        >
          <Input
            name="portfolioUrl"
            type="url"
            inputMode="url"
            placeholder="https://..."
            className={cn(
              state.fieldErrors?.portfolioUrl && "border-destructive",
            )}
          />
        </Field>

        <Field
          label="Anything we should know?"
          optional
          error={state.fieldErrors?.message}
        >
          <textarea
            name="message"
            placeholder="Why this role fits you, links to past work, your 1-week plan..."
            className={cn(
              textareaClassName,
              state.fieldErrors?.message && "border-destructive",
            )}
          />
        </Field>

        {state.status === "error" && state.message && (
          <p className="text-sm text-destructive">{state.message}</p>
        )}

        <div>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
