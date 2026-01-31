"use client";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  ArrowUpRight,
  Cube,
  Pen,
  Users,
  VideoCamera,
  Rocket,
  TrendUp,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import Link from "next/link";
import { motion } from "motion/react";
import { staggerChildren, serviceItemVariants } from "@/lib/animations";

const moreServices = [
  {
    title: "Video Production",
    description: "High-quality demos, tutorials, and explainer videos",
    href: "/video-production",
    icon: VideoCamera,
  },
  {
    title: "Organic Campaign",
    description: "Viral content across X, LinkedIn, Reddit & Dev.to",
    href: "/organic-campaign",
    icon: TrendUp,
  },
  {
    title: "Product Launch",
    description: "End-to-end launch strategy and execution",
    href: "/product-launch",
    icon: Rocket,
  },
  {
    title: "Audit Services",
    description: "DX audits, docs review, and API usability",
    href: "/audit-services",
    icon: MagnifyingGlass,
  },
];

export default function Services() {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        id="work"
        className=" mb-28 px-4 py-20 relative"
      >
        <div className="bottom-[-10rem] md:bottom-[-18rem] z-[-1] left-[-0%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary to-primary/80 blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out md:size-[30rem] md:h-[40rem] md:w-[10rem] rotate-[60deg]"></div>
        <div className="top-[-10rem] md:top-[-18rem] z-[-1] right-[-0%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary to-primary/80 blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out md:size-[30rem] md:h-[40rem] md:w-[10rem] rotate-[60deg]"></div>
        <motion.div
          variants={serviceItemVariants}
          className="flex flex-col z-[20] items-center gap-4 justify-center"
        >
          <Badge className="text-sm font-medium bg-gradient-to-r from-primary to-primary1 text-white pb-1 flex gap-2 items-center">
            <Cube weight="fill" className="size-4" /> Services
          </Badge>
          <div className="text-5xl max-sm:text-4xl font-medium text-center">What we do?</div>
          <p className="text-center text-base max-sm:text-sm mt-2 max-w-2xl">
            We craft technical content, DevRel programs, and growth campaigns
            that educate developers, build trust, and drive product adoption.
          </p>
        </motion.div>
        <div className="flex flex-col max-w-7xl mx-auto">
          <motion.div
            variants={serviceItemVariants}
            className="flex relative items-center gap-[2%] w-full mt-20 justify-center md:-space-x-20 flex-col md:flex-row"
          >
            <Link
              href={"/blog-as-service"}
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
                <div className="flex gap-2 flex-wrap">
                  <Badge className="w-fit bg-accent text-foreground">
                    1M+ views
                  </Badge>
                  <Badge className="w-fit bg-accent text-foreground">
                    30+ teams
                  </Badge>
                </div>
                <p className="text-4xl font-light text-left">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br font-extrabold from-white via-primary/80 to-white">
                    Blogs
                  </span>{" "}
                  as a<br /> Service
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Developer-focused technical content that builds trust and drives adoption.
                </p>
              </div>
            </Link>

            <Link
              href={"/devrel-as-service"}
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
                <div className="flex gap-2 flex-wrap">
                  <Badge className="w-fit bg-accent text-foreground">
                    10+ events
                  </Badge>
                  <Badge className="w-fit bg-accent text-foreground">
                    #1 PH Launch
                  </Badge>
                </div>
                <p className="text-4xl font-light text-left">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br font-extrabold from-white via-primary/80 to-white">
                    DevRel
                  </span>{" "}
                  as a<br /> Service
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  End-to-end DevRel programs from content to community management.
                </p>
              </div>
            </Link>
            <div className="top-1/2 -translate-y-1/2 z-[-1] left-[50%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary/80 to-primary/50 blur-[8em] rounded-full transition-all translate-x-[-50%] duration-700 ease-out md:size-[25rem] w-[20rem] h-[40rem] rotate-[0deg]"></div>
          </motion.div>

          {/* More Services Grid */}
          <motion.div
            variants={serviceItemVariants}
            className="mt-24 z-[20]"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2">More Services</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive solutions for developer growth and engagement
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {moreServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="border relative group overflow-hidden hover:border-primary hover:-translate-y-2 duration-500 rounded-lg flex flex-col items-start gap-3 p-4 bg-background/80 backdrop-blur-md"
                >
                  <div className="h-32 w-12 absolute bg-accent/20 duration-700 -top-8 rotate-[10deg] -left-16 group-hover:left-[12rem]"></div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center bg-accent dark:bg-accent/50 justify-center size-10 p-2 rounded-lg">
                      <service.icon className="size-6 text-primary" weight="fill" />
                    </div>
                    <div className="text-base font-semibold">{service.title}</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="flex items-center text-sm text-primary font-medium mt-auto">
                    Learn more <ArrowUpRight className="size-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Stats Banner */}
          <motion.div
            variants={serviceItemVariants}
            className="mt-16 z-[20] border rounded-xl p-6 md:p-8 bg-gradient-to-br from-primary/5 to-primary/10 max-w-5xl mx-auto w-full"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground mt-1">Content Views</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">35+</div>
                <div className="text-sm text-muted-foreground mt-1">Partner Companies</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">50%</div>
                <div className="text-sm text-muted-foreground mt-1">Cost Savings</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">70%+</div>
                <div className="text-sm text-muted-foreground mt-1">Client Retention</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
