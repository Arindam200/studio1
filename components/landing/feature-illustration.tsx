"use client";
import React from "react";
import { useTheme } from "next-themes";
import UserAvatarCollection from "./user-avatar-collection";
// import Graph from "../ui/svgs/graph";
import SemiCircularGraph from "../ui/svgs/semi-circular-graph";
import { NumberTicker } from "../magicui/number-ticker";
import { CollaboarationIllustration } from "../collaboaration-illustration";
import SupportIllustration from "../support-illustration";
import DarkExpertiseIllustration from "../ui/svgs/dark-expertise-illustration";
import LightExpertiseIllustration from "../ui/svgs/light-expertise-illustration";
import DisplayCards from "./display-cards";
import { BarChart, PenTool, Users } from "lucide-react";
import { ComparisionMetric } from "../comparision-metric";

interface FeatureIllustrationProps {
  title: string;
}

const defaultCards = [
  {
    icon: <BarChart className="size-4 text-primary" />, // Analytics & growth
    title: "Community Growth",
    description: "500+ developers engaged through our initiatives",
    date: "Updated Weekly",
    iconClassName: "text-primary",
    titleClassName:
      "text-primary transition-colors duration-300 hover:text-primary",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <PenTool className="size-4 text-primary" />, // Content & writing
    title: "Content Impact",
    description: "1M+ content views and growing",
    date: "Quick Insights",
    iconClassName: "text-primary",
    titleClassName:
      "text-primary transition-colors duration-300 hover:text-primary",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Users className="size-4 text-primary" />, // DevRel success
    title: "DevRel Success",
    description: "20+ partnerships & collaborations",
    date: "Last Updated: April 2025",
    iconClassName: "text-primary",
    titleClassName:
      "text-primary transition-colors duration-300 hover:text-primary",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

export function FeatureIllustration({ title }: FeatureIllustrationProps) {
  const { theme } = useTheme();
  const normalizedTitle = title.toLowerCase();

  switch (normalizedTitle) {
    case "quality":
      return (
        <ComparisionMetric className="absolute bottom-[0rem] md:bottom-[-3rem] left-1/2 -translate-x-1/2 size-[12rem] md:size-[22rem]" />
        // <SemiCircularGraph className="absolute bottom-[-5rem] md:bottom-[-5rem] left-1/2 -translate-x-1/2 size-[12rem] md:size-[22rem]" />
      );
    case "experience":
      return (
        <div className="absolute flex flex-col items-center justify-center bottom-[2rem] left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2">
            <NumberTicker
              value={1000}
              className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-primary dark:text-primary"
            />
            <p className="text-6xl font-medium tracking-tighter text-primary">
              k+
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            Total content views
          </div>
        </div>
      );
    case "expertise":
      return theme === "dark" ? (
        <DarkExpertiseIllustration className="absolute bottom-[-5rem] md:-bottom-[5rem] left-1/2 size-80 -translate-x-1/2" />
      ) : (
        <LightExpertiseIllustration className="absolute bottom-[-5rem] md:-bottom-[5rem] left-1/2 size-80 -translate-x-1/2" />
      );
    case "support":
      return (
        <SupportIllustration className="absolute bottom-[2rem] left-1/2 w-full -translate-x-1/2" />
      );
    case "results":
      return (
        // <Graph className="absolute bottom-[-3rem] left-1/2 -translate-x-1/2 size-60" />
        <div className="absolute bottom-[-3rem] left-1/2 -translate-x-1/2 size-60 max-w-3xl">
          <DisplayCards cards={defaultCards} />
        </div>
      );
    case "collaboration":
      return (
        <CollaboarationIllustration className="absolute bottom-[3rem] left-1/2 w-full -translate-x-1/2" />
      );
    case "testimonials":
      return <UserAvatarCollection />;
    default:
      return null;
  }
}
