import React from "react";
import { Data } from "@/data";
import ProcessSection from "@/components/process-section";

const steps = Data.DevRelAsServiceProcess;
export default function Process() {
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
      <div className="sm:mt-16 mt-8 w-full flex justify-center items-center">
        <ProcessSection steps={steps} />
      </div>
    </div>
  );
}
