"use client";
import { Badge } from "../ui/badge";
import { Data } from "@/data";
import { FeatureCard } from "./feature-card";
import { Sparkle } from "lucide-react";
import { motion } from "motion/react";
import { containerVariants, fadeInUp, headerVariants } from "@/lib/animations";
import { featuresGlowLeft, featuresGlowRight } from "@/lib/shadows";

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
      <div className={featuresGlowLeft}></div>
      <div className={featuresGlowRight}></div>

      <motion.div
        className="flex flex-col items-center gap-4 justify-center"
        variants={headerVariants}
      >
        <Badge className="text-sm font-medium bg-gradient-to-r from-primary to-primary1 flex gap-2 items-center">
          <Sparkle className="size-4" /> Features
        </Badge>
        <div className="text-5xl max-sm:text-4xl font-normal text-center">
          Why Tech Companies Choose{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary">
            Studio1
          </span>
        </div>
        <p className="text-center text-base max-sm:text-sm mt-2">
          High-quality technical tutorials, documentation, and DevRel execution
          <br />
          that drives developer adoption and trust.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 mt-20"
        variants={fadeInUp}
      >
        {Data.Features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
}
