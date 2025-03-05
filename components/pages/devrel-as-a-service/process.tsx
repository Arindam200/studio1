"use client";
import React from "react";
import { Timeline } from "@/components/sections/timeline";
import { Data } from "@/data";
import { TimelineItem } from "@/components/sections/timeline-item";

export default function Process() {
  const steps = Data.DevRelAsServiceProcess;
  return (
    <div
      id="process"
      className="py-8 max-w-7xl mt-44 mx-auto px-4 max-sm:px-5 sm:py-10 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-4 mb-8">
        <div className="text-center font-semibold lg:text-5xl text-4xl sm:pb-4">
          Here's how we structure <br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary ">
            our process
          </span>
        </div>
        <p className="text-center mx-auto text-foreground/80 dark:text-neutral-400 text-sm md:text-base ">
          Everything you need to build and maintain a successful{" "}
          <br className="hidden md:block" /> developer relations program.
        </p>
      </div>
      {/* <div className="sm:mt-16 mt-8 w-full flex justify-center items-center">
        <ProcessSection />
      </div> */}

      <div className="w-full hidden lg:block">
        <Timeline type="Blog" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 relative gap-4 lg:hidden">
        {steps.map((item, index) => {
          return <TimelineItem key={item.name} index={index} item={item} />;
        })}
      </div>
    </div>
  );
}
