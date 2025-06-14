"use client";

import { Timeline } from "@/components/case-studies/timeline";
import caseStudy1 from "@/components/case-studies/case-study-1/page.mdx";
import caseStudy2 from "@/components/case-studies/case-study-2/page.mdx";
import caseStudy3 from "@/components/case-studies/case-study-3/page.mdx";
import KitOpsBanner from "@/public/assets/kitops_casestudy.png";
import NebiusBanner from "@/public/assets/nebius_casestudy.png";
import { motion } from "motion/react";

const timelineItems = [
  {
    title:
      "Scaling Developer Relations: Content Strategy & Market Growth",
    date: "2024-01-01",
    description:
      "We helped them grow their developer community by creating a series of open-source demos and tutorials for their platform.",
    image: NebiusBanner,
    mdxContent: caseStudy1,
  },
  {
    title: "Developer Community Growth and Engagement",
    date: "2024-01-01",
    description: "Developed strategic open-source demos and tutorials for KitOps platform, leading to substantial developer growth and community engagement.",
    image: KitOpsBanner,
    mdxContent: caseStudy2,
  },
];

export default function CaseStudies() {
  return (
    <div className="mt-20 relative py-12">
      <div className="top-[-10rem] md:top-[-8rem] z-[-1] left-[-80%] md:left-[-20%] fixed bg-gradient-to-t opacity-50 dark:opacity-30 dark:lg:opacity-80 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out  h-[50rem] md:h-[60rem] w-[10rem] -rotate-[60deg]"></div>
      <div className="top-[-10rem] md:top-[-8rem] z-[-1] right-[-80%] md:right-[-20%] fixed bg-gradient-to-t opacity-50 dark:opacity-30 dark:lg:opacity-80 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out  h-[50rem] md:h-[60rem] w-[10rem] rotate-[40deg]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 md:text-5xl">
            Case{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary ">
              Studies
            </span>{" "}
          </h2>
          <p className="text-muted-foreground ">
            We empower tech brands to build thriving <br /> developer
            communities through DevRel and high-impact content.
          </p>
        </motion.div>

        <Timeline items={timelineItems} />
      </div>
    </div>
  );
}
