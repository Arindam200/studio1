"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import {
  ArrowRight,
  CalendarBlank,
  CaretRight,
  CheckCircle,
  Clock,
  MapPin,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import type { JobDetail } from "@/lib/careers";
import { getJobApplicationMailto } from "@/lib/careers-mailto";
import { cn } from "@/lib/utils";

type JobDetailPageProps = {
  job: JobDetail;
  children: React.ReactNode;
};

function formatPostedDate(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;

  return parsed.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function JobDetailRow({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: ComponentType<{ className?: string; weight?: "duotone" | "bold" }>;
}) {
  return (
    <div className="border-b border-border/50 py-3 last:border-b-0 dark:border-white/[0.06]">
      <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        <Icon className="size-3.5 shrink-0" weight="duotone" />
        {label}
      </dt>
      <dd className="mt-1.5 text-sm font-medium text-foreground">{value}</dd>
    </div>
  );
}

function ApplyButton({
  className,
  href,
  label = "Apply",
  disabled = false,
}: {
  className?: string;
  href: string;
  label?: string;
  disabled?: boolean;
}) {
  if (disabled) {
    return (
      <Button
        variant="gradient"
        size="cta"
        className={cn("rounded-md px-8", className)}
        disabled
      >
        {label}
      </Button>
    );
  }

  return (
    <Button
      variant="gradient"
      size="cta"
      className={cn("rounded-md px-8", className)}
      asChild
    >
      <a href={href}>
        {label}
        <ArrowRight className="size-4" weight="bold" />
      </a>
    </Button>
  );
}

export function JobDetailPage({ job, children }: JobDetailPageProps) {
  const applyMailto = getJobApplicationMailto(job);
  const openingsLabel =
    job.openings === 1 ? "1 opening" : `${job.openings} openings`;
  const isOpeningSoon = job.status.toLowerCase().includes("soon");

  return (
    <section className="overflow-x-hidden bg-background pb-24 pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="border-b border-border/50 dark:border-white/[0.06]">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 text-sm text-muted-foreground sm:px-6 lg:px-8">
          <Link
            href="/careers"
            className="transition-colors hover:text-foreground"
          >
            Careers
          </Link>
          <CaretRight className="size-3.5 shrink-0" weight="bold" />
          <span className="truncate font-medium text-foreground">
            {job.title}
          </span>
        </div>
      </div>

      {/* Title band — Workday-style header */}
      <div className="border-b border-border/50 dark:border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="min-w-0">
            <h1 className="font-inter text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-[2rem] lg:leading-tight">
              {job.title}
            </h1>
            <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground sm:text-base">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                <CheckCircle className="size-3.5" weight="fill" />
                {job.status}
              </span>
              <span aria-hidden className="text-border">
                |
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4 text-primary" weight="duotone" />
                {job.location}
              </span>
              <span aria-hidden className="text-border">
                |
              </span>
              <span>{job.type}</span>
              <span aria-hidden className="text-border">
                |
              </span>
              <span>{job.department}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Two-column body */}
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-12 lg:px-8 xl:grid-cols-[minmax(0,1fr)_20rem]">
        <article
          className={cn(
            "min-w-0",
            "prose prose-neutral max-w-none dark:prose-invert",
            "prose-headings:font-inter prose-headings:font-semibold prose-headings:tracking-tight",
            "prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-lg prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-2",
            "dark:prose-h2:border-white/[0.06]",
            "prose-p:leading-relaxed prose-li:leading-relaxed prose-strong:font-inter",
          )}
        >
          {children}
        </article>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-lg border border-border/60 bg-muted/10 dark:border-white/[0.08] dark:bg-white/[0.02]">
            <div className="border-b border-border/50 px-5 py-4 dark:border-white/[0.06]">
              <h2 className="font-inter text-sm font-semibold uppercase tracking-wide text-foreground">
                Job details
              </h2>
            </div>

            <dl className="px-5">
              <JobDetailRow
                label="Status"
                value={job.status}
                icon={CheckCircle}
              />
              <JobDetailRow
                label="Openings"
                value={openingsLabel}
                icon={UsersThree}
              />
              <JobDetailRow
                label="Location"
                value={job.location}
                icon={MapPin}
              />
              <JobDetailRow label="Time type" value={job.type} icon={Clock} />
              <JobDetailRow
                label="Posted on"
                value={formatPostedDate(job.postedDate)}
                icon={CalendarBlank}
              />
            </dl>

            <div className="border-t border-border/50 p-5 dark:border-white/[0.06]">
              <ApplyButton
                className="w-full"
                href={applyMailto}
                label={isOpeningSoon ? "Coming soon" : "Apply"}
                disabled={isOpeningSoon}
              />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
