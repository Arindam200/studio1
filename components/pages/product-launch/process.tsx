"use client";
import { motion } from "motion/react";
import { containerVariants, itemVariants } from "@/lib/animations";
import {
  IconMap,
  IconRocket,
  IconTrendingUp,
} from "@tabler/icons-react";

const steps = [
  {
    name: "Pre-Launch (2-3 weeks)",
    description:
      "Define positioning, prepare assets, and coordinate with creators for early support.",
    icon: IconMap,
    details: [
      "Define positioning and messaging",
      "Prepare screenshots, demo video, badges",
      "Outreach to creators and champions",
      "Schedule dry-run and posting cadence",
    ],
  },
  {
    name: "Launch Day",
    description:
      "Coordinate simultaneous posts, live monitoring, and amplification via creators and founders.",
    icon: IconRocket,
    details: [
      "Coordinated posts across platforms",
      "Live monitoring and engagement",
      "Rapid response playbook",
      "Ready-to-post snippets for amplification",
    ],
  },
  {
    name: "Post-Launch (1-2 weeks)",
    description:
      "Publish follow-ups, nurture new users, and measure impact with iteration.",
    icon: IconTrendingUp,
    details: [
      "Deep dives and tutorials",
      "User nurturing and conversion",
      "Impact measurement",
      "Strategy iteration",
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
            Launch{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary">
              Process
            </span>
          </div>
          <p className="mx-auto text-foreground/80 dark:text-neutral-400 text-sm md:text-base">
            A proven approach to maximize your launch success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    Phase {index + 1}
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

        <div className="mt-16 bg-muted/30 border rounded-xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold mb-2">Case Study: Pieces Copilot+</h3>
            <p className="text-muted-foreground">
              Using Studio1's launch framing, creator amplification, and developer-first content,
              Pieces Copilot+ earned Product Hunt "Product of the Day."
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-background border rounded-lg px-6 py-4 text-center">
              <div className="text-2xl font-bold text-primary">#1</div>
              <div className="text-sm text-muted-foreground">Product of the Day</div>
            </div>
            <div className="bg-background border rounded-lg px-6 py-4 text-center">
              <div className="text-2xl font-bold text-primary">Credible</div>
              <div className="text-sm text-muted-foreground">Creator Lift</div>
            </div>
            <div className="bg-background border rounded-lg px-6 py-4 text-center">
              <div className="text-2xl font-bold text-primary">Meaningful</div>
              <div className="text-sm text-muted-foreground">Developer Signups</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
