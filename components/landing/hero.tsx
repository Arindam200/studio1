import { Button } from "@/components/ui/button";
import { IconArrowDownRight, IconCalendarFilled } from "@tabler/icons-react";

export default function Hero() {
  return (
    <div className="max-w-7xl py-20 mx-auto">
      <div className="px-4 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="text-7xl text-center font-semibold">
            Empowering Your Voice <br /> in the Developer Community
          </div>
          <div className="text-xl mt-8 text-center">
            Technical Content and DevRel Strategies <br /> That Drive Results
          </div>
          <div className="mt-8 flex gap-4 items-center">
            <Button className="h-16 w-44  text-lg">
              Book a Call <IconCalendarFilled className="size-4" />
            </Button>
            <Button variant="outline" className="h-16 w-44 text-lg">
              Learn More <IconArrowDownRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
