import { Data } from "@/data";
import { Badge } from "../ui/badge";
import { IconCrown, IconSettings } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Particles } from "../ui/particles";
import UserAvatarCollection from "./user-avatar-collection";
import Graph from "../ui/svgs/graph";
import SemiCircularGraph from "../ui/svgs/semi-circular-graph";
import { NumberTicker } from "../magicui/number-ticker";
import CollaboarationIllustration from "../collaboaration-illustration";
import SupportIllustration from "../support-illustration";
export default function Features() {
  return (
    <div
      id="why-us"
      className="flex flex-col max-w-7xl px-4 mx-auto items-center mb-44"
    >
      <div className="flex flex-col items-center gap-4 justify-center">
        <Badge className="text-sm font-medium pb-1 flex gap-2 items-center">
          <IconCrown className="size-4" /> Features
        </Badge>
        <div className="text-5xl font-medium text-center">
          Why Work with Us?
        </div>
        <p className="text-center text-base mt-2 ">
          Here you will see what we do and what we have to offer to you.
          <br />
          Explore and make a call directly to our HQ.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 mt-20">
        {Data.Features.map((feature, index) => (
          <div
            key={index}
            className={cn(
              "bg-accent/50 hover:shadow-xl transition-all duration-700 rounded-[2rem] p-2 min-w-full min-h-[25rem] group",
              index === 0 && "md:col-span-2",
              index === 3 && "md:col-span-2"
            )}
          >
            <div
              className={cn(
                "rounded-[1.5em] bg-background h-full transition-all duration-700 relative overflow-hidden w-full p-8 flex flex-col items-start"
              )}
            >
              {feature.title.toLowerCase() === "testimonials" && (
                <UserAvatarCollection />
              )}
              {feature.title.toLowerCase() === "expertise" && (
                <IconSettings className=" absolute bottom-[-6rem] text-primary rotate-0 transition-all duration-700 group-hover:rotate-45 left-1/2 -translate-x-1/2 size-60 " />
              )}
              {feature.title.toLowerCase() === "results" && (
                <Graph className=" absolute bottom-[-3rem] left-1/2 -translate-x-1/2 size-60 " />
              )}
              {feature.title.toLowerCase() === "quality" && (
                <SemiCircularGraph className=" absolute bottom-[-5rem] md:bottom-[-10rem] left-1/2 -translate-x-1/2 size-[12rem] md:size-[22rem] " />
              )}
              {feature.title.toLowerCase() === "collaboration" && (
                <CollaboarationIllustration className="absolute bottom-[0rem] md:bottom-[3rem] left-1/2 w-full -translate-x-1/2 " />
              )}
              {feature.title.toLowerCase() === "support" && (
                <SupportIllustration className="absolute bottom-[0rem] md:bottom-[2rem] left-1/2 w-full -translate-x-1/2 " />
              )}

              {feature.title.toLowerCase() === "experience" && (
                <div className="absolute flex flex-col items-center justify-center bottom-[2rem] left-1/2 -translate-x-1/2">
                  <div className="flex items-center  gap-2">
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
              )}
              <div
                className={cn(
                  "bottom-[-10rem] md:bottom-[-29rem] group-hover:opacity-100 opacity-0 z-[10] absolute bg-gradient-to-t from-primary/10 dark:from-primary to-orange-200 dark:to-orange-900/90  blur-[6em] rounded-xl transition-all  duration-700 ease-out w-[10rem] md:w-[30rem] h-[20rem] md:h-[30rem] rotate-[54deg]",
                  index % 2 === 0
                    ? "right-[-20%] md:right-[-50%] "
                    : "left-[0%] translate-x-[-50%]",
                  index === 0 && "left-[50%] translate-x-[-50%]",
                  index === 3 && "left-[50%] translate-x-[-50%]"
                )}
              ></div>

              <Particles
                className="absolute h-screen opacity-0 group-hover:opacity-100 transition-all duration-700 inset-0 z-0"
                quantity={100}
                ease={80}
                color={"#f97316"}
                refresh
              />
              <div className="flex items-start flex-col gap-2 rounded-2xl drop-shadow-lg">
                <div className="">
                  <feature.icon className="size-8" />
                </div>

                <div className="text-xl md:text-2xl font-semibold">
                  {feature.title}
                </div>
              </div>

              <p className="text-muted-foreground text-sm mt-1 text-left">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
