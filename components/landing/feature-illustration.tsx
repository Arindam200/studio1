"use client";
import React from "react";
import { useTheme } from "next-themes";
import UserAvatarCollection from "./user-avatar-collection";
import Graph from "../ui/svgs/graph";
import SemiCircularGraph from "../ui/svgs/semi-circular-graph";
import { NumberTicker } from "../magicui/number-ticker";
import CollaboarationIllustration from "../collaboaration-illustration";
import SupportIllustration from "../support-illustration";
import DarkExpertiseIllustration from "../ui/svgs/dark-expertise-illustration";
import LightExpertiseIllustration from "../ui/svgs/light-expertise-illustration";

interface FeatureIllustrationProps {
  title: string;
}

export function FeatureIllustration({ title }: FeatureIllustrationProps) {
  const { theme } = useTheme();
  const normalizedTitle = title.toLowerCase();

  switch (normalizedTitle) {
    case "testimonials":
      return <UserAvatarCollection />;
    case "results":
      return (
        <Graph className="absolute bottom-[-3rem] left-1/2 -translate-x-1/2 size-60" />
      );
    case "quality":
      return (
        <SemiCircularGraph className="absolute bottom-[-5rem] md:bottom-[-10rem] left-1/2 -translate-x-1/2 size-[12rem] md:size-[22rem]" />
      );
    case "collaboration":
      return (
        <CollaboarationIllustration className="absolute bottom-[0rem] md:bottom-[3rem] left-1/2 w-full -translate-x-1/2" />
      );
    case "expertise":
      return theme === "dark" ? (
        <DarkExpertiseIllustration className="absolute bottom-[-5rem] md:-bottom-[5rem] left-1/2 size-80 -translate-x-1/2" />
      ) : (
        <LightExpertiseIllustration className="absolute bottom-[-5rem] md:-bottom-[5rem] left-1/2 size-80 -translate-x-1/2" />
      );
    case "support":
      return (
        <SupportIllustration className="absolute bottom-[0rem] md:bottom-[2rem] left-1/2 w-full -translate-x-1/2" />
      );
    case "experience":
      return (
        <div className="absolute flex flex-col items-center justify-center bottom-[2rem] left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2">
            <NumberTicker
              value={1200}
              className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-primary dark:text-primary"
            />
            <p className="text-6xl font-medium tracking-tighter text-primary">
              +
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            Hours of Experience
          </div>
        </div>
      );
    default:
      return null;
  }
}
