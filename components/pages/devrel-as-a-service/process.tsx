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
      className="py-8 relative max-w-7xl mt-44 mx-auto px-4 max-sm:px-5 sm:py-10 flex flex-col justify-center items-center"
    >
      <div className="top-[-10rem] md:top-[-8rem] z-[-1] left-[-80%] md:left-[-20%] absolute bg-gradient-to-t opacity-50 dark:opacity-60 dark:lg:opacity-100 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out  h-[50rem] md:h-[42rem] w-[10rem] -rotate-[60deg]"></div>

      <div className="flex flex-col gap-4 mb-8">
        <div className="text-center font-semibold lg:text-5xl text-4xl sm:pb-4">
        How We Deliver <br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary ">
          Developer-First DevRel
          </span>
        </div>
        <p className="text-center mx-auto text-foreground/80 dark:text-neutral-400 text-sm md:text-base ">
        A proven process designed for fast-moving{" "}
          <br className="hidden md:block" /> product teams and developer-focused startups. 
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
