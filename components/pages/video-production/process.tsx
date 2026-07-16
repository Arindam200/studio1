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
  IconVideo,
  IconEdit,
  IconShare,
} from "@tabler/icons-react";

const steps = [
  {
    name: "Strategic Planning",
    description:
      "We analyze your technical requirements, research your target audience, and develop a content strategy with scripts and storyboards.",
    icon: IconSearch,
    details: [
      "Technical requirement analysis",
      "Target audience research",
      "Script and storyboard creation",
      "Visual approach planning",
    ],
  },
  {
    name: "Professional Production",
    description:
      "High-quality video recording with screen capture optimization, professional voice-over, and technical demonstrations.",
    icon: IconVideo,
    details: [
      "High-quality video recording",
      "Screen capture optimization",
      "Professional voice-over",
      "Code walkthrough recordings",
    ],
  },
  {
    name: "Expert Post-Production",
    description:
      "Advanced editing, technical accuracy review, subtitle generation, and branded elements integration.",
    icon: IconEdit,
    details: [
      "Advanced editing and effects",
      "Technical accuracy review",
      "Subtitle generation",
      "Branded elements integration",
    ],
  },
  {
    name: "Strategic Distribution",
    description:
      "Multi-platform optimization, SEO metadata preparation, and performance tracking setup.",
    icon: IconShare,
    details: [
      "Multi-platform optimization",
      "SEO metadata preparation",
      "Distribution strategy",
      "Analytics setup",
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
            Our{" "}
            <span className="font-accent italic text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary">
              Process
            </span>
          </div>
          <p className="mx-auto text-foreground/80 dark:text-neutral-400 text-sm md:text-base">
            A streamlined workflow for creating high-quality video content
          </p>
        </div>

        <ProcessScroller steps={steps} />
      </div>
    </motion.section>
  );
}
