"use client";
import React from "react";
import { Data } from "@/data";
import ProcessSection from "@/components/process-section";
import { Timeline } from "@/components/sections/timeline";
import { TimelineItem } from "@/components/sections/timeline-item";

const steps = Data.BlogAsServiceProcess;

export default function Process() {
  return (
    <div
      id="process"
      className="max-w-7xl relative mx-auto text-white py-16 max-sm:px-5 sm:py-10 flex flex-col justify-center items-center"
    >
      <div className="top-[-10rem] md:top-[-8rem] z-[-1] left-[-80%] md:left-[-20%] absolute bg-gradient-to-t opacity-50 dark:opacity-60 dark:lg:opacity-100 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out  h-[50rem] md:h-[42rem] w-[10rem] -rotate-[60deg]"></div>

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 md:text-5xl">
          This is how we structure <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary ">
            our process
          </span>
        </h2>
        <p className="text-muted-foreground ">
          Our transparent pricing makes it easy to find
          <br /> a plan that works within your financial constraints.
        </p>
      </div>

      {/* <div className="sm:mt-16 mt-8">
        <div className="space-y-12">
          <ProcessSection steps={steps} />
        </div>
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
