export type HeroStatItem = {
  value: string;
  label: string;
};

export const heroStatsStripClassName =
  "mt-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border/80 text-center max-w-7xl mx-auto w-full border-y border-border/80 py-5 md:py-6 lg:py-7";

export const heroStatItemClassName =
  "flex items-baseline justify-center gap-1.5 whitespace-nowrap px-3 py-2 md:px-4 lg:px-5";

export const heroStatValueClassName =
  "text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-foreground tabular-nums";

export const heroStatValueHighlightClassName =
  "text-xl md:text-2xl lg:text-3xl font-bold tracking-tight tabular-nums bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text text-transparent";

export const heroStatLabelClassName =
  "text-sm md:text-base text-muted-foreground";
