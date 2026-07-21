"use client";

import { motion } from "motion/react";
import {
  containerVariants,
  headerVariants,
  staggerChildren,
  serviceItemVariants,
} from "@/lib/animations";
import {
  glassCardEdgeHighlight,
  glassCardFrame,
  glassCardHoverWash,
} from "@/lib/shadows";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export interface Deliverable {
  title: string;
  description: string;
  icon: ReactNode;
}

interface WhatsIncludedProps {
  deliverables: Deliverable[];
  heading?: string;
  highlightWord?: string;
  subtitle?: string;
}

export default function WhatsIncluded({
  deliverables,
  heading = "What's Included",
  highlightWord = "Included",
  subtitle,
}: WhatsIncludedProps) {
  const headingParts = heading.split(highlightWord);

  return (
    <motion.section
      className="relative px-4 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col items-center gap-3 justify-center mb-14"
        variants={headerVariants}
      >
        <h2 className="font-primary text-4xl md:text-5xl font-normal text-center tracking-tight">
          {headingParts[0]}
          <span className="serif-accent font-accent italic font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary">
            {highlightWord}
          </span>
          {headingParts[1] || ""}
        </h2>
        {subtitle && (
          <p className="text-center text-base max-sm:text-sm mt-2 max-w-2xl text-muted-foreground">
            {subtitle}
          </p>
        )}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto"
        variants={staggerChildren}
      >
        {deliverables.map((item) => (
          <motion.article
            key={item.title}
            className={cn(
              "group relative flex h-full flex-col rounded-xl",
              "transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out",
              "hover:-translate-y-1",
              "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
              glassCardFrame,
            )}
            variants={serviceItemVariants}
          >
            <div aria-hidden className={glassCardEdgeHighlight} />
            <div aria-hidden className={glassCardHoverWash} />

            <div className="relative z-[1] flex h-full flex-col p-6">
              <div className="mb-4 flex size-10 items-center justify-center text-primary transition-colors duration-300 group-hover:text-primary1">
                {item.icon}
              </div>
              <h3 className="font-primary text-sm font-medium mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
