"use client";

import React from "react";
import { motion } from "motion/react";
import { CheckSquare } from "@phosphor-icons/react";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";
import { Num } from "../ui/num";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  item: {
    name: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    details: React.ReactNode[];
  };
  index: number;
  isActive?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  item,
  index,
  isActive,
}) => {
  return (
    <motion.div className="relative h-full">
      <div
        className={cn(
          "border dark:border-white/10 bg-gradient-to-b from-background to-accent/20 dark:from-accent/15 dark:to-background backdrop-blur-md relative overflow-hidden h-full w-full p-6 md:p-7 rounded-xl shadow-lg shadow-black/20 dark:shadow-primary/5 transition-[border-color,box-shadow] duration-300",
          isActive && "border-primary/40 shadow-black/30 dark:shadow-primary/15",
        )}
      >
        <div className="absolute top-0 left-0 blur-[1em] z-[2] w-1/2 h-full bg-gradient-to-r from-background via-background/60"></div>

        <div className="absolute top-0 left-0 blur-[1em] z-[2] w-full h-[70%] bg-gradient-to-r from-background via-background/60"></div>

        <div className="absolute inset-0 z-[-1] size-full overflow-hidden rounded-xl opacity-25 transition-opacity duration-300 group-hover:opacity-60">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-transparent"
            colors={[
              [234, 88, 12],
              [249, 115, 22],
            ]}
            dotSize={3}
            showGradient={false}
          />
        </div>
        <div className="relative z-[50] flex h-full flex-col justify-center text-left">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary1 text-white shadow-lg shadow-primary/30 ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105">
            <item.icon className="size-8" />
          </div>

          <span className="mt-4 font-secondary text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Step <Num>{index + 1}</Num>
          </span>
          <h3 className="mt-1 font-inter text-2xl font-bold leading-tight text-foreground">
            {item.name}
          </h3>

          <p className="mt-3 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {item.description}
          </p>

          <div className="mt-6 grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2">
            {item.details.map((element, detailIndex) => (
              <div
                key={detailIndex}
                className="flex items-center gap-2 rounded-lg border border-border/60 bg-background/40 px-3 py-2.5 text-left text-sm font-semibold leading-tight text-foreground backdrop-blur-sm transition-colors duration-300 hover:border-primary/40 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <CheckSquare
                  className="size-5 shrink-0 text-primary"
                  weight="fill"
                />
                <span>{element}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
