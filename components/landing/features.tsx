"use client";
import { Badge } from "../ui/badge";
import { Data } from "@/data";
import { FeatureCard } from "./feature-card";
import { Sparkle } from "lucide-react";
import { motion } from "motion/react";
import { containerVariants, headerVariants } from "@/lib/animations";

export default function Features() {
  return (
    <motion.div
      id="why-us"
      className="flex flex-col max-w-7xl px-4 mx-auto items-center relative mb-44"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="bottom-[-10rem] md:bottom-[-18rem] z-[-1] left-[-0%] absolute bg-gradient-to-t opacity-80 dark:opacity-100 from-primary dark:to-primary to-white  blur-[2.5em] dark:blur-[2.5em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out md:size-[30rem] md:h-[40rem] md:w-[10rem] rotate-[60deg]"></div>
      <div className="bottom-[-10rem] md:bottom-1/2 md:translate-y-[50%] z-[-1] right-[-0%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary to-primary blur-[4em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out md:size-[30rem] md:h-[40rem] md:w-[10rem] rotate-[60deg]"></div>

      <motion.div
        className="flex flex-col items-center gap-4 justify-center"
        variants={headerVariants}
      >
        <Badge className="text-sm font-medium bg-gradient-to-r from-primary to-primary1 flex gap-2 items-center">
          <Sparkle className="size-4" /> Features
        </Badge>
        <div className="text-5xl max-sm:text-4xl font-medium text-center">
          Why Tech Companies Choose Studio1
        </div>
        <p className="text-center text-base max-sm:text-sm mt-2">
          Studio1 delivers high-quality technical content and DevRel support
          <br />
          that drives adoption and developer trust.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 mt-20"
        variants={containerVariants}
      >
        {Data.Features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
}
