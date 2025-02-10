"use client";
import { Badge } from "../ui/badge";
import { Data } from "@/data";
import { cn } from "@/lib/utils";
import { abstractBg } from "@/constants/image";

import Image from "next/image";
import { Button } from "../ui/button";
import Flower from "../ui/svgs/flower";
import {
  ArrowUpRight,
  Cube,
  Package,
  Pen,
  Phone,
  Users,
} from "@phosphor-icons/react";

export default function Services() {
  const services = Data.Services;
  return (
    <>
      <section id="work" className="max-w-7xl mx-auto my-44 px-4">
        <div className="flex flex-col items-center gap-4 justify-center">
          <Badge className="text-sm font-medium pb-1 flex gap-2 items-center">
            <Cube className="size-4" /> Services
          </Badge>
          <div className="text-5xl font-medium">What we do?</div>
          <p className="text-center text-base mt-2 ">
            Here you will see what we do and what we have to offer to you.
            <br />
            Explore and make a call directly to our HQ.
          </p>
        </div>

        <div className="flex relative items-center gap-[1rem] mt-20 justify-center -space-x-10">
          <div className="shadow-xl border-2 dark:border transition-all duration-700 hover:-translate-y-4 h-[30rem] relative !w-[23rem] group rounded-lg overflow-hidden flex flex-col items-start bg-background/80 backdrop-blur-md justify-start p-8">
            <div className="absolute top-[-23rem] z-[101] delay-100 rotate-45 left-[-2rem] group-hover:top-[15rem] group-hover:left-[20rem] transition-all blur-[3em] duration-700 rounded-md h-[40rem] bg-white/50 opacity-30 w-[5rem] backdrop-blur-md"></div>

            <div className="-bottom-[18rem] -translate-y-1/2 z-[-1] left-1/2 absolute bg-gradient-to-t opacity-10 group-hover:opacity-100  from-primary/80 dark:to-primary/80 to-primary/20 blur-[4em] rounded-full transition-all translate-x-[-50%] duration-700 ease-out md:size-[15rem] size-[10rem] rotate-[0deg]"></div>

            <div className="flex-1 flex items-start justify-between w-full">
              <div className="flex items-center bg-accent dark:bg-accent/50 justify-center size-16 p-3 rounded-lg">
                <Users className="size-10" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Badge className="w-fit bg-accent text-foreground">
                14+ projects
              </Badge>
              <p className="text-4xl font-light text-left">
                <span className="text-transparent bg-clip-text  bg-gradient-to-br font-extrabold from-white via-primary/80 to-white">
                  DevRel
                </span>{" "}
                as a<br /> Service
              </p>

              {/* <p className="text-sm text-muted-foreground text-center">
                We are a team of experienced developers who are passionate about
                building great products.
              </p> */}
            </div>
          </div>
          <div className="shadow-xl border-2 dark:border transition-all duration-700 hover:translate-y-14 relative overflow-hidden group flex flex-col items-start p-8 bg-background/80 backdrop-blur-2xl h-[30rem] !w-[23rem] translate-y-20 rounded-lg">
            <div className="absolute top-[-23rem] z-[101] rotate-45 delay-100 left-[-2rem] group-hover:top-[15rem] group-hover:left-[20rem] transition-all blur-[3em] duration-700 rounded-md h-[40rem] bg-white/50 opacity-30 w-[5rem] backdrop-blur-md"></div>

            <div className="-bottom-[18rem] -translate-y-1/2 z-[-1] left-1/2 absolute bg-gradient-to-t opacity-10 group-hover:opacity-100  from-primary/80 dark:to-primary/80 to-primary/20 blur-[4em] rounded-full transition-all translate-x-[-50%] duration-700 ease-out md:size-[15rem] size-[10rem] rotate-[0deg]"></div>

            <div className="flex-1 flex items-start justify-between w-full">
              <div className="flex items-center bg-accent dark:bg-accent/50 justify-center size-16 p-3 rounded-lg">
                <Pen className="size-10" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Badge className="w-fit bg-accent text-foreground">
                5+ projects
              </Badge>
              <p className="text-4xl font-light text-left">
                <span className="text-transparent bg-clip-text bg-gradient-to-br font-extrabold from-white via-primary/80 to-white">
                  Blogs
                </span>{" "}
                as a<br /> Service
              </p>
            </div>
          </div>
          <div className="top-1/2 -translate-y-1/2 z-[-1] left-[50%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary/80 to-primary/50 blur-[7em] rounded-full transition-all translate-x-[-50%] duration-700 ease-out md:size-[20rem] size-[20rem] rotate-[0deg]"></div>
        </div>

        <div className="border rounded-lg flex md:flex-row flex-col items-start gap-3 md:items-end justify-between p-4 w-full mt-32 max-w-[45rem] mx-auto">
          <div className="flex flex-col items-start">
            <div className="flex flex-col items-start gap-2">
              <Package className="size-6 text-primary" />
              <div className="text-lg font-semibold ">More Services</div>
            </div>

            <div className="flex flex-col items-start">
              <div className="text-sm text-muted-foreground">
                We offer a wide range of services to help you grow your
                business.
              </div>
            </div>
          </div>
          <Button className="w-fit group-hover:bg-primary text-foreground hover:text-white bg-accent">
            Learn More <ArrowUpRight className="size-4 ml-2" />
          </Button>
        </div>
        {/* bentro grid */}

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-20">
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
                    <Phone className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-28 -rotate-[25deg] md:size-32" />
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
                      Learn More <ArrowUpRight className="size-4 ml-2" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div> */}
      </section>
    </>
  );
}
