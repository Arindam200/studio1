"use client";

import { cn } from "@/lib/utils";
import {
  useCallback,
  useRef,
  type CSSProperties,
  type PointerEvent,
} from "react";

const GRAIN =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export const cursorGlowBaseBackground: CSSProperties = {
  backgroundImage:
    "radial-gradient(120% 82% at 88% -14%, hsl(var(--primary) / 0.10), transparent 52%), linear-gradient(180deg, hsl(var(--background)), hsl(var(--accent) / 0.28))",
};

export const cursorGlowDarkBackground: CSSProperties = {
  backgroundImage:
    "radial-gradient(120% 82% at 88% -14%, hsl(var(--primary) / 0.06), transparent 52%), linear-gradient(180deg, hsl(var(--background)), hsl(var(--foreground) / 0.07))",
};

export const cursorGlowCardClassName = cn(
  "group relative isolate overflow-hidden",
  "border border-border/70 dark:border-white/[0.09]",
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_14px_32px_-22px_rgba(0,0,0,0.85)]",
  "transition-[transform,border-color,box-shadow] duration-500 ease-out",
  "hover:-translate-y-1 hover:border-primary/30 dark:hover:border-white/[0.15]",
  "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_26px_50px_-26px_rgba(0,0,0,0.9)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
);

export function useCursorGlow<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  const onPointerMove = useCallback((e: PointerEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);

  return { ref, onPointerMove };
}

type CursorGlowCardEffectsProps = {
  roundedClassName?: string;
  darkened?: boolean;
};

export function CursorGlowCardEffects({
  roundedClassName = "rounded-2xl",
  darkened = false,
}: CursorGlowCardEffectsProps) {
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />
      {darkened ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] bg-black/[0.05] dark:bg-black/40"
        />
      ) : null}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 motion-reduce:hidden"
        style={{
          background:
            "radial-gradient(300px circle at var(--mx,50%) var(--my,0%), hsl(var(--primary) / 0.09), transparent 62%)",
        }}
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 z-[1] p-px opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 motion-reduce:hidden",
          roundedClassName,
        )}
        style={{
          background:
            "radial-gradient(240px circle at var(--mx,50%) var(--my,0%), hsl(var(--primary1) / 0.95), hsl(var(--primary) / 0.35) 22%, transparent 46%)",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
        }}
      />
    </>
  );
}
