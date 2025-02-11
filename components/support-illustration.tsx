"use client";
import { cn } from "@/lib/utils";
import { Clock, ClockUser, Moon, Sun } from "@phosphor-icons/react";
import { useRef } from "react";
import { AnimatedBeam } from "./magicui/animated-beam";

export default function SupportIllustration({
  className,
}: {
  className?: string;
}) {
  const sunRef = useRef<HTMLDivElement>(null);
  const clockRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        className={cn(
          "w-full min-h-[1rem] flex items-center justify-center px-4 gap-4",
          className
        )}
      >
        <div
          ref={containerRef}
          className="flex items-center  rounded-xl p-2 w-full justify-between"
        >
          <div
            ref={sunRef}
            className="size-20 border-2 bg-accent/50 backdrop-blur-xl rounded-3xl flex items-center justify-center"
          >
            <Sun className="size-8" />
          </div>

          <div
            ref={clockRef}
            className="size-40 text-5xl bg-accent/50 backdrop-blur-xl flex items-center justify-center rounded-[2rem] border-2"
          >
            <ClockUser className="size-20" />
          </div>

          <div
            ref={moonRef}
            className="size-20 border-2 bg-accent/50 backdrop-blur-xl rounded-3xl flex items-center justify-center"
          >
            <Moon className="size-8" />
          </div>
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={sunRef}
            toRef={clockRef}
            className="z-[-1]"
            gradientStartColor="#ff3131"
            gradientStopColor="#ff914d"
            curvature={75}
            endYOffset={-10}
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={moonRef}
            toRef={clockRef}
            gradientStartColor="#ff3131"
            gradientStopColor="#ff914d"
            className="z-[-1]"
            curvature={-75}
            endYOffset={-10}
          />
        </div>
      </div>
    </>
  );
}
