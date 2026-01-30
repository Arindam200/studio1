"use client";

import React from "react";
import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import { CheckSquare } from "@phosphor-icons/react";
import { FlickeringGrid } from "../magicui/flickering-grid";

interface TimelineItemProps {
  item: {
    name: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    details: React.JSX.Element[];
  };
  index: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  return (
    <motion.div className="relative h-full">
      <div className="border-2 relative overflow-hidden h-full w-full p-6 rounded-lg shadow-lg">
        <div className="absolute top-0 left-0 blur-[1em] z-[2] w-1/2 h-full bg-gradient-to-r from-background via-background/60"></div>

        <div className="absolute top-0 left-0 blur-[1em] z-[2] w-full h-[70%] bg-gradient-to-r from-background via-background/60"></div>

        <div className="text-[18rem] z-[30] font-extrabold font-primary bg-gradient-to-b from-foreground/60 via-foreground/20 dark:from-white/80 dark:via-white/15 to-transparent bg-clip-text text-transparent absolute bottom-[-8rem] opacity-25 right-[0rem]">
          {index + 1}
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
          <Badge className="flex z-[50] w-fit rounded-lg items-center gap-2">
            <span className="text-sm font-semibold text-primary">
              {<item.icon className="size-6 text-white" />}
            </span>
            <h3 className="text-xl font-bold">{item.name}</h3>
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
