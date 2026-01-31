"use client";
import { motion } from "motion/react";
import { containerVariants, itemVariants } from "@/lib/animations";
import {
  IconVideo,
  IconShare,
  IconArticle,
  IconBrandGithub,
} from "@tabler/icons-react";

const steps = [
  {
    name: "Week 1: Video & Social Launch",
    description:
      "Record and publish a YouTube video, launch a social media campaign across X, LinkedIn, and Reddit.",
    icon: IconVideo,
    details: [
      "Professional video recording",
      "SEO-optimized title and tags",
      "Custom thumbnail design",
      "Social media launch",
    ],
  },
  {
    name: "Week 2: Blog Creation",
    description:
      "Write a detailed blog post and distribute across Dev.to, Medium, Hashnode, and other platforms.",
    icon: IconArticle,
    details: [
      "Comprehensive blog writing",
      "Images and GIFs creation",
      "Code examples integration",
      "Multi-platform distribution",
    ],
  },
  {
    name: "Week 3: Micro-Content & GitHub",
    description:
      "Create Twitter micro-content, add the project to the GitHub README spotlight, and integrate into the repository.",
    icon: IconBrandGithub,
    details: [
      "Twitter thread creation",
      "GitHub README integration",
      "Sponsor Spotlight feature",
      "Repository optimization",
    ],
  },
  {
    name: "Week 4: Amplification",
    description:
      "Follow-up posts, engagement optimization, performance tracking, and community building.",
    icon: IconShare,
    details: [
      "Follow-up content posts",
      "Engagement optimization",
      "Performance tracking",
      "Community building",
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
            Campaign{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary">
              Timeline
            </span>
          </div>
          <p className="mx-auto text-foreground/80 dark:text-neutral-400 text-sm md:text-base">
            4 weeks from concept to full distribution
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
                    Week {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.name}</h3>
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
