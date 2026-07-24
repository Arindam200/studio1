import Link from "next/link";
import { ArrowUpRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { caseStudyHighlightCardClassName } from "@/components/case-studies/case-study-highlight-quotes";
import { CaseStudyQuote } from "@/components/case-studies/case-study-quote";
import { NumericText } from "@/components/ui/num";
import type { CaseStudyMeta } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

type CaseStudyDetailPanelsProps = {
  study: CaseStudyMeta;
};

const quietPanel =
  "rounded-xl border border-border/60 bg-background/55 shadow-[0_18px_48px_-36px_rgba(0,0,0,0.55)] backdrop-blur-sm dark:bg-background/35";

export function CaseStudySnapshot({ study }: CaseStudyDetailPanelsProps) {
  const snapshot = [
    ["Client", study.client],
    ["Focus", study.category],
    ["Market", study.industry],
  ].filter(([, value]) => value);

  return (
    <section className={cn("mt-12 overflow-hidden", quietPanel)}>
      <div className="grid grid-cols-1 divide-y divide-border/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {snapshot.map(([label, value]) => (
          <div key={label} className="px-4 py-4 sm:px-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {label}
            </p>
            <p className="mt-2 text-sm font-medium leading-snug text-foreground">
              <NumericText>{value}</NumericText>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CaseStudyScope({ study }: CaseStudyDetailPanelsProps) {
  if (study.services.length === 0) return null;

  return (
    <section className="mt-8">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
            Studio1 scope
          </p>
          <h2 className="mt-2 font-inter text-xl font-semibold tracking-tight sm:text-2xl">
            Engagement focus
          </h2>
        </div>
        {study.website ? (
          <Link
            href={study.website}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Visit {study.client}
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
          </Link>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-2">
        {study.services.map((service) => (
          <span
            key={service}
            className="rounded-full border border-border/70 bg-background/60 px-3.5 py-2 text-sm font-medium text-foreground/90 shadow-sm dark:bg-background/35"
          >
            {service}
          </span>
        ))}
      </div>
    </section>
  );
}

export function CaseStudyProof({ study }: CaseStudyDetailPanelsProps) {
  const quote = study.quotes[0];
  const outcomes = study.outcomes.slice(0, 5);

  if (!quote && outcomes.length === 0) return null;

  return (
    <section className="not-prose mt-16 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_0.9fr]">
      {quote ? (
        <div className={cn(caseStudyHighlightCardClassName, "flex h-full flex-col")}>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
            Client testimonial
          </p>
          <CaseStudyQuote
            variant="pull"
            pinFooter
            author={quote.author}
            role={quote.role}
            source={quote.source}
            avatar={quote.avatar}
          >
            {quote.text}
          </CaseStudyQuote>
        </div>
      ) : null}

      {outcomes.length > 0 ? (
        <div className={cn(quietPanel, quote ? "p-5 md:p-6" : "p-5 md:p-6 lg:col-span-2")}>
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
            Outcome highlights
          </p>
          <ul className="mt-5 space-y-3.5">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-3">
                <CheckCircle
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  weight="fill"
                />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  <NumericText>{outcome}</NumericText>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
