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
import { Badge } from "@/components/ui/badge";
import { Team } from "@/components/about-us/team";
import { Companies } from "@/components/about-us/companies";
import { motion } from "motion/react";

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

// Animation variants that can be reused across components
const sectionAnimation = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function AboutUs() {
  return (
    <section className="overflow-x-hidden">
      <div className="max-w-7xl mx-auto h-fit relative">
        <div className="top-[-10rem] md:top-[-8rem] z-[-1] left-[-80%] md:left-[-20%] absolute bg-gradient-to-t opacity-50 dark:opacity-60 dark:lg:opacity-80 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out  h-[50rem] md:h-[60rem] w-[10rem] -rotate-[60deg]"></div>
        <div className="top-[-10rem] md:top-[-8rem] z-[-1] right-[-80%] md:right-[-20%] absolute bg-gradient-to-t opacity-50 dark:opacity-60 dark:lg:opacity-80 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out  h-[50rem] md:h-[60rem] w-[10rem] rotate-[40deg]"></div>
        <motion.div
          className="flex flex-col w-full h-[40rem] max-h-fit mt-20"
          initial="hidden"
          animate="visible"
          variants={sectionAnimation}
        >
          <div className="relative h-full w-full">
            <AboutRipple mainCircleSize={310} numCircles={10} />
            <div className="absolute flex flex-col gap-2 inset-0 items-center justify-center">
              <div className="text-xs mb-4 tracking-widest text-center leading-tight">
                ABOUT
              </div>
              <div className="drop-shadow-[0_0px_25px_hsl(var(--primary))] bottom-[6rem] md:bottom-[5rem] backdrop-blur-sm z-[30] rounded-3xl bg-background/60 border-2 border-accent/40 flex items-center justify-center p-3">
                <Logo className="size-12 sm:size-16 md:size-24" />
              </div>
              <span className="text-2xl font-bold">Studio1</span>
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
          <div className="text-3xl md:text-5xl font-semibold text-center leading-tight">
          Amplifying Your Product Story for Developers <br /> One Blog, Video and Initiatives at a Time
          </div>
          <div className="text-center text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-semibold">
          We help tech companies grow developer communities and boost engagement <br className="hidden md:block" /> through DevRel and technical content that resonates.🚀
          </div>

          <div className="flex flex-wrap max-w-lg items-center justify-center gap-4 mt-14">
            {tags.map((tag, index) => (
              <motion.div
                key={tag.name}
                initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Badge className="flex h-6 bg-muted-foreground/30 text-foreground rounded-md hover:bg-muted-foreground/50 items-center gap-2">
                  <tag.icon className="size-4" />
                  {tag.name}
                </Badge>
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
