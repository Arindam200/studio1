"use client";
import {
  serviceProcessInnerClassName,
  serviceProcessOuterClassName,
} from "@/components/pages/shared/service-hero-layout";
import { motion } from "motion/react";
import { containerVariants } from "@/lib/animations";
import { ProcessScroller } from "@/components/sections/process-scroller";
import {
  IconSearch,
  IconAnalyze,
  IconBulb,
  IconRocket,
} from "@tabler/icons-react";

const steps = [
  {
    name: "Discovery",
    description:
      "Initial assessment of current state with stakeholder interviews and goal alignment.",
    icon: IconSearch,
    details: [
      "Initial state assessment",
      "Stakeholder interviews",
      "Process documentation review",
      "Goal alignment",
    ],
  },
  {
    name: "Analysis",
    description:
      "Deep dive into systems and processes with user journey mapping and gap analysis.",
    icon: IconAnalyze,
    details: [
      "Systems deep dive",
      "User journey mapping",
      "Pain point identification",
      "Gap analysis",
    ],
  },
  {
    name: "Recommendations",
    description:
      "Detailed findings report with actionable improvement plan and priority recommendations.",
    icon: IconBulb,
    details: [
      "Detailed findings report",
      "Actionable improvement plan",
      "Priority recommendations",
      "Implementation roadmap",
    ],
  },
  {
    name: "Implementation Support",
    description:
      "Guidance on implementing changes with best practices consultation and progress monitoring.",
    icon: IconRocket,
    details: [
      "Change implementation guidance",
      "Best practices consultation",
      "Progress monitoring",
      "Follow-up assessments",
    ],
  },
];

export default function Process() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={`${serviceProcessOuterClassName} py-20`}
    >
      <div className={serviceProcessInnerClassName}>
        <div className="text-center mb-16">
          <div className="text-center font-semibold lg:text-5xl text-4xl mb-4">
            Our Audit{" "}
            <span className="serif-accent font-accent italic text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary">
              Process
            </span>
          </div>
          <p className="mx-auto text-foreground/80 dark:text-neutral-400 text-sm md:text-base">
            A structured approach that consistently delivers results
          </p>
        </div>

        <ProcessScroller steps={steps} />
      </div>
    </motion.section>
  );
}
