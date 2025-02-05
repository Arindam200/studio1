import {
  IconArrowUpRight,
  IconPackage,
  IconPackages,
  IconPlus,
  IconSparkles,
  IconSpeakerphone,
} from "@tabler/icons-react";
import { Badge } from "../ui/badge";
import { Data } from "@/data";
import { cn } from "@/lib/utils";
import { abstractBg } from "@/constants/image";
import Image from "next/image";
import { Button } from "../ui/button";
import Flower from "../ui/svgs/flower";

export default function Services() {
  const services = Data.Services;
  return (
    <>
      <section className="max-w-7xl mx-auto my-44 px-4">
        <div className="flex flex-col items-center gap-4 justify-center">
          <Badge className="text-sm font-medium pb-1 flex gap-2 items-center">
            <IconPackages className="size-4" /> Services
          </Badge>
          <div className="text-5xl font-medium">What we do?</div>
          <p className="text-center text-base mt-2 ">
            Here you will see what we do and what we have to offer to you.
            <br />
            Explore and make a call directly to our HQ.
          </p>
        </div>

        {/* bentro grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "border-2 p-2 rounded-[2rem] min-h-[25rem] group flex flex-col",
                index === 1 && "sm:col-span-2 lg:col-span-1 lg:row-span-2"
              )}
            >
              {index === 1 ? (
                <div className="bg-primary h-full relative rounded-3xl">
                  <div className="absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-accent size-56 md:size-80 rounded-full">
                    <Flower className="w-full aspect-square" />
                    <IconSpeakerphone className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-28 -rotate-[25deg] md:size-32" />
                  </div>

                  <div className="py-4 md:p-20 h-full text-white dark:text-foreground flex flex-col items-center justify-between">
                    <div className="text-2xl md:text-3xl font-semibold">
                      {service.title}
                    </div>

                    <div className="text-lg text-center">
                      {service.description}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-accent/40 h-full rounded-3xl flex flex-col">
                  <div className="group-hover:bg-primary bg-background border-2 transition-all duration-300 z-10 relative p-4 h-32 sm:h-40 border-accent rounded-t-3xl">
                    <div className="p-4 absolute top-4 left-4 z-20 group-hover:bg-background bg-primary transition-all duration-300 flex items-center justify-center size-16 sm:size-20 rounded-3xl">
                      <service.icon className="size-6 sm:size-8 text-white group-hover:text-black dark:group-hover:text-white transition-all duration-300" />
                    </div>
                    <Image
                      src={abstractBg}
                      width={1000}
                      height={1000}
                      alt="abstract"
                      className="absolute z-10 top-0 opacity-0 group-hover:opacity-15 transition-all duration-200 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex p-4 flex-col gap-2 flex-grow">
                    <div className="text-xl sm:text-4xl font-medium">
                      {service.title}
                    </div>
                    <div className="text-sm sm:text-base text-muted-foreground">
                      {service.description}
                    </div>
                    <Button className="w-fit mt-auto group-hover:bg-primary text-foreground group-hover:text-white bg-accent">
                      Learn More <IconArrowUpRight className="size-4 ml-2" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
