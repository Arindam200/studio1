import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NumericText } from "@/components/ui/num";
import { TableOfContents } from "@/components/case-studies/table-of-contents";
import type { CaseStudyMeta } from "@/lib/case-studies";

type CaseStudyLayoutProps = {
  study: CaseStudyMeta;
  children: ReactNode;
};

export function CaseStudyLayout({ study, children }: CaseStudyLayoutProps) {
  return (
    <article className="relative mx-auto max-w-7xl px-4 pt-12 pb-20 md:pt-20">
      {/* Back link */}
      <Link
        href="/case-studies"
        className="group mt-10 mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
        All case studies
      </Link>

      {/* Main grid: content left, ToC right — starts at header level */}
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_220px]">
        <div>
          {/* Header */}
          <header className="mb-10 max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="text-xs uppercase tracking-wide">
                {study.category}
              </Badge>
              {study.readingTimeMinutes > 0 && (
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="size-3.5" />
                  {study.readingTimeMinutes} min read
                </span>
              )}
            </div>

            <h1 className="font-primary text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem]">
              {study.title}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {study.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Cover image */}
          <div className="relative mb-10 aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-xl border bg-muted">
            <Image
              src={study.cover}
              alt={`${study.client} case study`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 56rem"
              priority
            />
          </div>

          {/* Metrics strip */}
          {study.metrics.length > 0 && (
            <dl className="mb-14 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-3">
              {study.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex flex-col gap-1 bg-background p-5"
                >
                  <dt className="text-sm text-muted-foreground">{metric.label}</dt>
                  <dd className="text-2xl font-semibold leading-tight md:text-3xl">
                    <NumericText>{metric.value}</NumericText>
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {/* MDX content */}
          <div
            data-mdx-content
            className="prose prose-neutral dark:prose-invert max-w-4xl prose-headings:scroll-mt-24 prose-p:leading-relaxed prose-li:leading-relaxed"
          >
            {children}
          </div>
        </div>

        {/* ToC sidebar */}
        <TableOfContents />
      </div>

      {/* CTA footer */}
      <div className="mt-16 flex max-w-4xl flex-col items-start gap-4 rounded-2xl border bg-muted/30 p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-primary text-lg font-semibold">
            Want results like {study.client}?
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Share your ICP and competitors, and we&apos;ll outline a growth +
            technical content strategy for your product.
          </p>
        </div>
        <Button variant="gradient" size="cta" className="shrink-0" asChild>
          <a
            href="https://cal.com/studio1/collab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call
          </a>
        </Button>
      </div>
    </article>
  );
}
