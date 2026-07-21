"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { Button } from "../ui/button";
import { SectionEyebrow } from "./section-eyebrow";
import {
  CaseStudyResult,
  type CaseStudyResultData,
} from "@/components/case-studies/case-study-result";
import {
  containerVariants,
  fadeInUp,
  headerVariants,
  staggerChildren,
} from "@/lib/animations";

const featuredStudy: CaseStudyResultData = {
  company: "Memori",
  category: "Open-source Growth",
  href: "/case-studies/memori",
  heroValue: "12,000+",
  heroLabel: "GitHub stars from launch",
  proof:
    "Community-led distribution, demo content, and feedback loops turned an early OSS launch into sustained developer traction, with zero paid acquisition.",
  stats: [
    { value: "100+", label: "developer comments" },
    { value: "150+", label: "meetup attendees" },
    { value: "$0", label: "paid acquisition" },
  ],
};

const secondaryStudies: CaseStudyResultData[] = [
  {
    company: "ScrapeGraph AI",
    category: "Multi-channel Growth",
    href: "/case-studies/scrapegraph",
    heroValue: "265K+",
    heroLabel: "total developer reach",
    proof:
      "Content, Reddit, social, and four hands-on AI agent projects drove awareness and real product usage.",
  },
  {
    company: "LiteLLM",
    category: "Docs Revamp & Onboarding",
    href: "/case-studies/litellm",
    heroValue: "100+",
    heroLabel: "LLM providers unified",
    proof:
      "Docs architecture, SDK/Gateway quickstarts, and community-driven DX feedback cut onboarding friction, endorsed publicly by the CEO.",
  },
];

export default function CaseStudyCards() {
  return (
    <motion.section
      id="results"
      className="relative px-4 pt-10 md:pt-12 pb-24 md:pb-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div
        className="mb-14 flex flex-col items-center justify-center gap-4"
        variants={headerVariants}
      >
        <SectionEyebrow>Case Studies</SectionEyebrow>
        <h2 className="max-sm:text-4xl text-center font-inter text-5xl font-normal tracking-tight">
          Campaigns that{" "}
          <span className="serif-accent bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text font-accent font-bold italic text-transparent">
            landed
          </span>
        </h2>
        <p className="mt-2 max-w-2xl text-center text-base text-muted-foreground max-sm:text-sm">
          Open-source launches, multi-channel growth, and docs rebuilds for AI
          and DevTool teams.
        </p>
      </motion.div>

      <motion.div
        className="mx-auto flex max-w-6xl flex-col gap-5 md:gap-6"
        variants={staggerChildren}
      >
        <motion.div variants={fadeInUp}>
          <CaseStudyResult study={featuredStudy} variant="featured" />
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {secondaryStudies.map((study) => (
            <motion.div key={study.company} variants={fadeInUp}>
              <CaseStudyResult study={study} variant="compact" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center pt-4 md:pt-6"
          variants={fadeInUp}
        >
          <Button variant="outline-subtle" size="cta" asChild>
            <Link href="/case-studies">
              View all case studies
              <ArrowRight weight="bold" className="size-4" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
