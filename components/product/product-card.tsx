"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { createCardVariantsWithDelay } from "@/lib/animations";
import type { Product } from "@/constants/products";

const statusStyles: Record<
  Product["status"],
  { badge: "default" | "secondary" | "outline"; dot: string }
> = {
  launched: { badge: "default", dot: "bg-green-500" },
  live: { badge: "secondary", dot: "bg-blue-500" },
  upcoming: { badge: "outline", dot: "bg-amber-500" },
};

export default function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const style = statusStyles[product.status];

  return (
    <motion.div
      variants={createCardVariantsWithDelay(index)}
      className="group relative flex flex-col justify-between rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-6 sm:p-8 transition-colors hover:border-primary/40"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
          <Badge variant={style.badge} className="text-xs flex items-center gap-1.5">
            <span className={`size-2 rounded-full ${style.dot}`} />
            {product.statusLabel}
          </Badge>
        </div>

        <h3 className="text-2xl font-bold tracking-tight mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground font-medium mb-4">
          {product.tagline}
        </p>
        <p className="text-foreground/80 leading-relaxed mb-6">
          {product.longDescription}
        </p>

        <ul className="space-y-4 mb-8">
          {product.features.map((f) => (
            <li key={f.label} className="flex gap-3 text-sm">
              <f.icon
                className="size-5 shrink-0 text-primary mt-0.5"
                weight="duotone"
              />
              <div>
                <span className="font-medium">{f.label}</span>
                <p className="text-muted-foreground mt-0.5">{f.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {product.status === "upcoming" ? (
        <p className="text-sm text-muted-foreground font-medium">
          Currently in development. Stay tuned.
        </p>
      ) : (
        <Button asChild className="w-fit">
          <a href={product.url} target="_blank" rel="noopener noreferrer">
            Visit {product.name}
            <ArrowUpRight className="size-4" weight="bold" />
          </a>
        </Button>
      )}
    </motion.div>
  );
}
