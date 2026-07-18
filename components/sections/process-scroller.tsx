"use client";

import React, {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  type Variants,
} from "motion/react";
import { TimelineItem } from "./timeline-item";
import { Num } from "../ui/num";
import { cn } from "@/lib/utils";

export interface ProcessStep {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  details: React.ReactNode[];
}

interface ProcessScrollerProps {
  steps: ProcessStep[];
  /** Label shown in the step rail, e.g. "Step", "Week", "Phase" */
  stepLabel?: string;
}

const gridContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const gridCardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Right-panel crossfade only — content swaps in a fixed slot. */
const panelFadeVariants: Variants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.22, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.16, ease: "easeIn" } },
};

/**
 * Sticky panel height — content-sized around the right detail card (26rem)
 * plus light vertical air.
 *
 * Track height: stickyHeight + (steps - 1) * stepScrollDistance
 *
 * Motion `useScroll` offsets only parse px / % / vw / vh. End/start edges are
 * measured in px so progress=1 aligns with unpin when the panel is centered.
 */
const STICKY_HEIGHT = "30rem";
const STICKY_HEIGHT_PX_FALLBACK = 480;
/** Scroll distance per step transition while pinned. */
const STEP_SCROLL_VH = 55;

function progressToStep(progress: number, lastIndex: number): number {
  if (lastIndex === 0) return 0;
  return Math.min(lastIndex, Math.floor(progress * (lastIndex + 1)));
}

function centeredStickyOffsets(stickyHeightPx: number) {
  const viewportCenter = window.innerHeight / 2;
  return {
    stickyTopPx: viewportCenter - stickyHeightPx / 2,
    stickyBottomPx: viewportCenter + stickyHeightPx / 2,
  };
}

