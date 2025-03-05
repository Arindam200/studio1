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
    <div className="max-w-7xl mx-auto h-fit">
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
            <Logo className="size-32 " />
            <span className="text-2xl font-bold">Studio1</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-4 -translate-y-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionAnimation}
      >
        <div className="text-5xl font-semibold text-center leading-tight">
          We amplify your technical voice <br /> in the digital landscape
        </div>
        <div className="text-center text-neutral-600 dark:text-neutral-400 font-semibold">
          We help tech companies grow developer communities and boost engagement{" "}
          <br /> through DevRel andtechnical content as a service. 🚀
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
  );
}
