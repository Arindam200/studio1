"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import ProductMedia from "@/components/product/product-media";
import type { ProductMedia as ProductMediaType } from "@/constants/products";
import { motion } from "motion/react";
import { cardVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";
import {
  cornerGlowLeft,
  cornerGlowRight,
  elevatedCardShadow,
} from "@/lib/shadows";

export type ProductCardData = {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  url: string;
  category: string;
  statusLabel: string;
  media: ProductMediaType;
};

const productCardSurface = cn(
  "relative overflow-hidden rounded-xl border bg-background p-4 sm:p-6 lg:p-8 transition-colors duration-300",
  elevatedCardShadow,
);

function isLiveStatus(statusLabel: string) {
  const normalized = statusLabel.trim().toLowerCase();
  return normalized === "live" || normalized === "launched";
}

export default function ProductCard({
  product,
  reverse = false,
}: {
  product: ProductCardData;
  reverse?: boolean;
}) {
  return (
    <motion.article variants={cardVariants} className={productCardSurface}>
      <div aria-hidden className={cornerGlowRight} />
      <div aria-hidden className={cornerGlowLeft} />

      <div
        className={cn(
          "grid min-w-0 gap-6 lg:grid-cols-2 lg:items-center lg:gap-10 xl:gap-12",
        )}
      >
        <ProductMedia
          media={product.media}
          className={cn(
            "order-1 w-full",
            reverse ? "lg:order-2" : "lg:order-1",
          )}
        />

        <div
          className={cn(
            "order-2 flex min-w-0 flex-col",
            reverse ? "lg:order-1" : "lg:order-2",
          )}
        >
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

          <h2 className="mt-2 font-accent text-xl font-medium italic tracking-tight text-foreground sm:mt-3 sm:text-2xl lg:text-3xl">
            {product.name}
          </h2>

          {product.tagline ? (
            <p className="mt-1 font-secondary text-base leading-snug text-primary/75 sm:text-lg lg:text-xl">
              {product.tagline}
            </p>
          ) : null}

          <p className="mt-3 font-secondary text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
            {product.description}
          </p>

          {product.highlights.length > 0 ? (
            <ul className="mt-3 space-y-1 font-secondary text-sm leading-relaxed text-muted-foreground/90 sm:mt-4 sm:space-y-1.5">
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

          <div className="mt-5 sm:mt-6">
            <Button variant="gradient" size="cta" asChild>
              <a href={product.url} target="_blank" rel="noopener noreferrer">
                Visit {product.name}
                <ArrowUpRight className="size-4" weight="bold" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
