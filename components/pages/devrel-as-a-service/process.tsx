"use client";
import React from "react";
import { ProcessScroller } from "@/components/sections/process-scroller";
import { Data } from "@/data";
import {
  serviceProcessInnerClassName,
  serviceProcessOuterClassName,
} from "@/components/pages/shared/service-hero-layout";

export default function Process() {
  return (
    <div
      id="process"
      className={`${serviceProcessOuterClassName} pt-16 pb-20 sm:pt-10 sm:pb-24`}
    >
      <div
        className={`${serviceProcessInnerClassName} flex flex-col items-center`}
      >
        <div className="text-center mb-12 md:mb-16 w-full">
          <h2 className="text-4xl text-foreground font-medium mb-4 md:text-5xl">
            How We Deliver <br />
            <span className="font-accent italic text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary ">
              Developer-First DevRel
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven process designed for fast-moving
            <br /> product teams and developer-focused startups.
          </p>
        </div>

        <ProcessScroller steps={Data.DevRelAsServiceProcess} />
      </div>
    </div>
  );
}
