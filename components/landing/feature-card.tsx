"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { featureCardHoverShadow, featureCardHoverGlow } from "@/lib/shadows";
import { Particles } from "../ui/particles";
import { FeatureIllustration } from "./feature-illustration";
import { NumericText } from "@/components/ui/num";
import type { Feature } from "@/types";

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  const [particlesActive, setParticlesActive] = useState(false);
  const [canUseParticles, setCanUseParticles] = useState(false);

  useEffect(() => {
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () =>
      setCanUseParticles(pointerQuery.matches && !motionQuery.matches);

    update();
    pointerQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);

    return () => {
      pointerQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  return (
    <div
      className={cn(
        "bg-accent dark:bg-accent/50 transition-all duration-700 rounded-xl p-2 min-w-full min-h-[25rem] group",
        featureCardHoverShadow,
        index === 0 && "md:col-span-2",
        index === 3 && "md:col-span-2"
      )}
      onPointerEnter={() => canUseParticles && setParticlesActive(true)}
      onPointerLeave={() => setParticlesActive(false)}
      onFocus={() => canUseParticles && setParticlesActive(true)}
      onBlur={() => setParticlesActive(false)}
    >
      <div className="rounded-xl bg-background h-full transition-all duration-700 relative overflow-hidden w-full p-8 flex flex-col items-start">
        <FeatureIllustration title={feature.title} />

        <div
          className={cn(
            featureCardHoverGlow,
            index % 2 === 0
              ? "right-[-20%] md:right-[-50%]"
              : "left-[0%] translate-x-[-50%]",
            index === 0 && "left-[50%] translate-x-[-50%]",
            index === 3 && "left-[50%] translate-x-[-50%]"
          )}
        />

        {canUseParticles && particlesActive ? (
          <Particles
            className="absolute h-screen opacity-100 transition-opacity duration-300 inset-0 z-0"
            quantity={70}
            ease={80}
            color="#f97316"
            refresh
          />
        ) : null}

        <div className="flex items-start flex-col gap-2 drop-shadow-lg">
          <div>
            <feature.icon className="size-8" />
          </div>
          <div className="text-xl md:text-2xl font-medium">
            {feature.title}
          </div>
        </div>

        <p className="text-muted-foreground text-sm mt-1 text-left">
          <NumericText>{feature.description}</NumericText>
        </p>
      </div>
    </div>
  );
}