const ProcessGrid: React.FC<{ steps: ProcessStep[]; animate: boolean }> = ({
  steps,
  animate,
}) => (
  <motion.div
    className="mx-auto w-full max-w-5xl"
    initial={animate ? "hidden" : false}
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={animate ? gridContainerVariants : undefined}
  >
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
      {steps.map((item, index) => (
        <motion.div
          key={item.name}
          className="group h-full min-h-[18rem] overflow-hidden rounded-xl"
          variants={animate ? gridCardVariants : undefined}
        >
          <TimelineItem item={item} index={index} />
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const ScrollStepper: React.FC<Required<ProcessScrollerProps>> = ({
  steps,
  stepLabel,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const scrollMetricsRef = useRef({
    stickyTopPx: 0,
    stickyBottomPx: STICKY_HEIGHT_PX_FALLBACK,
    stickyHeightPx: STICKY_HEIGHT_PX_FALLBACK,
  });
  const [active, setActive] = useState(0);
  const lastIndex = Math.max(steps.length - 1, 0);
  const [scrollOffsets, setScrollOffsets] = useState<{
    start: `${number}px`;
    end: `${number}px`;
  }>(() => {
    const half = STICKY_HEIGHT_PX_FALLBACK / 2;
    const center =
      typeof window !== "undefined" ? window.innerHeight / 2 : 400;
    return {
      start: `${center - half}px`,
      end: `${center + half}px`,
    };
  });

  useLayoutEffect(() => {
    const sticky = stickyRef.current;
    if (!sticky) return;

    const syncMetrics = () => {
      const stickyHeightPx = sticky.offsetHeight;
      if (stickyHeightPx <= 0) return;

      const { stickyTopPx, stickyBottomPx } =
        centeredStickyOffsets(stickyHeightPx);
      scrollMetricsRef.current = {
        stickyTopPx,
        stickyBottomPx,
        stickyHeightPx,
      };
      setScrollOffsets({
        start: `${stickyTopPx}px`,
        end: `${stickyBottomPx}px`,
      });
    };

    syncMetrics();
    const observer = new ResizeObserver(syncMetrics);
    observer.observe(sticky);
    window.addEventListener("resize", syncMetrics);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncMetrics);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: [`start ${scrollOffsets.start}`, `end ${scrollOffsets.end}`],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setActive(progressToStep(progress, lastIndex));
  });

  const scrollToStep = useCallback(
    (index: number) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const { stickyTopPx, stickyBottomPx } = scrollMetricsRef.current;
      const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
      const wrapperHeight = wrapper.offsetHeight;
      const progress = lastIndex === 0 ? 0 : index / lastIndex;
      const scrollRange = wrapperHeight - stickyBottomPx + stickyTopPx;
      const targetScrollY = wrapperTop - stickyTopPx + progress * scrollRange;

      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth",
      });
    },
    [lastIndex],
  );

  return (
    <div
      ref={wrapperRef}
      className="relative w-full"
      style={{
        height: `calc(${STICKY_HEIGHT} + ${lastIndex * STEP_SCROLL_VH}vh)`,
      }}
    >
      <div
        ref={stickyRef}
        className="sticky flex items-center"
        style={{
          height: STICKY_HEIGHT,
          top: `calc(50vh - ${STICKY_HEIGHT} / 2)`,
        }}
      >
        <div className="mx-auto grid w-full max-w-5xl grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-12 xl:gap-16">
          <div className="relative flex flex-col gap-1">
            <div
              aria-hidden
              className="absolute bottom-9 left-9 top-9 w-px -translate-x-1/2 bg-border"
            >
              <motion.div
                className="h-full w-full origin-top bg-primary"
                style={{ scaleY: scrollYProgress }}
              />
            </div>
            {steps.map((step, index) => {
              const isActive = index === active;
              const isCompleted = index < active;
              const isReached = isActive || isCompleted;
              return (
                <button
                  key={step.name}
                  type="button"
                  onClick={() => scrollToStep(index)}
                  aria-current={isActive ? "step" : undefined}
                  className={cn(
                    "relative flex w-full items-start gap-4 rounded-xl p-4 text-left transition-[background-color,color] duration-300",
                    isActive
                      ? "bg-accent/40 dark:bg-accent/20"
                      : "hover:bg-accent/20 dark:hover:bg-accent/10",
                  )}
                >
                  <span
                    className={cn(
                      "relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border font-numeric text-sm font-bold tabular-nums transition-[background-color,border-color,color] duration-300",
                      isReached
                        ? "border-primary bg-primary text-white"
                        : "border-border bg-background text-muted-foreground",
                    )}
                  >
                    <Num>{index + 1}</Num>
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span
                      className={cn(
                        "text-[11px] font-semibold uppercase tracking-wider transition-colors duration-300",
                        isActive ? "text-primary" : "text-muted-foreground/60",
                      )}
                    >
                      {stepLabel} <Num>{index + 1}</Num>
                    </span>
                    <span
                      className={cn(
                        "flex items-center gap-2 font-semibold transition-colors duration-300",
                        isActive ? "text-foreground" : "text-muted-foreground",
                      )}
                    >
                      <step.icon
                        className={cn(
                          "size-4 shrink-0 transition-colors duration-300",
                          isActive ? "text-primary" : "text-muted-foreground/70",
                        )}
                      />
                      {step.name}
                    </span>
                    {isActive && (
                      <span className="mt-1.5 text-sm text-muted-foreground">
                        {step.description}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative h-[26rem]">
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={active}
                variants={panelFadeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 overflow-hidden rounded-xl"
              >
                <TimelineItem item={steps[active]} index={active} isActive />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Scroll-driven process section: a sticky step rail on the left with a
 * progress line, and the active step card crossfading on the right.
 * Falls back to a stacked card grid on small screens and for users who
 * prefer reduced motion.
 */
export const ProcessScroller: React.FC<ProcessScrollerProps> = ({
  steps,
  stepLabel = "Step",
}) => {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <ProcessGrid steps={steps} animate={false} />;
  }

  return (
    <>
      <div className="w-full lg:hidden">
        <ProcessGrid steps={steps} animate />
      </div>
      <div className="hidden w-full lg:block">
        <ScrollStepper steps={steps} stepLabel={stepLabel} />
      </div>
    </>
  );
};
