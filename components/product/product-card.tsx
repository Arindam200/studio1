"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
export type ProductCardData = {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  url: string;
  category: string;
  statusLabel: string;
};
import { motion } from "motion/react";
import { cardVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";

const productCardSurface = cn(
  "relative overflow-hidden rounded-xl border bg-background p-6 sm:p-8 shadow-xl transition-colors duration-300",
);

const productCardGlowRight =
  "bottom-[-10rem] md:bottom-[-18rem] rotate-[65deg] right-[-14%] opacity-20 dark:opacity-40 z-[-1] absolute bg-gradient-to-t from-primary/40 to-primary/20 blur-[4em] rounded-xl transition-all translate-x-[-50%] w-[10rem] md:w-[10rem] h-[10rem] md:h-[30rem]";

const productCardGlowLeft =
  "bottom-[-10rem] md:bottom-[-17rem] rotate-[-65deg] left-[-8%] opacity-20 dark:opacity-40 z-[-1] absolute bg-gradient-to-t from-primary/40 to-primary/20 blur-[4em] rounded-xl transition-all translate-x-[-50%] w-[10rem] md:w-[10rem] h-[10rem] md:h-[30rem]";

function isLiveStatus(statusLabel: string) {
  const normalized = statusLabel.trim().toLowerCase();
  return normalized === "live" || normalized === "launched";
}

export default function ProductCard({ product }: { product: ProductCardData }) {
  return (
    <motion.article
      variants={cardVariants}
      className={productCardSurface}
    >
      <div aria-hidden className={productCardGlowRight} />
      <div aria-hidden className={productCardGlowLeft} />

      <div className="flex items-center gap-2 font-secondary text-xs text-muted-foreground">
        <span>{product.category}</span>
        <span aria-hidden>·</span>
        <span className="inline-flex items-center gap-1.5">
          {isLiveStatus(product.statusLabel) ? (
            <span aria-hidden className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
          ) : null}
          {product.statusLabel}
        </span>
      </div>

      <h2 className="mt-3 font-accent text-2xl font-medium italic tracking-tight text-foreground sm:text-3xl">
        {product.name}
      </h2>

      {product.tagline ? (
        <p className="mt-1 font-secondary text-lg text-primary/75 sm:text-xl">
          {product.tagline}
        </p>
      ) : null}

      <p className="mt-4 max-w-2xl font-secondary text-base leading-relaxed text-muted-foreground">
        {product.description}
      </p>

      {product.highlights.length > 0 ? (
        <ul className="mt-4 max-w-2xl space-y-1.5 font-secondary text-sm leading-relaxed text-muted-foreground/90">
          {product.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2.5">
              <span
                aria-hidden
                className="mt-[0.45em] size-1 shrink-0 rounded-full bg-primary/50"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-6">
        <Button variant="gradient" size="cta" asChild>
          <a href={product.url} target="_blank" rel="noopener noreferrer">
            Visit {product.name}
            <ArrowUpRight className="size-4" weight="bold" />
          </a>
        </Button>
      </div>
    </motion.article>
  );
}
