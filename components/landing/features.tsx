import React from "react";
import { IconCrown } from "@tabler/icons-react";
import { Badge } from "../ui/badge";
import { Data } from "@/data";
import { FeatureCard } from "./feature-card";

export default function Features() {
  return (
    <div
      id="why-us"
      className="flex flex-col max-w-7xl px-4 mx-auto items-center mb-44"
    >
      <div className="flex flex-col items-center gap-4 justify-center">
        <Badge className="text-sm font-medium pb-1 flex gap-2 items-center">
          <IconCrown className="size-4" /> Features
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
