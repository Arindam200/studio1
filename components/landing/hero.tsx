"use client";
import { Button } from "@/components/ui/button";
import { ArrowDownRight, Calendar } from "@phosphor-icons/react";
import FloatingSvgs from "./floating-svgs";
import HeroLeftGrids from "../ui/hero-left-grids";
import HeroRightGrids from "../ui/hero-right-grids";
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* <div className="md:block hidden">
        <HeroLeftGrids />
        <div className="hidden lg:block absolute bottom-0 z-[100] w-[30%] h-[15rem] bg-gradient-to-t from-background to-transparent"></div>
        <div className="hidden lg:block absolute bottom-0 z-[100] w-20 h-[40rem] bg-gradient-to-tr from-background/80 via-background/5 to-transparent"></div>
      </div>
      <div className=" md:block hidden">
        <HeroRightGrids />
        <div className="lg:block hidden absolute bottom-0 right-0 z-[100] w-[30%] h-[15rem] bg-gradient-to-t from-background to-transparent"></div>
        <div className="lg:block hidden absolute bottom-0 right-0 z-[100] w-20 h-[40rem] bg-gradient-to-tl from-background/80 via-background/5 to-transparent"></div>
      </div> */}

      <div className="max-w-7xl relative mt-20 h-[40rem] py-20 mx-auto">
        <FloatingSvgs />
        <div className="px-4 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="text-4xl font-semibold font-primary sm:text-5xl lg:text-[4rem] text-center md:font-medium">
              Empowering Your Voice <br className="hidden md:block" /> in the
              Developer Community
            </div>

            <div className="sm:text-xl text-base mt-8 text-neutral-600 dark:text-neutral-500 text-center">
              {/* make technical , drive result a span */}
              Technical
              <span className="font-semibold text-foreground">
                {" "}
                content
              </span>{" "}
              and DevRel{" "}
              <span className="font-semibold text-foreground">
                strategies
              </span>{" "}
              <br /> that drive
              <span className="font-semibold text-foreground">
                {" "}
                results
              </span>{" "}
            </div>
            <div className="mt-8 flex sm:flex-row flex-col sm:justify-center w-full gap-4 items-center">
              <Button className="h-12 md:h-14 w-full sm:w-44  text-base sm:text-lg">
                Book a Call <Calendar className="size-14" />
              </Button>
              <Button
                variant="secondary"
                className="h-12 md:h-14 w-full sm:w-44 text-base sm:text-lg"
              >
                Learn More <ArrowDownRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="bottom-[-18rem] md:bottom-[-25rem] z-[101] left-[50%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary/80 to-primary/50 blur-[7em] rounded-full transition-all translate-x-[-50%] duration-700 ease-out md:size-[30rem] size-[20rem] rotate-[0deg]"></div>

        {/* <div className="top-[-10rem] md:top-[-2rem] z-[-1] left-[20%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary/80 to-primary/50 blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out md:size-[30rem] md:h-[20rem] md:w-[10rem] rotate-[-40deg]"></div> */}

        {/* <div className="top-[-10rem] md:top-[-18rem] z-[-1] left-[10%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary/80 to-primary/80 blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out md:size-[30rem] md:h-[40rem] md:w-[10rem] -rotate-[60deg]"></div> */}
      </div>
    </section>
  );
}
