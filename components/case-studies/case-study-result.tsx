import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Num } from "@/components/ui/num";
import { elevatedCardShadow } from "@/lib/shadows";
import { cn } from "@/lib/utils";

export type CaseStudyResultStat = {
  value: string;
  label: string;
};

export type CaseStudyResultData = {
  company: string;
  category: string;
  href: string;
  heroValue: string;
  heroLabel: string;
  proof: string;
  stats?: CaseStudyResultStat[];
};

type CaseStudyResultProps = {
  study: CaseStudyResultData;
  variant?: "featured" | "compact";
  className?: string;
};

export function CaseStudyResult({
  study,
  variant = "compact",
  className,
}: CaseStudyResultProps) {
  if (variant === "featured") {
    return (
      <Link
        href={study.href}
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-xl border bg-background transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/40 md:flex-row md:items-stretch",
          elevatedCardShadow,
          className,
        )}
      >
        <div className="flex flex-col justify-between gap-6 border-b border-border/60 p-6 md:w-[42%] md:border-b-0 md:border-r md:p-8 lg:p-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {study.category}
            </p>
            <p className="mt-3 font-primary text-xl font-medium tracking-tight md:text-2xl">
              {study.company}
            </p>
          </div>

          <div>
            <p className="font-numeric text-5xl font-semibold tabular-nums leading-none tracking-tight text-primary md:text-6xl lg:text-7xl">
              <Num>{study.heroValue}</Num>
            </p>
            <p className="mt-3 max-w-[16rem] text-sm leading-snug text-muted-foreground md:text-base">
              {study.heroLabel}
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between gap-8 p-6 md:p-8 lg:p-10">
          <div>
            <p className="max-w-xl font-primary text-xl font-normal leading-snug tracking-tight text-foreground md:text-2xl lg:text-[1.65rem] lg:leading-snug">
              {study.proof}
            </p>

            {study.stats && study.stats.length > 0 ? (
              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border/60 pt-6">
                {study.stats.map((stat) => (
                  <div key={stat.label} className="min-w-0">
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-numeric text-lg font-semibold tabular-nums leading-none md:text-xl">
                      <Num>{stat.value}</Num>
                    </dd>
                    <span className="mt-1.5 block text-[11px] leading-snug text-muted-foreground md:text-xs">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>

          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary">
            Read case study
            <ArrowRight
              weight="bold"
              className="size-3.5 transition-transform group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={study.href}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border bg-background p-5 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/40 sm:p-6",
        elevatedCardShadow,
        className,
      )}
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate font-primary text-base font-medium tracking-tight">
            {study.company}
          </p>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
            {study.category}
          </p>
        </div>
        <ArrowRight
          weight="bold"
          className="mt-1 size-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary"
        />
      </div>

      <div className="mt-auto">
        <p className="font-numeric text-4xl font-semibold tabular-nums leading-none tracking-tight text-primary sm:text-[2.75rem]">
          <Num>{study.heroValue}</Num>
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{study.heroLabel}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {study.proof}
        </p>
      </div>
    </Link>
  );
}
