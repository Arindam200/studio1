import type { CaseStudyMeta, CaseStudyMetric } from "@/lib/case-studies";
import { CaseStudyHighlightQuotes } from "@/components/case-studies/case-study-highlight-quotes";
import { CaseStudyHighlightStats } from "@/components/case-studies/case-study-highlight-stats";
import { cn } from "@/lib/utils";

type CaseStudyHighlightsProps = {
  study: CaseStudyMeta;
  className?: string;
};

function dedupeMetrics(metrics: CaseStudyMetric[]) {
  const seen = new Set<string>();

  return metrics.filter((metric) => {
    const key = `${metric.value}\0${metric.label}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function outcomeAsQuote(study: CaseStudyMeta) {
  const outcome = study.outcomes[0];
  if (!outcome) return null;

  return {
    text: outcome,
    author: study.client,
    role: study.category,
  };
}

/**
 * Highlight below the case study header.
 * Verified metrics (up to 3) or one pull quote, never both.
 */
export function CaseStudyHighlights({
  study,
  className,
}: CaseStudyHighlightsProps) {
  const metrics = dedupeMetrics(study.metrics).slice(0, 3);
  const fromOutcomes = study.quotes.length === 0;
  const featuredQuote = study.quotes[0] ?? outcomeAsQuote(study);

  if (metrics.length === 0 && !featuredQuote) return null;

  return (
    <div className={cn(className)}>
      {metrics.length > 0 ? (
        <CaseStudyHighlightStats metrics={metrics} client={study.client} />
      ) : featuredQuote ? (
        <CaseStudyHighlightQuotes
          quote={featuredQuote}
          client={study.client}
          fromOutcomes={fromOutcomes}
        />
      ) : null}
    </div>
  );
}
