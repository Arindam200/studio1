import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Data } from "@/data";
import ProcessSection from "@/components/process-section";

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

      <div className="sm:mt-16 mt-8">
        <div className="space-y-12">
          <ProcessSection steps={steps} />
        </div>
      </div>
    </div>
  );
}
