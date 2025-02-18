"use client";
import { Badge } from "../ui/badge";
import { Data } from "@/data";
import { Button } from "../ui/button";
import { ArrowUpRight, Cube, Package, Pen, Users } from "@phosphor-icons/react";
import HeroRightGrids from "../ui/hero-right-grids";
import HeroLeftGrids from "../ui/hero-left-grids";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <section id="work" className="overflow-hidden mb-28 px-4 py-20 relative">
        <div className="flex flex-col z-[20] items-center gap-4 justify-center">
          <Badge className="text-sm font-medium bg-gradient-to-r from-primary to-primary1 text-white pb-1 flex gap-2 items-center">
            <Cube weight="fill" className="size-4" /> Services
          </Badge>
          <div className="text-5xl font-medium">What we do?</div>
          <p className="text-center text-base mt-2">
            Here you will see what we do and what we have to offer to you.
            <br />
            Explore and make a call directly to our HQ.
          </p>
        </div>
        <div className="flex flex-col max-w-7xl mx-auto">
          <div className="flex relative items-center gap-[2%] w-full mt-20 justify-center md:-space-x-20 flex-col md:flex-row">
            <Link
              href={"/blog-as-a-service"}
              className="shadow-xl border-2 dark:border transition-all duration-700 hover:-translate-y-4 h-[30rem] relative w-full max-w-[23rem] group rounded-lg overflow-hidden flex flex-col items-start bg-background/80 backdrop-blur-md justify-start p-8 mb-8 md:mb-0"
            >
              <div className="absolute top-[-23rem] z-[101] delay-100 rotate-45 left-[-2rem] group-hover:top-[15rem] group-hover:left-[20rem] transition-all blur-[3em] duration-700 rounded-md h-[40rem] bg-white/50 opacity-30 w-[5rem] backdrop-blur-md"></div>

              <div className="-bottom-[18rem] -translate-y-1/2 z-[-1] left-1/2 absolute bg-gradient-to-t opacity-10 group-hover:opacity-100 from-primary/80 dark:to-primary/80 to-primary/20 blur-[4em] rounded-full transition-all translate-x-[-50%] duration-700 ease-out md:size-[15rem] size-[10rem] rotate-[0deg]"></div>

              <div className="flex-1 flex items-start justify-between w-full">
                <div className="flex items-center bg-accent dark:bg-accent/50 justify-center size-16 p-3 rounded-lg">
                  <Pen className="size-10" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Badge className="w-fit bg-accent text-foreground">
                  14+ projects
                </Badge>
                <p className="text-4xl font-light text-left">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br font-extrabold from-white via-primary/80 to-white">
                    Blogs
                  </span>{" "}
                  as a<br /> Service
                </p>
              </div>
            </Link>

            <Link
              href={"/devrel-as-a-service"}
              className="shadow-xl border-2 dark:border transition-all duration-700 hover:translate-y-4 relative overflow-hidden group flex flex-col items-start p-8 bg-background/80 backdrop-blur-2xl h-[30rem] w-full  max-w-[23rem] md:translate-y-20 rounded-lg"
            >
              <div className="absolute top-[-23rem] z-[101] rotate-45 delay-100 left-[-2rem] group-hover:top-[15rem] group-hover:left-[20rem] transition-all blur-[3em] duration-700 rounded-md h-[40rem] bg-white/50 opacity-30 w-[5rem] backdrop-blur-md"></div>

              <div className="-bottom-[18rem] -translate-y-1/2 z-[-1] left-1/2 absolute bg-gradient-to-t opacity-10 group-hover:opacity-100 from-primary/80 dark:to-primary/80 to-primary/20 blur-[4em] rounded-full transition-all translate-x-[-50%] duration-700 ease-out md:size-[15rem] size-[10rem] rotate-[0deg]"></div>

              <div className="flex-1 flex items-start justify-between w-full">
                <div className="flex items-center bg-accent dark:bg-accent/50 justify-center size-16 p-3 rounded-lg">
                  <Users className="size-10" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Badge className="w-fit bg-accent text-foreground">
                  5+ projects
                </Badge>
                <p className="text-4xl font-light text-left">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br font-extrabold from-white via-primary/80 to-white">
                    DevRel
                  </span>{" "}
                  as a<br /> Service
                </p>
              </div>
            </Link>
            <div className="top-1/2 -translate-y-1/2 z-[-1] left-[50%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary/80 to-primary/50 blur-[8em] rounded-full transition-all translate-x-[-50%] duration-700 ease-out md:size-[25rem] w-[20rem] h-[40rem] rotate-[0deg]"></div>
          </div>

          <div className="border z-[20] rounded-lg flex md:flex-row flex-col items-start gap-3 md:items-end justify-between p-4 w-full mt-32 max-w-[45rem] mx-auto">
            <div className="flex flex-col items-start">
              <div className="flex flex-col items-start gap-2">
                <Package className="size-6 text-primary" />
                <div className="text-lg font-semibold">More Services</div>
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
        </div>
      </section>
    </>
  );
}
