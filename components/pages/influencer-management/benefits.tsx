"use client";
import { motion } from "motion/react";
import { containerVariants, itemVariants } from "@/lib/animations";
import {
  IconShield,
  IconTarget,
  IconEye,
  IconChartLine,
} from "@tabler/icons-react";

const benefits = [
  {
    title: "Authentic Reach",
    description:
      "Influencers provide an authentic voice that resonates with developers and builds trust in your brand.",
    icon: IconShield,
  },
  {
    title: "Targeted Audience",
    description:
      "We connect you with influencers who have a dedicated following of developers interested in your niche.",
    icon: IconTarget,
  },
  {
    title: "Increased Visibility",
    description:
      "Influencer collaborations can significantly increase your brand's visibility and reach within the developer community.",
    icon: IconEye,
  },
  {
    title: "Measurable Results",
    description:
      "We focus on delivering measurable results, from engagement and reach to conversions and brand sentiment.",
    icon: IconChartLine,
  },
];

export default function Benefits() {
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
            Why It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary">
              Works
            </span>
          </div>
          <p className="mx-auto text-foreground/80 dark:text-neutral-400 text-sm md:text-base">
            The power of developer influencer marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="bg-muted/50 border rounded-xl p-6 h-full hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-primary/10 rounded-lg p-4">
                    <benefit.icon className="size-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground text-center">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
