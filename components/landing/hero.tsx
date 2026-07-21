"use client";
import { Button } from "@/components/ui/button";
import { ArrowDownRight } from "@phosphor-icons/react";
import { IconPhoneFilled } from "@tabler/icons-react";
import FloatingSvgs, { floatingTileSurface } from "./floating-svgs";
import {
  landingHeroGlowBottom,
  landingHeroGlowLeft,
  landingHeroGlowRight,
} from "@/lib/shadows";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Building, Star } from "@phosphor-icons/react/dist/ssr";
import { Data } from "@/data";
import Image from "next/image";
import AvatarComponent from "./avatar-component";
import { Num, NumericText } from "@/components/ui/num";
import { Devto, YC } from "@/constants/image";
import { motion } from "motion/react";
import {
  fadeInUp,
  staggerChildren,
  iconVariants,
  createFloatingAnimation,
} from "@/lib/animations";

const testimonialStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1.0,
    },
  },
};

export default function Hero() {
  const testimonialGlass = cn(
    "border border-border/50 dark:border-white/[0.08]",
    "bg-gradient-to-br from-background/95 via-background/90 to-primary/[0.06]",
    "dark:from-white/[0.04] dark:to-white/[0.01]",
    "backdrop-blur-xl",
    "shadow-elevated-card dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]",
    "ring-1 ring-primary/10 dark:ring-white/[0.04]",
    "text-foreground",
  );

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
        <div className="max-w-7xl relative mt-[4rem] h-[44rem] py-20 mx-auto">
          <FloatingSvgs />
          <motion.div
            className="flex flex-col items-center justify-center mt-10"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div
              className="flex flex-col items-center justify-center"
              variants={staggerChildren}
            >
              <motion.div variants={fadeInUp}>
                <Badge className="pb-1 shadow-md mb-2 bg-gradient-to-r from-primarySurface via-primary1 to-primary1/20 text-white font-normal dark:from-primary dark:via-primary1 dark:to-primary1/60">
                  <Building weight="fill" className="size-5 mr-2" />
                  Trusted by <Num>35+</Num> DevTool and SaaS Teams
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl font-normal font-primary tracking-tight sm:text-5xl lg:text-[4rem] text-center text-foreground/90 leading-[1.1]"
                variants={fadeInUp}
              >
                Technical Content and{" "}
                <span className="serif-accent font-accent italic font-normal text-primary dark:text-primary/75 text-[0.92em]">
                  DevRel
                </span>
                <br />
                Partner for{" "}
                <span className="serif-accent font-accent italic font-normal text-primary dark:text-primary/75 text-[0.92em]">
                  DevTools
                </span>
              </motion.h1>

              <motion.div
                className="sm:text-xl text-base text-balance mt-8 text-neutral-600 dark:text-neutral-300 text-center"
                variants={fadeInUp}
              >
                {/* For mobile screens - no spans */}
                <div className="sm:hidden">
                  We help SaaS and devtool teams publish tutorials, docs, and
                  DevRel programs that rank in search, activate developers, and
                  build long-term trust.
                </div>

                {/* For larger screens - with spans */}
                <div className="hidden sm:block">
                  We help
                  <span className="font-medium text-foreground">
                    {" "}
                    SaaS and devtool teams
                  </span>{" "}
                  publish
                  <span className="font-medium text-foreground">
                    {" "}
                    tutorials, docs, and DevRel programs
                  </span>
                  <br />
                  that rank in search, activate
                  <span className="font-medium text-foreground">
                    {" "}
                    developers
                  </span>
                  , and build
                  <span className="font-medium text-foreground">
                    {" "}
                    long-term trust
                  </span>
                  .
                </div>
              </motion.div>

              <motion.div
                className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
                variants={fadeInUp}
              >
                <Button
                  variant="gradient"
                  size="cta"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a
                    href="https://cal.com/studio1/collab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Strategy Call <IconPhoneFilled />
                  </a>
                </Button>
                <Button
                  variant="outline-subtle"
                  size="cta"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a href="/blog-as-service">
                    See Our Services <ArrowDownRight />
                  </a>
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-10">
                <AvatarComponent />
              </motion.div>
              {/* <div className="mt-4 ">15+ overall work</div> */}
            </motion.div>
          </motion.div>
        </div>

        <div className={landingHeroGlowBottom}></div>
        {/* <div className="bottom-[-10rem] md:bottom-[0rem] z-[-1] right-[0%] absolute bg-gradient-to-t opacity-50 dark:opacity-70 from-primary dark:to-primary/80 to-primary/50 blur-[6em] rounded-md transition-all  duration-700 ease-out md:size-[15rem] size-[10rem] rotate-[-40deg]"></div> */}

        <motion.div
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          animate={createFloatingAnimation(0, -12)}
          viewport={{ once: false, amount: 0.2 }}
          className={cn(
            floatingTileSurface,
            "absolute z-[120] hidden size-[2.5rem] translate-x-[-50%] items-center justify-center overflow-hidden rounded-xl p-1 lg:bottom-[13rem] lg:left-[20%] lg:block"
          )}
        >
          <Image
            src={YC}
            alt="Y Combinator"
            width={100}
            height={100}
            className="size-full object-contain"
          />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          animate={createFloatingAnimation(1, 12)}
          viewport={{ once: false, amount: 0.2 }}
          className={cn(
            floatingTileSurface,
            "absolute z-[120] hidden size-[2.5rem] translate-x-[-50%] items-center justify-center overflow-hidden rounded-xl p-1 lg:bottom-[13rem] lg:left-[80%] lg:block"
          )}
        >
          <Image
            src={Devto}
            alt="Dev.to"
            width={100}
            height={100}
            className="size-full object-contain"
          />
        </motion.div>

        <div className={landingHeroGlowLeft}></div>
        <div className={landingHeroGlowRight}></div>
        {/* <div className="top-[-18rem] md:top-[-23rem] z-[120] left-[50%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary/80 to-primary/50 blur-[7em] rounded-full transition-all translate-x-[-50%] duration-700 ease-out md:size-[25rem] size-[20rem] rotate-[0deg]"></div> */}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={testimonialStagger}
          className="contents"
        >
          <motion.div
            variants={fadeInUp}
            className={`${testimonialGlass} md:block hidden max-w-[26rem] p-4 z-[101] rounded-xl h-60 absolute -bottom-12 md:-bottom-8 left-[20%] md:left-[14%] lg:left-[16%] -translate-x-1/2 w-full`}
          >
          <div className="flex items-center justify-center">
            <Image
              src={Data.Testimonials[6].avatar}
              alt={Data.Testimonials[6].name}
              width={140}
              height={140}
              className="rounded-full size-16"
            />
          </div>
          <div className="flex flex-col text-center mt-2 text-sm items-center justify-center">
            <NumericText>{Data.Testimonials[6].content}</NumericText>
          </div>
          <div className="flex px-3 py-2 rounded-md items-center gap-1 justify-center">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="size-4 text-primary" weight="fill" />
            ))}
          </div>
          <div className="text-sm font-medium text-center">
            -{Data.Testimonials[6].name}
          </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className={`${testimonialGlass} flex md:mt-0 max-sm:w-[90%] md:max-w-[26rem] p-4 z-[101] rounded-xl h-60 md:h-56 items-center justify-center flex-col absolute bottom-[-4rem] md:bottom-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-[10%] lg:right-[14%] w-full`}
          >
          <div className="flex items-center justify-center">
            <Image
              src={Data.Testimonials[8].avatar}
              alt={Data.Testimonials[8].name}
              width={140}
              height={140}
              className="rounded-full size-16"
            />
          </div>
          <div className="flex flex-col text-center mt-2 text-sm items-center justify-center">
            <NumericText>{Data.Testimonials[8].content}</NumericText>
          </div>
          <div className="flex px-3 py-2 rounded-md items-center gap-1 justify-center">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="size-4 text-primary" weight="fill" />
            ))}
          </div>
          <div className="text-sm font-medium text-center">
            -{Data.Testimonials[8].name}
          </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
