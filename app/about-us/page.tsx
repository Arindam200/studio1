"use client";
import { AboutRipple } from "@/components/magicui/about-ripple";
import Logo from "@/components/ui/svgs/logo";
import { VisionMission } from "@/components/about-us/vision-mission";
import {
  Code,
  UsersThree,
  Wrench,
  FileText,
  Link as LinkIcon,
} from "@phosphor-icons/react";
import { Team } from "@/components/about-us/team";
import { Companies } from "@/components/about-us/companies";
import { motion } from "motion/react";
import { sideBeamGlowLeftMuted, sideBeamGlowRightMuted } from "@/lib/shadows";

const tags = [
  {
    name: "Developer-Centric",
    icon: Code,
  },
  {
    name: "Technical Expertise",
    icon: Wrench,
  },
  {
    name: "Community-Driven",
    icon: UsersThree,
  },
  {
    name: "Content Focused",
    icon: FileText,
  },
  {
    name: "End-to-End Solutions",
    icon: LinkIcon,
  },
];

/** Frosted glass pills — translucent fill, primary-tinted border + soft orange shadow. */
const capsuleClassName =
  "rounded-full px-3 py-1.5 sm:px-3.5 inline-flex gap-2 items-center text-xs sm:text-sm font-medium text-foreground border border-border/40 dark:border-white/15 bg-white/55 dark:bg-white/[0.08] backdrop-blur-md shadow-[0_6px_18px_-4px_hsl(var(--primary)/0.32)] dark:shadow-[0_6px_18px_-4px_hsl(var(--primary)/0.22)]";

// Animation variants that can be reused across components
const sectionAnimation = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export default function AboutUs() {
  return (
    <section className="overflow-x-hidden">
      <div className="max-w-7xl mx-auto h-fit relative">
        <div className={sideBeamGlowLeftMuted}></div>
        <div className={sideBeamGlowRightMuted}></div>
        <motion.div
          className="flex flex-col w-full h-[40rem] max-h-fit mt-20"
          initial="hidden"
          animate="visible"
          variants={sectionAnimation}
        >
          <div className="relative h-full w-full">
            <AboutRipple mainCircleSize={310} numCircles={10} />
            <div className="absolute flex flex-col gap-2 inset-0 items-center justify-center">
              <div className="drop-shadow-[0_0px_25px_hsl(var(--primary))] bottom-[6rem] md:bottom-[5rem] backdrop-blur-sm z-[30] rounded-3xl bg-background/60 border-2 border-accent/40 flex items-center justify-center p-3">
                <Logo className="size-12 sm:size-16 md:size-24" />
              </div>
              <span className="font-primary text-2xl font-semibold tracking-tight">
                Studio1
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex px-4 flex-col items-center gap-4 -translate-y-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionAnimation}
        >
          <h1 className="text-3xl md:text-5xl font-primary font-normal tracking-tight text-center leading-tight">
            Amplifying Your{" "}
            <span className="font-accent italic font-bold text-primary/75 text-[1.08em]">
              Product Story
            </span>{" "}
            for{" "}
            <span className="font-accent italic font-bold text-primary/75 text-[1.08em]">
              Developers
            </span>{" "}
            <br /> One Blog, Video and Initiatives at a Time
          </h1>
          <div className="text-center text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-semibold">
            We help tech companies grow developer communities and boost
            engagement <br className="hidden md:block" /> through DevRel and
            technical content that resonates.
          </div>

          <div className="flex flex-wrap max-w-md sm:max-w-xl items-center justify-center gap-2.5 sm:gap-3 mt-10">
            {tags.map((tag, index) => (
              <motion.div
                key={tag.name}
                initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <span className={capsuleClassName}>
                  <tag.icon
                    weight="fill"
                    className="size-4 shrink-0 text-primary"
                  />
                  {tag.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionAnimation}
          >
            <VisionMission />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionAnimation}
          >
            <Team />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionAnimation}
          >
            <Companies />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
