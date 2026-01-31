"use client";
import React from "react";
import { CardWithGrid } from "@/components/ui/cards";

export default function Reach() {
  return (
    <div className="sm:py-20 py-10 " id="reach">
      <div className="text-center mb-6 font-semibold lg:text-5xl text-2xl  pb-4">
        Our Proven{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 from">
          Reach
        </span>
      </div>
      <div className="container flex flex-wrap max-sm:flex-col max-sm:px-5 justify-center gap-6 ">
        <CardWithGrid>
          <div className="w-full h-40 border font-bold border-orange-400 rounded-md p-3 flex flex-col justify-center items-center space-y-2">
            <div className="text-center sm:text-4xl text-2xl">10K+</div>
            <div className="text-center text-lg ">X/Twitter Engagement</div>
          </div>
        </CardWithGrid>
        <CardWithGrid>
          <div className="w-full h-40 border font-bold border-orange-400 rounded-md p-3 flex flex-col justify-center items-center space-y-2">
            <div className="text-center sm:text-4xl text-2xl">4-5K</div>
            <div className="text-center text-lg ">LinkedIn Reach</div>
          </div>
        </CardWithGrid>
        <CardWithGrid>
          <div className="w-full h-40 border font-bold border-orange-400 rounded-md p-3 flex flex-col justify-center items-center space-y-2">
            <div className="text-center sm:text-4xl text-2xl">20K+</div>
            <div className="text-center text-lg ">Reddit Views</div>
          </div>
        </CardWithGrid>
        <CardWithGrid>
          <div className="w-full h-40 border font-bold border-orange-400 rounded-md p-3 flex flex-col justify-center items-center space-y-2">
            <div className="text-center sm:text-4xl text-2xl">1K+</div>
            <div className="text-center text-lg ">YouTube Views</div>
          </div>
        </CardWithGrid>
        <CardWithGrid>
          <div className="w-full h-40 border font-bold border-orange-400 rounded-md p-3 flex flex-col justify-center items-center space-y-2">
            <div className="text-center sm:text-4xl text-2xl">900K+</div>
            <div className="text-center text-lg ">Dev Platform Reads</div>
          </div>
        </CardWithGrid>
        <CardWithGrid>
          <div className="w-full h-40 border font-bold border-orange-400 rounded-md p-3 flex flex-col justify-center items-center space-y-2">
            <div className="text-center sm:text-4xl text-2xl">6K+</div>
            <div className="text-center text-lg ">GitHub Stars</div>
          </div>
        </CardWithGrid>
      </div>
    </div>
  );
}
