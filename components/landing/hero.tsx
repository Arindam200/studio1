"use client";
import { Button } from "@/components/ui/button";
import { ArrowDownRight, Calendar } from "@phosphor-icons/react";
import FloatingSvgs from "./floating-svgs";
import HeroRightGrids from "../ui/hero-right-grids";
import HeroLeftGrids from "../ui/hero-left-grids";
import { Badge } from "@/components/ui/badge";
import { Building, Buildings, Star } from "@phosphor-icons/react/dist/ssr";
import { Data } from "@/data";
import Image from "next/image";
import { BuildingIcon } from "lucide-react";
import { Avatar } from "@radix-ui/react-avatar";
import AvatarComponent from "./avatar-component";
import RotatingPeople from "./rotating-people";
import { Devto, YC } from "@/constants/image";
import { motion } from "framer-motion";

export default function Hero() {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  // Animation variants
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const testimonialVariant = {
    hidden: {
      opacity: 0,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const createFloatingAnimation = (delay: number, rotate: number) => ({
    y: [0, -10, 0],
    // Include the rotation in the animation
    rotate: rotate,
    transition: {
      y: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: delay,
      },
      // Make rotation static (not animated)
      rotate: {
        duration: 0,
      },
    },
  });

  return (
    <section id="hero" className="relative h-fit">
      {/* <div className="md:block opacity-30 hidden">
        <HeroLeftGrids />
        <div className="hidden lg:block absolute bottom-0 z-[100] w-[30%] h-[15rem] bg-gradient-to-t from-background to-transparent"></div>
        <div className="hidden lg:block absolute bottom-0 z-[100] w-20 h-[40rem] bg-gradient-to-tr from-background/80 via-background/5 to-transparent"></div>
      </div>
      <div className=" md:block opacity-50 hidden">
        <HeroRightGrids />
        <div className="lg:block hidden absolute bottom-0 right-0 z-[100] w-[30%] h-[15rem] bg-gradient-to-t from-background to-transparent"></div>
        <div className="lg:block hidden absolute bottom-0 right-0 z-[100] w-20 h-[40rem] bg-gradient-to-tl from-background/80 via-background/5 to-transparent"></div>
      </div> */}
      <div className="relative max-w-7xl h-fit mx-auto pb-44 md:pb-28 px-4">
        <div className="max-w-7xl relative mt-[4rem] h-[40rem] py-20 mx-auto">
          <FloatingSvgs />
          <motion.div
            className="flex flex-col items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div
              className="flex flex-col items-center justify-center"
              variants={staggerChildren}
            >
              <motion.div variants={fadeInUp}>
                <Badge className="pb-1 shadow-md mb-2 bg-gradient-to-r from-primary via-primary1 to-primary1/20 text-white">
                  <Building weight="fill" className="size-5 mr-2" />
                  Trusted by Companies
                </Badge>
              </motion.div>

              <motion.div
                className="text-4xl font-semibold font-primary sm:text-5xl lg:text-[4rem] text-center md:font-medium"
                variants={fadeInUp}
              >
                Empowering Your Voice <br className="hidden md:block" /> in the
                Developer Community
              </motion.div>

              <motion.div
                className="sm:text-xl text-base mt-8 text-neutral-600 dark:text-neutral-500 text-center"
                variants={fadeInUp}
              >
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
              </motion.div>

              <motion.div
                className="mt-8 flex sm:flex-row flex-col sm:justify-center w-full gap-4 items-center"
                variants={fadeInUp}
              >
                <Button className=" w-full sm:w-44  h-12">
                  Book a Call <Calendar className="size-14" />
                </Button>
                <Button variant="secondary" className=" w-full sm:w-44 h-12">
                  Learn More <ArrowDownRight className="size-4" />
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <AvatarComponent className="mt-6 md:mb-0" />
              </motion.div>
              {/* <div className="mt-4 ">15+ overall work</div> */}
            </motion.div>
          </motion.div>
        </div>

        <div className="bottom-[-10rem] md:bottom-[-2rem] z-[-1] left-[20%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary/80 to-primary/50 blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out md:size-[30rem] md:h-[20rem] md:w-[10rem] rotate-[-40deg]"></div>
        {/* <div className="bottom-[-10rem] md:bottom-[0rem] z-[-1] right-[0%] absolute bg-gradient-to-t opacity-50 dark:opacity-70 from-primary dark:to-primary/80 to-primary/50 blur-[6em] rounded-md transition-all  duration-700 ease-out md:size-[15rem] size-[10rem] rotate-[-40deg]"></div> */}

        <motion.div
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          animate={createFloatingAnimation(0, -25)} // Combining floating animation
          viewport={{ once: false, amount: 0.2 }}
          className="z-[120] lg:block hidden bottom-[8rem] left-[53%] translate-x-[-50%] absolute size-[2.5rem] bg-gradient-to-t from-primary/40 to-primary/60 p-1 rounded-md rotate-[25deg]"
        >
          <Image src={YC} alt="YC" width={100} height={100} />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          animate={createFloatingAnimation(1, 25)} // Combining floating animation
          viewport={{ once: false, amount: 0.2 }}
          className="z-[120] lg:block hidden bottom-[-4rem] left-[63%] translate-x-[-50%] absolute size-[2.5rem] bg-gradient-to-t from-primary/40 to-primary/60 p-1 rounded-md -rotate-[25deg]"
        >
          <Image src={Devto} alt="YC" width={100} height={100} />
        </motion.div>

        <div className="top-[-10rem] md:top-[-18rem] z-[-1] left-[-20%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary/80 to-primary/80 blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out md:size-[30rem] md:h-[40rem] md:w-[10rem] -rotate-[60deg]"></div>
        <div className="top-[-10rem] md:top-[-18rem] z-[-1] right-[-20%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary/80 to-primary/80 blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out md:size-[30rem] md:h-[40rem] md:w-[10rem] rotate-[60deg]"></div>
        {/* <div className="top-[-18rem] md:top-[-23rem] z-[120] left-[50%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary/80 to-primary/50 blur-[7em] rounded-full transition-all translate-x-[-50%] duration-700 ease-out md:size-[25rem] size-[20rem] rotate-[0deg]"></div> */}

        <motion.div
          className="border shadow-xl dark:shadow-none dark:border md:block hidden max-w-[26rem] p-4 bg-white/10 backdrop-blur-xl z-[101] rounded-xl h-60 absolute -bottom-16 left-[25%] lg:left-[30%] -translate-x-1/2 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={testimonialVariant}
        >
          <div className="flex items-center justify-center">
            <Image
              src={Data.Testimonials[2].avatar}
              alt={Data.Testimonials[2].name}
              width={140}
              height={140}
              className="rounded-full size-16"
            />
          </div>
          <div className="flex flex-col text-center mt-2 text-sm items-center justify-center">
            {Data.Testimonials[2].content}
          </div>
          <div className="flex px-3 py-2 rounded-md items-center gap-1 justify-center">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="size-4 text-primary" weight="fill" />
            ))}
          </div>
          <div className="text-sm font-semibold  text-center">
            -{Data.Testimonials[2].name}
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={testimonialVariant}
          className="border shadow-xl dark:shadow-none dark:border flex md:mt-0 md:max-w-[26rem] p-4 bg-white/10 backdrop-blur-xl z-[101] rounded-xl h-60 md:h-56 items-center justify-center flex-col absolute bottom-[-4rem] md:bottom-[2rem] left-1/2 -translate-x-1/2 md:translate-x-0  md:left-[60%] w-full"
        >
          <div className="flex items-center justify-center">
            <Image
              src={Data.Testimonials[4].avatar}
              alt={Data.Testimonials[4].name}
              width={140}
              height={140}
              className="rounded-full size-16"
            />
          </div>
          <div className="flex flex-col text-center mt-2 text-sm items-center justify-center">
            {Data.Testimonials[4].content}
          </div>
          <div className="flex px-3 py-2 rounded-md items-center gap-1 justify-center">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="size-4 text-primary" weight="fill" />
            ))}
          </div>
          <div className="text-sm font-semibold  text-center">
            -{Data.Testimonials[4].name}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
