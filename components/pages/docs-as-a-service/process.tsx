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
      className={`${serviceProcessOuterClassName} mt-12 pt-12 pb-6 sm:pt-10 sm:pb-8`}
    >
      <div
        className={`${serviceProcessInnerClassName} flex flex-col items-center`}
      >
        <ProcessScroller
          steps={Data.DocsAsServiceProcess}
          heading={
            <div className="w-full text-center">
              <h2 className="text-4xl text-foreground font-medium mb-3 md:text-5xl lg:text-6xl">
                How We Deliver <br />
                <span className="serif-accent font-accent italic text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary">
                  Developer-First Docs
                </span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
                A structured audit-to-implementation process
                <br /> built for fast-moving product and platform teams.
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
}
