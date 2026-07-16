"use client";

import { cn } from "@/lib/utils";
import { Num } from "@/components/ui/num";
import {
  heroStatItemClassName,
  heroStatLabelClassName,
  heroStatsStripClassName,
  heroStatValueClassName,
  heroStatValueHighlightClassName,
  type HeroStatItem,
} from "@/components/pages/shared/hero-stats";

const NUMERIC_VALUE = /^(\$?\d[\d,./]*\+?%?|#\d+|(?:\d[\d,./]*-)?\d+[KMB]?\+?)$/i;

type HeroStatsStripProps = {
  stats: HeroStatItem[];
  className?: string;
  highlightValues?: boolean;
};

function HeroStatValue({
  value,
  highlight,
}: {
  value: string;
  highlight?: boolean;
}) {
  const valueClassName = highlight
    ? heroStatValueHighlightClassName
    : heroStatValueClassName;

  if (NUMERIC_VALUE.test(value)) {
    return <Num className={valueClassName}>{value}</Num>;
  }

  return <span className={valueClassName}>{value}</span>;
}

export function HeroStatsStrip({
  stats,
  className,
  highlightValues = false,
}: HeroStatsStripProps) {
  return (
    <div className={cn(heroStatsStripClassName, className)} role="list">
      {stats.map((stat) => (
        <span
          key={`${stat.value}-${stat.label}`}
          role="listitem"
          className={heroStatItemClassName}
        >
          <HeroStatValue value={stat.value} highlight={highlightValues} />
          <span className={heroStatLabelClassName}>{stat.label}</span>
        </span>
      ))}
    </div>
  );
}
