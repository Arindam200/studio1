import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { NumericText } from "@/components/ui/num";
import { getClientLogo } from "@/components/case-studies/client-logos";
import type { CaseStudyMeta } from "@/lib/case-studies";

export function CaseStudyCard({ study }: { study: CaseStudyMeta }) {
  const logo = getClientLogo(study.slug);
  const [heroMetric] = study.metrics;
  const [heroOutcome] = study.outcomes;
  const badgeItems = (study.services.length > 0 ? study.services : study.tags).slice(
    0,
    3,
  );

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group relative flex min-w-0 flex-col items-stretch gap-0 overflow-hidden rounded-2xl border bg-background/80 backdrop-blur-md transition-all duration-500 hover:-translate-y-1"
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

      <div className="flex min-w-0 flex-1 flex-col gap-3 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            {logo ? (
              <Image
                src={logo.icon}
                alt=""
                width={24}
                height={24}
                className="size-6 shrink-0 rounded object-contain"
              />
            ) : null}
            <div className="min-w-0">
              <h3 className="min-w-0 truncate text-sm font-sans font-semibold leading-snug">
                {study.client}
              </h3>
              <span className="mt-0.5 block min-w-0 truncate text-[11px] font-medium uppercase tracking-wide text-primary">
                {study.category}
              </span>
            </div>
          </div>
          <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary">
            Read
            <ArrowRight
              weight="bold"
              className="size-3.5 transition-transform group-hover:translate-x-0.5"
            />
          </span>
        </div>

        <div>
          <p className="line-clamp-2 text-base font-semibold leading-snug transition-colors group-hover:text-primary md:text-lg">
            <NumericText>{study.title}</NumericText>
          </p>
          <p className="mt-1.5 line-clamp-2 text-sm leading-snug text-muted-foreground">
            {study.summary}
          </p>
        </div>

        {heroMetric ? (
          <div className="border-t border-border/60 pt-3">
            <div className="font-numeric text-2xl font-semibold tabular-nums leading-none text-primary">
              <NumericText>{heroMetric.value}</NumericText>
            </div>
            <p className="mt-1.5 text-xs leading-snug text-muted-foreground line-clamp-2">
              {heroMetric.label}
            </p>
          </div>
        ) : heroOutcome ? (
          <div className="flex items-start gap-2 border-t border-border/60 pt-3">
            <CheckCircle
              weight="fill"
              className="mt-0.5 size-4 shrink-0 text-primary"
            />
            <p className="text-sm leading-snug text-muted-foreground line-clamp-2">
              {heroOutcome}
            </p>
          </div>
        ) : null}

        {badgeItems.length > 0 ? (
          <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
            {badgeItems.map((item) => (
              <Badge
                key={item}
                variant="secondary"
                className="px-2 py-0 text-[11px]"
              >
                {item}
              </Badge>
            ))}
          </div>
        ) : null}
      </div>
    </Link>
  );
}
