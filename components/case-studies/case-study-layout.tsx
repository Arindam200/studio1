import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { NumericText } from "@/components/ui/num";
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
const COLUMN = "max-w-3xl";

/**
 * Case study detail layout.
 *
 * Single left-aligned column with a fixed right-rail table of contents.
 * Everything shares one left edge and one measure, so the page reads as a
 * continuous document rather than a stack of differently-sized bands.
 *
 * The headline metric leads a single horizontal metrics row; supporting
 * metrics sit beside it at a quieter weight.
 */
export function CaseStudyLayout({
  study,
  related,
  children,
}: CaseStudyLayoutProps) {
  const logo = getClientLogo(study.slug);
  const [headline, ...supporting] = study.metrics;
  const meta = [study.industry, study.category].filter(Boolean);

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

        {/* Identity */}
        <header className={COLUMN}>
          <div className="flex items-center gap-3">
            {logo ? (
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-background/80 p-2 backdrop-blur-md">
                <Image
                  src={logo.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="size-full object-contain"
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

          <h1 className="mt-8 font-inter text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            <NumericText>{study.title}</NumericText>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {study.description}
          </p>
        </header>

        {/* Headline result */}
        {headline ? (
          <section
            aria-label="Headline result"
            className={`${COLUMN} mt-14 border-t border-border/60 pt-10`}
          >
            <dl className="flex flex-nowrap items-start gap-x-8 overflow-x-auto pb-1 sm:gap-x-12 md:gap-x-14">
              <div className="min-w-0 shrink-0">
                <dt className="sr-only">{headline.label}</dt>
                <dd>
                  <MetricValue
                    metric={headline}
                    className="font-numeric text-4xl font-bold leading-none tracking-tight tabular-nums text-primary sm:text-5xl md:text-6xl"
                  />
                </dd>
                <p className="mt-2.5 max-w-[14rem] text-xs leading-snug text-muted-foreground">
                  {headline.label}
                </p>
              </div>

              {supporting.map((metric) => (
                <div key={metric.label} className="min-w-0 shrink-0">
                  <dt className="sr-only">{metric.label}</dt>
                  <dd>
                    <MetricValue
                      metric={metric}
                      className="font-numeric text-2xl font-semibold leading-none tabular-nums text-foreground md:text-3xl"
                    />
                  </dd>
                  <p className="mt-2.5 max-w-[12rem] text-xs leading-snug text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </dl>
          </section>
        ) : study.outcomes.length > 0 ? (
          <section
            aria-label="Key outcomes"
            className={`${COLUMN} mt-14 space-y-4 border-t border-border/60 pt-10`}
          >
            {study.outcomes.slice(0, 4).map((outcome) => (
              <p
                key={outcome}
                className="border-l-2 border-primary/40 pl-5 text-base leading-relaxed text-foreground/90"
              >
                <NumericText>{outcome}</NumericText>
              </p>
            ))}
          </section>
        ) : null}

        {/* Narrative */}
        <div
          data-mdx-content
          className={`prose prose-neutral mt-16 dark:prose-invert ${COLUMN} prose-headings:font-inter prose-headings:scroll-mt-32 prose-p:leading-relaxed prose-strong:font-inter prose-strong:font-semibold prose-li:leading-relaxed`}
        >
          {children}
        </div>

        {/* Credentials */}
        {study.services.length > 0 || study.website ? (
          <div
            className={`${COLUMN} mt-16 flex flex-wrap items-start justify-between gap-6 border-t border-border/60 pt-8`}
          >
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
          aside for the related strip and CTA, which aren't part of the study.
        */}
        <div aria-hidden data-mdx-end />

        <div className={COLUMN}>
          <RelatedCaseStudies studies={related} />
        </div>

        {/* CTA */}
        <div
          className={`${COLUMN} mt-16 flex flex-col items-start gap-5 rounded-2xl border border-border/60 bg-background/80 p-8 backdrop-blur-md sm:p-10`}
        >
          <p className="font-inter text-xl font-semibold text-foreground sm:text-2xl">
            <NumericText>
              {study.ctaHook || `Want results like ${study.client}?`}
            </NumericText>
          </p>
          <p className="max-w-md text-sm text-muted-foreground">
            Share your ICP and competitors, and we&apos;ll outline a growth +
            technical content strategy for your product.
          </p>
          <Button variant="gradient" size="cta" asChild>
            <a
              href="https://cal.com/studio1/collab"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book an intro call
            </a>
          </Button>
        </div>
      </article>
    </>
  );
}

/**
 * Renders a metric value, linking to its public source when one exists.
 * The verify affordance stays permanently visible: it was hover-only before,
 * making it undiscoverable on touch despite being the mechanism behind the
 * "results developers can verify" promise.
 */
function MetricValue({
  metric,
  className,
}: {
  metric: CaseStudyMeta["metrics"][number];
  className: string;
}) {
  const value = (
    <span className={className}>
      <NumericText>{metric.value}</NumericText>
    </span>
  );

  if (!metric.evidence) return value;

  return (
    <a
      href={metric.evidence}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-start gap-1.5 transition-opacity hover:opacity-80"
    >
      {value}
      <ArrowUpRight
        className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
        aria-label="View source"
      />
    </a>
  );
}
