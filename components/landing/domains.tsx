"use client";

import { motion } from "motion/react";
import { containerVariants, fadeInUp } from "@/lib/animations";

const domains = [
  "AI & ML",
  "DevOps & CI/CD",
  "Cloud Platforms",
  "Web Development",
  "API Integration",
  "Developer Tools",
  "Security",
  "Databases",
  "System Design",
  "Open Source",
  "Frontend Frameworks",
  "Backend Architecture",
];

export default function TechnicalDomains() {
  return (
    <motion.section
      className="relative px-4 py-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={fadeInUp}
      >
        <p className="text-sm font-medium text-muted-foreground mb-5 uppercase tracking-wider">
          Technical Domains We Cover
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {domains.map((domain) => (
            <span
              key={domain}
              className="rounded-full border border-border/60 bg-accent/40 dark:bg-accent/15 px-4 py-1.5 text-sm text-foreground/80 backdrop-blur-sm"
            >
              {domain}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
