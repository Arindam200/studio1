"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { Data } from "@/data";
import { FeatureCard } from "./feature-card";
import { Sparkle } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
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
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

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
        <div className="text-5xl font-medium text-center">
          Why Work with Us?
        </div>
        <p className="text-center text-base mt-2">
          Here you will see what we do and what we have to offer to you.
          <br />
          Explore and make a call directly to our HQ.
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
