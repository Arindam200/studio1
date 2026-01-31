"use client";
import { motion } from "motion/react";
import { containerVariants, itemVariants } from "@/lib/animations";
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
      className="py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-center font-semibold lg:text-5xl text-4xl mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary">
              Process
            </span>
          </div>
          <p className="mx-auto text-foreground/80 dark:text-neutral-400 text-sm md:text-base">
            A streamlined workflow for creating high-quality video content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="bg-muted/50 border rounded-xl p-6 h-full hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <step.icon className="size-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
