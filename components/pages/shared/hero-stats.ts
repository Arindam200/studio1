export type HeroStatItem = {
  value: string;
  label: string;
};

export const heroStatsStripClassName =
  "mt-28 md:mt-32 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border/80 text-center max-w-7xl mx-auto w-full border-y border-border/80 py-5 md:py-6 lg:py-7";

export const heroStatItemClassName =
  "flex items-baseline justify-center gap-1 whitespace-nowrap px-3 py-2 md:px-4 lg:px-5 text-sm md:text-base lg:text-lg";

export const heroStatValueClassName =
  "font-semibold text-foreground tabular-nums";

export const heroStatValueHighlightClassName =
  "font-semibold text-primary tabular-nums";

export const heroStatLabelClassName = "text-muted-foreground";
