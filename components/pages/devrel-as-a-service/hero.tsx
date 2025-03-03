"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { IconPackages, IconPhoneFilled } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck,
  GraduationCap,
  Megaphone,
  UsersFour,
} from "@phosphor-icons/react";

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="h-fit relative max-w-7xl mx-auto py-10 md:py-20 px-4 mt-24 w-full">
        <motion.div
          className="flex flex-col items-center justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <Badge className="text-sm font-medium pb-1 flex gap-2 items-center">
              <IconPackages className="size-4" /> Services
            </Badge>
          </motion.div>

          <motion.div
            className="md:text-7xl text-5xl font-medium text-center"
            variants={itemVariants}
          >
            DevRel as a Service
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="md:text-xl text-base font-medium text-center"
          >
            Build and nurture your developer <br /> community with our expert
            DevRel strategies.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex md:flex-row mt-10 w-full gap-4 flex-col justify-center"
          >
            <Button className=" h-14 w-full md:w-44">
              Book a Call <IconPhoneFilled className="size-10" />
            </Button>
            <Button variant="secondary" className=" h-14 md:w-44 w-full">
              Explore Services <IconPackages className="size-10" />
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 md:mt-14 mt-10"
          >
            <div className="flex bg-muted-foreground/10 w-40 flex-col gap-2 min-w-24 min-h-32 justify-center max-h-32 rounded-2xl items-center">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm text-center">
                Projects <br /> Completed
              </div>
            </div>
            <div className="flex flex-col bg-muted-foreground/10 w-40 gap-2 min-w-24 min-h-32 justify-center max-h-32 rounded-2xl items-center">
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm text-center">
                Companies
                <br /> Collaborated
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="top-[-15rem] left-[50%] z-[-1] opacity-50 dark:opacity-100 absolute bg-gradient-to-t from-primary/10 dark:from-primary to-orange-200 dark:to-orange-900/90 blur-[8em] rounded-xl transition-all translate-x-[-50%] duration-700 ease-out size-[20rem] rotate-[54deg]"></div>

        <div className=" flex flex-wrap items-center mt-20 justify-center gap-4">
          <div className="lg:absolute border bg-muted-foreground/10 dark:bg-accent/40 backdrop-blur-lg flex items-center justify-center gap-2 font-semibold rounded-full px-3 py-1 w-fit h-fit lg:-rotate-12 top-[15rem] left-[8rem]">
            <Megaphone
              weight="fill"
              className="size-5 md:size-8 text-primary"
            />
            <span>Advocacy</span>
          </div>
          <div className="lg:absolute border bg-muted-foreground/10 dark:bg-accent/40 backdrop-blur-lg flex items-center justify-center gap-2 font-semibold rounded-full px-3 py-1 w-fit h-fit lg:rotate-12 top-[27rem] left-[15rem]">
            <GraduationCap
              weight="fill"
              className="size-5 md:size-8 text-primary"
            />
            <span>Education</span>
          </div>
          <div className="lg:absolute border bg-muted-foreground/10 dark:bg-accent/40 backdrop-blur-lg flex items-center justify-center gap-2 font-semibold rounded-full px-3 py-1 w-fit h-fit lg:rotate-12 top-[15rem] right-[8rem]">
            <CalendarCheck
              weight="fill"
              className="size-5 md:size-8 text-primary"
            />
            <span>Events</span>
          </div>
          <div className="lg:absolute border bg-muted-foreground/10 dark:bg-accent/40 backdrop-blur-lg flex items-center justify-center gap-2 font-semibold rounded-full px-3 py-1 w-fit h-fit lg:-rotate-12 top-[27rem] right-[15rem]">
            <UsersFour
              weight="fill"
              className="size-5 md:size-8 text-primary"
            />
            <span>Community</span>
          </div>
        </div>
      </div>
    </>
  );
}
