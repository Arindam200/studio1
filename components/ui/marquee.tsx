import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
  
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
  /**
   * Whether to fade content at the edges
   * @default true
   */
  fade?: boolean;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  fade = true,
  ...props
}: MarqueeProps) {
  return (
    <div className="relative">
      <div
        {...props}
        className={cn(
          `group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]`,
          {
            "flex-row": !vertical,
            "flex-col": vertical,
          },
          fade &&
            !vertical &&
            "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
          fade &&
            vertical &&
            "[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]",
          className,
        )}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
              })}
            >
              {children}
            </div>
          ))}
      </div>
      {fade && !vertical ? (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background via-background/60 to-transparent shadow-[inset_-8px_0_12px_-6px_rgba(0,0,0,0.06)] dark:shadow-[inset_-8px_0_12px_-6px_rgba(0,0,0,0.25)] sm:w-28 md:w-36"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background via-background/60 to-transparent shadow-[inset_8px_0_12px_-6px_rgba(0,0,0,0.06)] dark:shadow-[inset_8px_0_12px_-6px_rgba(0,0,0,0.25)] sm:w-28 md:w-36"
          />
        </>
      ) : fade && vertical ? (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-background via-background/60 to-transparent shadow-[inset_0_-8px_12px_-6px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_-8px_12px_-6px_rgba(0,0,0,0.25)] sm:h-28 md:h-36"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-background via-background/60 to-transparent shadow-[inset_0_8px_12px_-6px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_8px_12px_-6px_rgba(0,0,0,0.25)] sm:h-28 md:h-36"
          />
        </>
      ) : null}
    </div>
  );
}
