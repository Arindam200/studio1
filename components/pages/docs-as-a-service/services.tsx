"use client";

import { Books, MagnifyingGlass, Path } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { staggerChildren, serviceItemVariants } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";
import {
  elevatedCardShadow,
  servicesCenterGlow,
  servicesSectionGlowBottom,
  servicesSectionGlowTop,
  serviceCardHoverGlow,
} from "@/lib/shadows";
import { cn } from "@/lib/utils";

const offerings = [
  {
    icon: MagnifyingGlass,
    badges: ["Onboarding", "API docs"],
    accent: "Docs",
    rest: "Audit",
    description:
      "Review onboarding, API usability, and documentation quality to surface friction before you write more pages.",
    features: [
      "Developer onboarding path review",
      "API and SDK docs usability check",
      "Coverage and findability gaps",
      "Prioritized findings report",
    ],
    hoverClass: "hover:-translate-y-4",
    offsetClass: "",
  },
  {
    icon: Books,
    badges: ["Quickstarts", "Reference"],
    accent: "Documentation",
    rest: "",
    description:
      "Ship quickstarts, how-tos, and API or SDK reference with real code, matched to your stack.",
    features: [
      "Quickstarts with working code",
      "Task-based how-tos",
      "API and SDK reference pages",
      "Concept and architecture guides",
    ],
    hoverClass: "hover:translate-y-4",
    offsetClass: "md:translate-y-16",
  },
  {
    icon: Path,
    badges: ["Flows", "Follow-up"],
    accent: "DX",
    rest: "Improvements",
    description:
      "Fix high-friction paths, examples, and error handling, then follow through until activation moves.",
    features: [
      "High-friction flow rewrites",
      "Clearer examples and error paths",
      "Docs IA and contribution habits",
      "Follow-up and activation review",
    ],
    hoverClass: "hover:-translate-y-4",
    offsetClass: "",
  },
] as const;

export default function Services() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerChildren}
      id="work"
      className="relative mb-28 px-4 pb-20 pt-4 md:pt-6"
    >
      <div className={servicesSectionGlowBottom} />
      <div className={servicesSectionGlowTop} />

      <motion.div
        variants={serviceItemVariants}
        className="z-[20] flex flex-col items-center justify-center gap-4"
      >
        <div className="text-center text-5xl font-normal max-sm:text-4xl">
          What We{" "}
          <span className="serif-accent bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text font-accent italic text-transparent">
            Offer
          </span>
        </div>
        <p className="mt-2 max-w-2xl text-center text-base max-sm:text-sm">
          Three connected workstreams for AI and DevTool products: audit the
          docs, write what is missing, then improve the developer path.
        </p>
      </motion.div>

      <div className="mx-auto flex max-w-7xl flex-col">
        <motion.div
          variants={serviceItemVariants}
          className="relative mt-20 flex w-full flex-col items-center justify-center gap-[2%] md:-space-x-16 md:flex-row md:pb-20"
        >
          {offerings.map((offering) => (
            <div
              key={offering.accent}
              className={cn(
                "group relative mb-8 flex min-h-[30rem] w-full max-w-[23rem] flex-col items-start justify-start overflow-hidden rounded-lg border-2 bg-background/80 p-8 backdrop-blur-md transition-all duration-700 dark:border md:mb-0",
                "motion-reduce:transition-none",
                elevatedCardShadow,
                offering.hoverClass,
                offering.offsetClass,
              )}
            >
              <div className="absolute left-[-2rem] top-[-23rem] z-[101] h-[40rem] w-[5rem] rotate-45 rounded-md bg-white/50 opacity-30 blur-[3em] backdrop-blur-md transition-all delay-100 duration-700 group-hover:left-[20rem] group-hover:top-[15rem] motion-reduce:transition-none" />
              <div className={serviceCardHoverGlow} />

              <div className="relative z-10 flex w-full flex-1 flex-col">
                <div className="flex w-full items-start justify-between">
                  <div className="flex size-16 items-center justify-center rounded-lg bg-accent p-3 dark:bg-accent/50">
                    <offering.icon className="size-10" weight="duotone" />
                  </div>
                </div>

                <div className="mt-auto flex flex-col gap-2 pt-8">
                  <div className="flex flex-wrap gap-2">
                    {offering.badges.map((badge) => (
                      <Badge
                        key={badge}
                        className="w-fit bg-accent text-foreground"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-left text-4xl font-light leading-tight">
                    <span className="bg-gradient-to-br from-white via-primary/80 to-white bg-clip-text font-extrabold text-transparent dark:from-white dark:via-primary/80 dark:to-white">
                      {offering.accent}
                    </span>
                    {offering.rest ? (
                      <>
                        <br />
                        {offering.rest}
                      </>
                    ) : null}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {offering.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-border/60 pt-4">
                    {offering.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 font-secondary text-sm text-foreground/85"
                      >
                        <span
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          <div className={servicesCenterGlow} />
        </motion.div>
      </div>
    </motion.section>
  );
}
