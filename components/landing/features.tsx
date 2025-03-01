import React from "react";
import { IconCrown } from "@tabler/icons-react";
import { Badge } from "../ui/badge";
import { Data } from "@/data";
import { FeatureCard } from "./feature-card";
import { Sparkle } from "@phosphor-icons/react/dist/ssr";

export default function Features() {
  return (
    <div
      id="why-us"
      className="flex flex-col max-w-7xl px-4 mx-auto items-center relative mb-44"
    >
      <div className="bottom-[-10rem] md:bottom-[-18rem] z-[-1] left-[-0%] absolute bg-gradient-to-t opacity-80 dark:opacity-100 from-primary dark:to-primary to-white  blur-[2.5em] dark:blur-[2.5em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out md:size-[30rem] md:h-[40rem] md:w-[10rem] rotate-[60deg]"></div>
      <div className="flex flex-col items-center gap-4 justify-center">
        <Badge className="text-sm font-medium bg-gradient-to-r from-primary to-primary1 flex gap-2 items-center">
          <Sparkle weight="fill" className="size-4" /> Features
        </Badge>
        <div className="text-5xl font-medium text-center">
          Why Work with Us?
        </div>
        <p className="text-center text-base mt-2">
          Here you will see what we do and what we have to offer to you.
          <br />
          Explore and make a call directly to our HQ.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 mt-20">
        {Data.Features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </div>
  );
}
