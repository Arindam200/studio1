import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { NumericText } from "@/components/ui/num";
import type { CaseStudyMeta } from "@/lib/case-studies";

export function CaseStudyCard({ study }: { study: CaseStudyMeta }) {
  const [heroMetric, ...secondaryMetrics] = study.metrics;

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group border relative overflow-hidden hover:border-primary hover:-translate-y-1 duration-500 rounded-lg flex min-w-0 flex-col items-stretch gap-0 bg-background/80 backdrop-blur-md"
    >
      <div className="relative aspect-[3/1] w-full overflow-hidden border-b bg-muted">
        <Image
          src={study.cover}
          alt={`${study.client} case study`}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 40rem"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-4 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="min-w-0 truncate text-sm font-sans font-semibold group-hover:text-primary transition-colors leading-snug">
              {study.client}
            </h2>
            <span className="mt-1 block min-w-0 truncate text-[11px] font-medium uppercase tracking-wide text-primary">
              {study.category}
            </span>
          </div>
          <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary">
            Read
            <ArrowRight
              weight="bold"
              className="size-3.5 transition-transform group-hover:translate-x-0.5"
            />
          </span>
        </div>

        {heroMetric ? (
          <div>
            <div className="font-numeric text-3xl font-semibold tabular-nums leading-none text-primary sm:text-4xl">
              <NumericText>{heroMetric.value}</NumericText>
            </div>
            <p className="mt-2 text-sm leading-snug text-muted-foreground line-clamp-2">
              {heroMetric.label}
            </p>
          </div>
        ) : null}

        {secondaryMetrics.length > 0 ? (
          <dl className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-border/60 pt-4">
            {secondaryMetrics.slice(0, 2).map((metric) => (
              <div key={metric.label} className="min-w-0">
                <dt className="sr-only">{metric.label}</dt>
                <dd className="font-numeric text-lg font-semibold tabular-nums leading-tight">
                  <NumericText>{metric.value}</NumericText>
                </dd>
                <span className="mt-1 block text-[11px] leading-snug text-muted-foreground line-clamp-2">
                  {metric.label}
                </span>
              </div>
            ))}
          </dl>
        ) : null}

        {study.tags.length > 0 ? (
          <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
            {study.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-2 py-0 text-[11px]"
              >
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}
      </div>
    </Link>
  );
}
