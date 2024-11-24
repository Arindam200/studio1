import React from "react";
import { CardWithGrid } from "@/components/ui/cards";

export default function Impact() {
  return (
    <div className="sm:py-20 py-10 " id="impact">
      <div className="text-center mb-6 font-semibold lg:text-5xl text-2xl  pb-4">
        Our{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 from">
          Impact
        </span>
      </div>
      <div className="container flex max-sm:flex-col max-sm:px-5 justify-center gap-6 ">
        <CardWithGrid>
          <div className="w-full h-40 border font-bold border-orange-400 rounded-md p-3 flex flex-col justify-center items-center space-y-2">
            <div className="text-center sm:text-5xl text-3xl">600k+</div>
            <div className="text-center text-2xl ">Total Blog Views</div>
          </div>
        </CardWithGrid>
        <CardWithGrid>
          <div className="w-full h-40 border font-bold border-orange-400 rounded-md p-3 flex flex-col justify-center items-center space-y-2">
            <div className="text-center sm:text-5xl text-3xl">15+</div>
            <div className="text-center text-2xl ">Projects Delivered</div>
          </div>
        </CardWithGrid>
        <CardWithGrid>
          <div className="w-full h-40 border font-bold border-orange-400 rounded-md p-3 flex flex-col justify-center items-center space-y-2">
            <div className="text-center sm:text-5xl text-3xl">10+</div>
            <div className="text-center text-2xl ">Tech Companies Served</div>
          </div>
        </CardWithGrid>
      </div>
    </div>
  );
}
