"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Particles } from "../ui/particles";
import { FeatureIllustration } from "./feature-illustration";
import { motion } from "motion/react";

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  };
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  const cardVariants = {
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
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.15,
      },
    },
  };

  return (
    <motion.div
      className={cn(
        "bg-accent dark:bg-accent/50 hover:shadow-xl transition-all duration-700 rounded-xl p-2 min-w-full min-h-[25rem] group",
        index === 0 && "md:col-span-2",
        index === 3 && "md:col-span-2"
      )}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="rounded-xl bg-background h-full transition-all duration-700 relative overflow-hidden w-full p-8 flex flex-col items-start">
        <FeatureIllustration title={feature.title} />

        <div
          className={cn(
            "bottom-[-10rem] md:bottom-[-29rem] group-hover:opacity-100 opacity-0 z-[10] absolute bg-gradient-to-t from-primary/10 dark:from-primary to-orange-200 dark:to-orange-900/90 blur-[6em] rounded-xl transition-all duration-700 ease-out w-[10rem] md:w-[30rem] h-[20rem] md:h-[30rem] rotate-[54deg]",
            index % 2 === 0
              ? "right-[-20%] md:right-[-50%]"
              : "left-[0%] translate-x-[-50%]",
            index === 0 && "left-[50%] translate-x-[-50%]",
            index === 3 && "left-[50%] translate-x-[-50%]"
          )}
        />

        <Particles
          className="absolute h-screen opacity-0 group-hover:opacity-100 transition-all duration-700 inset-0 z-0"
          quantity={100}
          ease={80}
          color="#f97316"
          refresh
        />

        <div className="flex items-start flex-col gap-2 drop-shadow-lg">
          <div>
            <feature.icon className="size-8" />
          </div>
          <div className="text-xl md:text-2xl font-semibold">
            {feature.title}
          </div>
        </div>

        <p className="text-muted-foreground text-sm mt-1 text-left">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}
