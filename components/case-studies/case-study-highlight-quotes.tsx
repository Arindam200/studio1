import type { CaseStudyQuote as CaseStudyQuoteData } from "@/lib/case-studies";
import { cn } from "@/lib/utils";
import { CaseStudyQuote } from "@/components/case-studies/case-study-quote";

type CaseStudyHighlightQuotesProps = {
  quote: CaseStudyQuoteData;
  client: string;
  /** When true, eyebrow reflects outcome highlights instead of client quotes. */
  fromOutcomes?: boolean;
  className?: string;
};

/**
 * Single editorial pull quote when a study has no verified metrics.
 */
export function CaseStudyHighlightQuotes({
  quote,
  client,
  fromOutcomes = false,
  className,
}: CaseStudyHighlightQuotesProps) {
  return (
    <section
      aria-label="Client highlight"
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border/20 bg-gradient-to-br from-primary/[0.07] via-background to-primary1/[0.04] px-6 py-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.12),0_12px_36px_-12px_rgba(0,0,0,0.18),0_14px_36px_-10px_hsl(var(--primary)/0.12)] dark:border-transparent dark:from-primary/[0.1] dark:via-background dark:to-primary1/[0.06] dark:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.4),0_16px_48px_-16px_rgba(0,0,0,0.65)] md:px-8 md:py-9",
        className,
      )}
    >
      <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.14em] text-primary dark:text-primary/70">
        {fromOutcomes ? `Key outcome with ${client}` : `What ${client} said`}
      </p>

      <CaseStudyQuote
        variant="pull"
        author={quote.author}
        role={quote.role}
        source={quote.source}
      >
        {quote.text}
      </CaseStudyQuote>
    </section>
  );
}
