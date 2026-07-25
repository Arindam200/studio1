import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { NumericText } from "@/components/ui/num";
import { CaseStudyHighlights } from "@/components/case-studies/case-study-highlights";
import {
  CaseStudyProof,
  CaseStudyScope,
  CaseStudySnapshot,
} from "@/components/case-studies/case-study-detail-panels";
import { TableOfContents } from "@/components/case-studies/table-of-contents";
import { getClientLogo } from "@/components/case-studies/client-logos";
import { RelatedCaseStudies } from "@/components/case-studies/related-case-studies";
import type { CaseStudyMeta } from "@/lib/case-studies";

type CaseStudyLayoutProps = {
  study: CaseStudyMeta;
  related: CaseStudyMeta[];
  children: ReactNode;
};

/** Shared measure for every block on the page, one left edge, top to bottom. */
const COLUMN = "max-w-[52rem]";

/**
 * Case study detail layout.
 *
 * Single left-aligned column with a fixed right-rail table of contents.
 * Everything shares one left edge and one measure, so the page reads as a
 * continuous document rather than a stack of differently-sized bands.
 *
 * Verified metrics sit below the header when present. Studies without metrics
 * open with the testimonial + outcome proof panels instead; with metrics,
 * those panels stay after the narrative.
 */
export function CaseStudyLayout({
  study,
  related,
  children,
}: CaseStudyLayoutProps) {
  const logo = getClientLogo(study.slug);
  const meta = [study.industry, study.category].filter(Boolean);
  const hasMetrics = study.metrics.length > 0;

  return (
    <>
      <TableOfContents />

      <article className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 md:pt-20">
        <Link
          href="/case-studies"
          className="group mb-12 mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground md:mt-10"
        >
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5 motion-reduce:transform-none" />
          All case studies
        </Link>

        {/* Single measure for header, highlights, prose, and credentials. */}
        <div className={COLUMN}>
          {/* Identity */}
          <header>
            <div className="flex items-center gap-3">
              {logo ? (
                <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-background/80 p-2 backdrop-blur-md">
                  <Image
                    src={logo.icon}
                    alt={`${study.client} logo`}
                    width={28}
                    height={28}
                    className="size-full rounded-lg object-contain"
                  />
                </div>
              ) : null}
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">
                  {study.client}
                </p>
                {meta.length > 0 ? (
                  <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    {meta.join(" · ")}
                  </p>
                ) : null}
              </div>
            </div>

            <h1 className="mt-8 font-inter text-3xl font-normal leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
              <NumericText>{study.title}</NumericText>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {study.description}
            </p>
          </header>

          {/*
            With metrics: verified results sit under the header; proof panels
            stay after the narrative. Without metrics: testimonial + outcomes
            move up so the page still opens with proof, not a blank gap.
          */}
          {hasMetrics ? (
            <div className="mt-14 border-t border-border/60 pt-10">
              <CaseStudyHighlights study={study} />
            </div>
          ) : (
            <CaseStudyProof study={study} />
          )}

          <CaseStudySnapshot study={study} />
          <CaseStudyScope study={study} />

          {/* Narrative: max-w-none so width comes from the column wrapper, not prose defaults. */}
          <div
            data-mdx-content
            className="prose prose-neutral mt-16 max-w-none dark:prose-invert prose-headings:font-inter prose-headings:scroll-mt-32 prose-p:leading-relaxed prose-strong:font-inter prose-strong:font-semibold prose-li:leading-relaxed"
          >
            {children}
          </div>

          {hasMetrics ? <CaseStudyProof study={study} /> : null}

          {/* Credentials */}
          {study.services.length > 0 || study.website ? (
            <div className="mt-16 flex flex-wrap items-start justify-between gap-6 border-t border-border/60 pt-8">
              {study.services.length > 0 ? (
                <div className="min-w-0">
                  <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    What we did
                  </p>
                  <p className="text-sm text-foreground">
                    {study.services.join(" · ")}
                  </p>
                </div>
              ) : null}

              {study.website ? (
                <a
                  href={study.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Visit {study.client}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
                </a>
              ) : null}
            </div>
          ) : null}

          {/*
            End-of-case-study sentinel. The fixed table of contents watches this
            element and releases once it reaches the rail, so the rail stays with
            the reader through the narrative AND the credentials, then steps
            aside for the related strip, which isn't part of the study.
          */}
          <div aria-hidden data-mdx-end />

          <RelatedCaseStudies studies={related} />
        </div>
      </article>
    </>
  );
}
