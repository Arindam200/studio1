"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { CaseStudyResult, type CaseStudyResultData } from "@/components/case-studies/case-study-result";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import {
  containerVariants,
  headerVariants,
  serviceItemVariants,
  staggerChildren,
} from "@/lib/animations";
import {
  elevatedCardShadow,
  glassCardEdgeHighlight,
  serviceCardHoverGlow,
} from "@/lib/shadows";
import { cn } from "@/lib/utils";

type ServiceDetailItem = {
  title: string;
  description: string;
  points?: string[];
};

type ServiceDetailSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: ServiceDetailItem[];
  columns?: "two" | "three";
};

const cardSurface = cn(
  "group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-border/80 dark:border",
  "bg-background/80 backdrop-blur-md",
  "transition-[border-color,box-shadow,transform] duration-500 ease-out",
  "hover:-translate-y-1 hover:border-primary/35 dark:hover:border-white/15",
  "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
  elevatedCardShadow,
);

function ServiceDetailCardEffects({ active }: { active: boolean }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (active) {
      setMounted(true);
      return;
    }

    const timeout = window.setTimeout(() => setMounted(false), 450);
    return () => window.clearTimeout(timeout);
  }, [active]);

  return (
    <>
      <div aria-hidden className={serviceCardHoverGlow} />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-2xl opacity-0 transition-opacity duration-500 ease-out motion-reduce:transition-none",
          active && "opacity-100",
        )}
      >
        {mounted ? (
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-transparent"
            colors={[
              [234, 88, 12],
              [249, 115, 22],
            ]}
            dotSize={2}
            showGradient={false}
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/35" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-transparent" />
      </div>
      <div aria-hidden className={glassCardEdgeHighlight} />
    </>
  );
}

function ServiceDetailCard({
  item,
  index,
}: {
  item: ServiceDetailItem;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      className={cardSurface}
      variants={serviceItemVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <ServiceDetailCardEffects active={hovered} />

      <div className="relative z-[1] flex h-full flex-col p-7">
        <div className="flex flex-1 flex-col">
          <span
            className={cn(
              "font-numeric text-5xl leading-none font-semibold tracking-tight text-primary tabular-nums",
              "origin-left transition-transform duration-500 ease-out group-hover:scale-[1.04]",
              "motion-reduce:transition-none motion-reduce:group-hover:scale-100",
            )}
          >
            {number}
          </span>

          <h3 className="mt-5 font-inter text-[17px] font-semibold leading-snug tracking-tight text-foreground md:text-lg">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </div>

        {item.points?.length ? (
          <div className="mt-auto pt-6">
            <ul className="space-y-2 border-t border-border/60 pt-5 dark:border-white/[0.06]">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-xs leading-snug text-muted-foreground"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

export function ServiceDetailSection({
  eyebrow,
  title,
  description,
  items,
  columns = "three",
}: ServiceDetailSectionProps) {
  return (
    <motion.section
      id="work"
      className="relative scroll-mt-28 px-4 py-20 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          variants={headerVariants}
        >
          <p className="font-secondary text-sm font-medium tracking-wide text-primary">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-inter text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </motion.div>

        <motion.div
          className={cn(
            "grid items-stretch gap-6",
            columns === "two" ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3",
          )}
          variants={staggerChildren}
        >
          {items.map((item, index) => (
            <ServiceDetailCard key={item.title} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

type ServiceProofSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  study: CaseStudyResultData;
};

export function ServiceProofSection({
  eyebrow = "Proof",
  title,
  description,
  study,
}: ServiceProofSectionProps) {
  return (
    <section className="relative px-4 pt-2 pb-20 md:pt-4 md:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="font-secondary text-sm font-medium tracking-wide text-primary">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-inter text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>

        <CaseStudyResult study={study} variant="featured" />
      </div>
    </section>
  );
}
