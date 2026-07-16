"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { TimelineItem } from "@/components/sections/timeline-item";
import { Data } from "@/data";
import { cn } from "@/lib/utils";

const steps = Data.DevRelAsServiceProcess;

export default function ProcessSteps() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setSelected(api.selectedScrollSnap());
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Gentle autoplay; pauses on hover/focus and when the tab is hidden.
  useEffect(() => {
    if (!api || paused) return;
    const id = setInterval(() => {
      if (!document.hidden) api.scrollNext();
    }, 4500);
    return () => clearInterval(id);
  }, [api, paused]);

  const scrollTo = useCallback((i: number) => api?.scrollTo(i), [api]);

  return (
    <div
      className="relative mx-auto w-full max-w-5xl px-2 sm:px-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <Carousel setApi={setApi} opts={{ loop: true, align: "start" }}>
        <CarouselContent className="py-1">
          {steps.map((item, index) => (
            <CarouselItem key={item.name} className="md:basis-1/2">
              <TimelineItem
                item={item}
                index={index}
                isActive={index === selected}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>

      {/* progress dots */}
      <div className="mt-7 flex items-center justify-center gap-2.5">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to step ${i + 1}`}
            aria-current={i === selected}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === selected
                ? "w-7 bg-primary"
                : "w-2 bg-foreground/20 hover:bg-foreground/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}
