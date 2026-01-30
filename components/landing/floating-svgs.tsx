"use client";
import { Code, Pen } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { iconVariants, createFloatingAnimation } from "@/lib/animations";

export default function FloatingSvgs() {
  return (
    <>
      <motion.div
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        animate={createFloatingAnimation(0, -25)} // Combining floating animation
        viewport={{ once: false, amount: 0.2 }} // Controls when animation triggers
        className="text-white drop-shadow-[10px_16px_50px_hsl(var(--primary))] rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary1 via-primary to-primary1 backdrop-blur-xl absolute bottom-[-2rem] z-[201] md:top-[20rem] left-[2rem] md:left-[4rem] lg:left-[18rem] xl:left-[20rem] size-14"
      >
        <Code className="size-6" />
      </motion.div>
      <motion.div
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        animate={createFloatingAnimation(1, 25)} // Combining floating animation
        viewport={{ once: false, amount: 0.2 }} // Controls when animation triggers
        className="text-white drop-shadow-[10px_16px_50px_hsl(var(--primary))] rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary1 via-primary to-primary1 backdrop-blur-xl absolute bottom-[-2rem] z-[201] md:top-[20rem] right-[2rem] md:right-[4rem] lg:right-[18rem] xl:right-[20rem] size-14"
      >
        <Pen className="size-6" />
      </motion.div>
      {/* <div className="md:flex hidden text-white drop-shadow-[10px_16px_50px_hsl(var(--primary))] rotate-[25deg] rounded-2xl items-center justify-center bg-gradient-to-br from-primary1 via-primary to-primary1 backdrop-blur-xl absolute top-[30rem] right-[18rem] size-16">
        <Laptop className="size-8" />
      </div>
      <div className="md:flex hidden text-white drop-shadow-[10px_16px_50px_hsl(var(--primary))] -rotate-[25deg] rounded-2xl items-center justify-center bg-gradient-to-br from-primary1 via-primary to-primary1 backdrop-blur-xl absolute top-[30rem] left-[18rem] size-16">
        <Lightbulb className="size-8" />
      </div> */}
    </>
  );
}
