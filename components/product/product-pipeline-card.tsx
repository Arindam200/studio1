"use client";

import { Database } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { cardVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { elevatedCardShadow } from "@/lib/shadows";

const pipelineCardSurface = cn(
  "relative overflow-hidden rounded-xl border bg-background/80 p-5 backdrop-blur-md sm:p-6",
  elevatedCardShadow,
);

export default function ProductPipelineCard() {
  return (
    <motion.article variants={cardVariants} className={pipelineCardSurface}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.16),transparent_65%)]"
      />

      <div className="relative z-[1] flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex min-w-0 items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border bg-muted/50 text-primary">
            <Database className="size-6" weight="duotone" />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 font-secondary text-xs text-muted-foreground">
              <span>AI SaaS</span>
              <span aria-hidden>·</span>
              <span className="inline-flex items-center gap-1.5">
                <span aria-hidden className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-400" />
                </span>
                In progress
              </span>
            </div>

            <h2 className="mt-2 font-accent text-xl font-medium italic tracking-tight text-foreground sm:text-2xl">
              RAG-based SaaS app
            </h2>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
