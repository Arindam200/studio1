"use client";

import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import {
  containerVariants,
  headerVariants,
  staggerChildren,
  serviceItemVariants,
} from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Compass, Rocket, Target, type Icon } from "@phosphor-icons/react";

interface Stage {
  number: string;
  title: string;
  description: string;
  icon: Icon;
}

const stages: Stage[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We map your developer audience, research high-intent topics, and build a content strategy aligned with your product and growth goals. Every engagement starts with a deep dive into your ICP, competitors, and existing content landscape.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Engage",
    description:
      "Our engineers and writers create tutorials, guides, and demos that developers trust. Every piece is technically validated, SEO-optimized, and built around real code examples and practical workflows your audience cares about.",
    icon: Target,
  },
  {
    number: "03",
    title: "Adopt",
    description:
      "We distribute across Reddit, Dev.to, Hacker News, LinkedIn, and developer communities. Then we measure what moves the needle: organic traffic, developer signups, community engagement, and product adoption. Iterate and compound.",
    icon: Rocket,
  },
];

const journeyCardFrame = cn(
  "overflow-visible",
  "border border-border/50 dark:border-white/[0.08]",
  "shadow-elevated-card dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]",
  "shadow-feature-card-hover dark:hover:shadow-xl",
  "ring-1 ring-primary/10 dark:ring-white/[0.04]",
  "text-foreground",
  "rounded-xl",
);

const journeyCardBackdrop = cn(
  "pointer-events-none absolute inset-0 overflow-hidden rounded-xl",
  "bg-gradient-to-br from-background/95 via-background/90 to-primary/[0.06]",
  "dark:from-white/[0.04] dark:to-white/[0.01]",
  "backdrop-blur-xl",
);

export default function DeveloperJourney() {
  return (
    <motion.section
      className="relative px-4 py-24 md:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <motion.div
        className="mb-14 flex flex-col items-center justify-center gap-4"
        variants={headerVariants}
      >
        <Badge className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary1 text-sm font-medium">
          <Rocket weight="fill" className="size-4" /> How It Works
        </Badge>
        <h2 className="max-sm:text-4xl text-center font-primary text-5xl font-normal tracking-tight">
          How Developers{" "}
          <span className="bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text font-accent font-bold italic text-transparent">
            Find and Adopt
          </span>{" "}
          Your Product
        </h2>
        <p className="mt-2 max-w-2xl text-center text-base text-muted-foreground max-sm:text-sm">
          Developers research before they evaluate, and evaluate before they
          adopt. Your content has to be present at every stage.
        </p>
      </motion.div>

      <motion.div
        className="relative mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-5"
        variants={staggerChildren}
      >
        {stages.map((stage) => {
          const StageIcon = stage.icon;

          return (
            <motion.article
              key={stage.number}
              className={cn(
                "group relative flex h-full flex-col transition-[transform,box-shadow] duration-300 hover:-translate-y-1",
                journeyCardFrame,
              )}
              variants={serviceItemVariants}
            >
              <div aria-hidden className={journeyCardBackdrop} />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl bg-grid-foreground/[0.04] dark:bg-grid-foreground/[0.03] [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]"
              />

              <div className="relative z-[1] flex h-full flex-col overflow-visible p-7">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-secondary text-[0.7rem] font-medium tracking-[0.14em] text-muted-foreground uppercase">
                      Stage
                    </span>
                    <span className="font-numeric text-5xl leading-none font-semibold tracking-tight text-primary tabular-nums">
                      {stage.number}
                    </span>
                  </div>
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/15">
                    <StageIcon weight="duotone" className="size-6" />
                  </div>
                </div>

                <h3 className="mb-4 overflow-visible pb-1.5 font-primary text-2xl font-medium leading-normal tracking-tight text-foreground">
                  {stage.title}
                </h3>
                <p className="mt-auto text-sm leading-relaxed text-muted-foreground">
                  {stage.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
