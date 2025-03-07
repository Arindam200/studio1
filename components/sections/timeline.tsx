"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { TimelineItem } from "./timeline-item";
import { cn } from "@/lib/utils";
import { Data } from "@/data";

const devrelProcess = Data.DevRelAsServiceProcess;
const blogsProcess = Data.BlogAsServiceProcess;
const timelineData = [
  {
    id: 1,
    title: "Project Inception",
    description:
      "Initial concept and planning phase began with stakeholder meetings.",
    date: "Jan 2024",
  },
  {
    id: 2,
    title: "Design Phase",
    description:
      "Created wireframes and high-fidelity prototypes for the platform.",
    date: "Feb 2024",
  },
  {
    id: 3,
    title: "Development Kickoff",
    description:
      "Started the development process with core feature implementation.",
    date: "Mar 2024",
  },
  {
    id: 4,
    title: "Beta Testing",
    description: "Launched beta version for initial user feedback and testing.",
    date: "Apr 2024",
  },
  // deliberatley added the last element to make the user see every item upto previous element without any miss
  {
    id: 5,
    title: "",
    description: "",
    date: "",
  },
];

export const Timeline: React.FC<{ type: "Blog" | "Devrel" }> = ({ type }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Calculate the total width needed for all items
  const totalWidth = timelineData.length * 25 + 20; // 25% per item + 20% padding
  const translateX = useTransform(
    scrollYProgress,
    [0.2, 0.8], // Adjust scroll range to complete before reaching the end
    ["0%", `${-(totalWidth - 100)}%`] // Ensure full width is scrolled
  );

  const finalData = type === "Blog" ? blogsProcess : devrelProcess;

  return (
    <div
      ref={containerRef}
      className="relative h-[300vh]" // Increased height for smoother scrolling
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div
          ref={timelineRef}
          className="absolute w-full h-full"
          style={{
            x: translateX,
            width: `${totalWidth}%`, // Dynamic width based on items
          }}
        >
          <div className="relative h-full flex items-center">
            {/* Main timeline line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5">
              {/* Background line */}
              <div className="absolute inset-0" />

              {/* Animated line */}
              <motion.div
                className="absolute inset-0 bg-primary origin-left w-[200vw]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            {/* Timeline items */}
            {finalData.map((item, index) => {
              const position = index % 2 === 0 ? "top" : "bottom";
              return (
                <motion.div
                  key={index}
                  className={cn(
                    `absolute`,
                    index >= 4 ? "invisible" : "visible"
                  )}
                  style={{
                    left: `${index * (100 / timelineData.length) + 100 / timelineData.length / 2}%`,
                    transform: "translateX(-50%)",
                  }}
                  initial={{ opacity: 0, y: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20% 0px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div
                    className={`absolute group w-[30rem] bg-muted-foreground/5 overflow-hidden h-[20rem] ${
                      position === "top" ? "-translate-y-full -mt-8" : "mt-8"
                    }`}
                  >
                    <TimelineItem item={item} index={index} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
