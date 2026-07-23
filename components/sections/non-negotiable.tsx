"use client";

import { motion } from "motion/react";
import {
  containerVariants,
  fadeInUp,
  headerVariants,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

export interface NonNegotiableProps {
  eyebrow?: string;
  headline: string;
  body: string;
  className?: string;
}

export default function NonNegotiable({
  eyebrow = "Our Non-Negotiable",
  headline,
  body,
  className,
}: NonNegotiableProps) {
  return (
    <motion.section
      className={cn(
        "relative w-full px-4 py-24 md:py-32",
        className,
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
      aria-labelledby="non-negotiable-heading"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 text-center md:gap-8">
        <motion.div
          className="flex flex-col items-center gap-4 md:gap-5"
          variants={headerVariants}
        >
          <p className="font-secondary text-xs font-medium tracking-[0.18em] text-primary uppercase sm:text-sm">
            {eyebrow}
          </p>
          <h2
            id="non-negotiable-heading"
            className="max-w-4xl text-balance font-inter text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl md:text-4xl md:leading-[1.3]"
          >
            {headline}
          </h2>
        </motion.div>

        <motion.p
          className="max-w-2xl text-pretty font-secondary text-base leading-relaxed text-muted-foreground md:text-lg"
          variants={fadeInUp}
        >
          {body}
        </motion.p>
      </div>
    </motion.section>
  );
}
