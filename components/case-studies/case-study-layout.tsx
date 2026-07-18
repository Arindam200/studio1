import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  Buildings,
  CalendarBlank,
  CheckCircle,
  Clock,
  Globe,
  Stack,
  Trophy,
} from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Num, NumericText } from "@/components/ui/num";
import { TableOfContents } from "@/components/case-studies/table-of-contents";
import { getClientLogo } from "@/components/case-studies/client-logos";
import { RelatedCaseStudies } from "@/components/case-studies/related-case-studies";
import type { CaseStudyMeta } from "@/lib/case-studies";

type CaseStudyLayoutProps = {
  study: CaseStudyMeta;
  related: CaseStudyMeta[];
  children: ReactNode;
};

type FactItem = {
  label: string;
  icon: typeof Buildings;
  content: ReactNode;
};

function hostnameFromUrl(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function CaseStudyLayout({
  study,
  related,
  children,
}: CaseStudyLayoutProps) {
  const logo = getClientLogo(study.slug);
  const hasMetrics = study.metrics.length > 0;
  const hasOutcomes = study.outcomes.length > 0;

  const facts: FactItem[] = [
    {
      label: "Client",
      icon: Buildings,
      content: (
        <div className="flex min-w-0 items-center gap-2">
          {logo ? (
            <Image
              src={logo.icon}
              alt=""
              className="h-6 w-auto shrink-0 rounded-md object-contain"
            />
          ) : null}
          <span className="truncate text-sm font-medium text-foreground">
            {study.client}
          </span>
        </div>
      ),
    },
  ];

  if (study.industry) {
    facts.push({
      label: "Industry",
      icon: Globe,
      content: (
        <span className="text-sm font-medium leading-snug text-foreground">
          {study.industry}
        </span>
      ),
    });
  }

  if (study.services.length > 0) {
    const shown = study.services.slice(0, 3);
    const extra = study.services.length - shown.length;
    facts.push({
      label: "Services",
      icon: Stack,
      content: (
        <p className="text-sm font-medium leading-snug text-foreground">
          {shown.join(" · ")}
          {extra > 0 ? (
            <span className="text-muted-foreground">
              {" "}
              +<Num>{String(extra)}</Num>
            </span>
          ) : null}
        </p>
      ),
    });
  }

  if (study.website) {
    facts.push({
      label: "Website",
      icon: ArrowUpRight,
      content: (
        <a
          href={study.website}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          {hostnameFromUrl(study.website)}
          <ArrowUpRight className="size-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
        </a>
      ),
    });
  }

  if (study.timeline) {
    facts.push({
      label: "Timeline",
      icon: CalendarBlank,
      content: (
        <span className="text-sm font-medium leading-snug text-foreground">
          <NumericText>{study.timeline}</NumericText>
        </span>
      ),
    });
  }

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

      {/* Hero */}
      <header className="mb-10 max-w-4xl">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <Badge className="flex w-fit items-center gap-1.5 pb-1">
            <Trophy className="size-3.5" weight="fill" />
            Case Study
          </Badge>
          <Badge variant="secondary" className="text-xs uppercase tracking-wide">
            {study.category}
          </Badge>
          {study.readingTimeMinutes > 0 && (
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="size-3.5" />
              <NumericText>{`${study.readingTimeMinutes} min read`}</NumericText>
            </span>
          )}
        </div>

        <h1 className="font-primary text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
          <NumericText>{study.title}</NumericText>
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {study.description}
        </p>
      </header>

      {/* Fact strip — full-width band under the hero */}
      <div className="mb-12 grid w-full grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border/60 lg:grid-cols-4">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="flex flex-col gap-2 bg-background/90 p-5 backdrop-blur-md"
          >
            <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              <fact.icon className="size-3.5" />
              {fact.label}
            </div>
            {fact.content}
          </div>
        ))}
      </div>

      {/* Impact band: evidence-backed metrics, or a key-outcomes checklist for metric-light studies */}
      {hasMetrics ? (
        <div className="mb-14 max-w-4xl rounded-2xl border bg-background/80 p-6 backdrop-blur-md sm:p-8">
          <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Impact
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {study.metrics.slice(0, 3).map((metric) => {
              const value = (
                <div className="bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text text-4xl font-bold leading-none text-transparent md:text-5xl">
                  <NumericText>{metric.value}</NumericText>
                </div>
              );

              return metric.evidence ? (
                <a
                  key={metric.label}
                  href={metric.evidence}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/metric block"
                >
                  {value}
                  <p className="mt-3 inline-flex items-center gap-1 text-sm text-muted-foreground">
                    {metric.label}
                    <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover/metric:opacity-100" />
                  </p>
                </a>
              ) : (
                <div key={metric.label}>
                  {value}
                  <p className="mt-3 text-sm text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : hasOutcomes ? (
        <div className="mb-14 max-w-4xl rounded-2xl border bg-background/80 p-6 backdrop-blur-md sm:p-8">
          <div className="mb-6 flex items-center gap-2 text-primary">
            <Trophy className="size-5" weight="fill" />
            <h2 className="font-primary text-lg font-semibold text-foreground">
              Key outcomes
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {study.outcomes.slice(0, 6).map((outcome) => (
              <li key={outcome} className="flex items-start gap-3">
                <CheckCircle
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  weight="fill"
                />
                <span className="text-sm leading-relaxed text-foreground/90">
                  <NumericText>{outcome}</NumericText>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Cover image */}
      <div className="relative mb-14 aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-xl border bg-muted">
        <Image
          src={study.cover}
          alt={`${study.client} case study`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 56rem"
          priority
        />
      </div>

      {/* Content grid: main prose column + ToC sidebar */}
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_220px]">
        <div
          data-mdx-content
          className="prose prose-neutral dark:prose-invert max-w-4xl prose-headings:scroll-mt-24 prose-p:leading-relaxed prose-li:leading-relaxed"
        >
          {children}
        </div>

        {/* ToC sidebar */}
        <TableOfContents />
      </div>

      {/* More case studies */}
      <RelatedCaseStudies studies={related} />

      {/* CTA footer */}
      <div className="relative mt-16 max-w-4xl overflow-hidden rounded-2xl border bg-background/80 p-8 backdrop-blur-md">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary1/10"
        />
        <div className="relative z-[1] flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-primary text-lg font-semibold text-foreground">
              <NumericText>
                {study.ctaHook || `Want results like ${study.client}?`}
              </NumericText>
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
              Book an intro call
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
