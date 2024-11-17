import React from "react";
import { CardWithGrid } from "@/components/ui/cards";

export default function Impact() {
  return (
    <div className="py-20">
      <div className="text-center mb-6 font-semibold lg:text-5xl text-2xl pb-4">
        Our{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 from">
          Impact
        </span>
      </div>
      <div className="container flex justify-center gap-6 ">
        <CardWithGrid>
          <div className="w-full h-40 border border-orange-400 rounded-md p-3 flex flex-col justify-center items-center">
            <div className="text-center text-4xl font-bold">1,000,000+</div>
            <div className="text-center text-sm">People impacted</div>
          </div>
        </CardWithGrid>
        <CardWithGrid>
          <div className="w-full h-40 border border-orange-400 rounded-md p-3 flex flex-col justify-center items-center">
            <div className="text-center text-4xl font-bold">1,000,000+</div>
            <div className="text-center text-sm">People impacted</div>
          </div>
        </CardWithGrid>
        <CardWithGrid>
          <div className="w-full h-40 border border-orange-400 rounded-md p-3 flex flex-col justify-center items-center">
            <div className="text-center text-4xl font-bold">1,000,000+</div>
            <div className="text-center text-sm">People impacted</div>
          </div>
        </CardWithGrid>
        <CardWithGrid>
          <div className="w-full h-40 border border-orange-400 rounded-md p-3 flex flex-col justify-center items-center">
            <div className="text-center text-4xl font-bold">1,000,000+</div>
            <div className="text-center text-sm">People impacted</div>
          </div>
        </CardWithGrid>
      </div>
    </div>
  );
}
