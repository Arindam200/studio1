"use client";

import React from "react";
import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import { CheckSquare } from "@phosphor-icons/react";
import { FlickeringGrid } from "../magicui/flickering-grid";
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

        <div className="text-[18rem] z-[30] font-extrabold font-numeric tabular-nums bg-gradient-to-b from-foreground/60 via-foreground/20 dark:from-white/80 dark:via-white/15 to-transparent bg-clip-text text-transparent absolute bottom-[-8rem] opacity-25 right-[0rem]">
          <Num>{index + 1}</Num>
        </div>
        <FlickeringGrid
          className="absolute group-hover:opacity-60 opacity-10 transition-all duration-300 inset-0 rounded-xl z-[-1] size-full"
          squareSize={4}
          gridGap={6}
          color="#ea580c"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={800}
          width={800}
        />
        <div className="flex flex-col z-[50]">
          <Badge className="flex z-[50] w-fit items-center gap-2 rounded-lg py-1.5">
            <item.icon className="size-5 shrink-0 text-white" />
            <h3 className="pb-0 font-inter text-xl font-bold leading-none">
              {item.name}
            </h3>
          </Badge>
          <p className="mt-2 text-sm z-[50] text-neutral-600 font-medium dark:text-neutral-400">
            {item.description}
          </p>
          <div className="flex flex-col z-[50] mt-4 w-full gap-2">
            {item.details.map((element, index) => {
              return (
                <div
                  key={index}
                  className="text-sm flex text-foreground font-semibold items-center gap-2 w-full"
                >
                  <CheckSquare className="size-6 text-primary" />
                  {element}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
