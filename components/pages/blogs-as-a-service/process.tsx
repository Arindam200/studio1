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
      className="max-w-7xl mx-auto text-white py-16 max-sm:px-5 sm:py-10 flex flex-col justify-center items-center"
    >
      <div className="text-center font-semibold lg:text-5xl text-2xl pb-4">
        How it{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600">
          Works
        </span>{" "}
        ?
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
