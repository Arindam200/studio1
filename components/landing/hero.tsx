import { Button } from "@/components/ui/button";
import { IconArrowDownRight, IconCalendarFilled } from "@tabler/icons-react";
import HeroLeftGrids from "../ui/hero-left-grids";
import HeroRightGrids from "../ui/hero-right-grids";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="">
        <HeroLeftGrids />
        <div className="absolute bottom-0 z-[100] w-[30%] h-[15rem] bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute bottom-0 z-[100] w-20 h-[40rem] bg-gradient-to-tr from-background/80 via-background/5 to-transparent"></div>
      </div>
      <div>
        <HeroRightGrids />
        <div className="absolute bottom-0 right-0 z-[100] w-[30%] h-[15rem] bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute bottom-0 right-0 z-[100] w-20 h-[40rem] bg-gradient-to-tl from-background/80 via-background/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl relative mt-20 h-[40rem] py-20 mx-auto">
        <div className="px-4 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="text-7xl text-center font-medium">
              Empowering Your Voice <br /> in the Developer Community
            </div>
            <div className="text-xl mt-8 text-center">
              Technical Content and DevRel Strategies <br /> That Drive Results
            </div>
            <div className="mt-8 flex gap-4 items-center">
              <Button className="h-14 w-44  text-lg">
                Book a Call <IconCalendarFilled className="size-4" />
              </Button>
              <Button variant="secondary" className="h-14 w-44 text-lg">
                Learn More <IconArrowDownRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
