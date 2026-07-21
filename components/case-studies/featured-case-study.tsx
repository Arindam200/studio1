import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { NumericText } from "@/components/ui/num";
import {
  CardMedia,
  ClientMark,
  cardFrame,
} from "@/components/case-studies/case-study-card";
import { glassCardEdgeHighlight, glassCardHoverWash } from "@/lib/shadows";
import { getFeaturedCaseStudy } from "@/lib/case-studies";

/**
 * Featured case study, the largest size in the card system.
 *
 * Content left, artwork right. Carries a short metric row because it has the
 * room; the standard cards do not, since their headlines already state the
 * number. No summary paragraph and no tag row: this is an index, not a page.
 */
export function FeaturedCaseStudy() {
  const study = getFeaturedCaseStudy();
  if (!study) return null;

  const metrics = study.metrics.slice(0, 3);

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className={cardFrame("flex-col p-3 md:flex-row md:items-stretch")}
    >
      <div aria-hidden className={glassCardEdgeHighlight} />
      <div aria-hidden className={glassCardHoverWash} />

      {/* Narrative */}
      <div className="relative z-[1] flex min-w-0 flex-1 flex-col gap-6 p-5 sm:p-7 lg:p-8">
        <div className="flex min-w-0 items-center gap-3">
          <ClientMark study={study} size="lg" />
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-foreground">
              {study.client}
            </p>
            <span className="mt-0.5 block truncate text-[11px] font-medium uppercase tracking-wider text-primary">
              {study.category}
            </span>
          </div>
        </div>

        <h2 className="font-inter text-2xl font-semibold leading-tight tracking-tight transition-colors duration-300 group-hover:text-primary md:text-3xl">
          <NumericText>{study.title}</NumericText>
        </h2>

        {metrics.length > 0 ? (
          <dl className="flex flex-wrap gap-x-10 gap-y-6 border-t border-border/50 pt-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="min-w-0 max-w-[9rem]">
                <dt className="sr-only">{metric.label}</dt>
                <dd className="font-numeric text-2xl font-bold leading-none tracking-tight tabular-nums text-primary transition-colors duration-300 group-hover:text-primary1 md:text-3xl">
                  <NumericText>{metric.value}</NumericText>
                </dd>
                <p className="mt-2 line-clamp-2 text-[11px] leading-snug text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </dl>
        ) : null}

        <Button
          variant="gradient"
          size="cta"
          className="mt-auto w-fit"
          tabIndex={-1}
          asChild
        >
          <span>
            Read the case study
            <ArrowUpRight
              weight="bold"
              className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
            />
          </span>
        </Button>
      </div>

      {/* Artwork: stretches to narrative column height on md+ */}
      <div className="relative z-[1] flex min-h-0 min-w-0 items-stretch p-2 md:w-[min(45%,32rem)] md:shrink-0 lg:w-[min(48%,34rem)]">
        <CardMedia study={study} variant="featured" priority />
      </div>
    </Link>
  );
}
