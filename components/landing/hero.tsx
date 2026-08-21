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
import { heroFeaturedTestimonials } from "@/data/home";
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
import { useTranslations } from "next-intl";

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
  const t = useTranslations("Hero");
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
      <div className="relative mx-auto h-fit max-w-7xl px-4 pb-20 md:pb-28">
        <div className="relative mx-auto mt-[4rem] min-h-[40rem] max-w-7xl py-16 md:h-[44rem] md:py-20">
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
                  <span className="inline-flex items-baseline gap-1">
                    <span>{t("badgePrefix")}</span>
                    <Num>35+</Num>
                    <span className="sm:hidden">{t("badgeSuffixShort")}</span>
                    <span className="hidden sm:inline">{t("badgeSuffix")}</span>
                  </span>
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl font-normal font-primary tracking-tight sm:text-5xl lg:text-[4rem] text-center text-foreground/90 leading-[1.1]"
                variants={fadeInUp}
              >
                {t("titleLine1")}{" "}
                <span className="serif-accent font-accent italic font-normal text-primary dark:text-primary/75 text-[0.92em]">
                  DevRel
                </span>
                {" "}
                <br />
                {t("titleLine2")}{" "}
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
                  {t("description")}
                </div>

                {/* For larger screens - with spans */}
                <div className="hidden sm:block">
                  {t.rich("descriptionRich", {
                    strong: (chunks) => (
                      <span className="font-normal text-foreground">
                        {chunks}
                      </span>
                    ),
                    br: () => <br />,
                  })}
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
                    {t("primaryCta")} <IconPhoneFilled />
                  </a>
                </Button>
                <Button
                  variant="outline-subtle"
                  size="cta"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a href="/#service-offerings">
                    {t("secondaryCta")} <ArrowDownRight />
                  </a>
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-10">
                <AvatarComponent />
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className={cn(
                  testimonialGlass,
                  "mt-10 flex w-full max-w-[23rem] flex-col items-center justify-center rounded-xl p-4 md:hidden",
                )}
              >
                <div className="flex items-center justify-center">
                  <Image
                    src={heroFeaturedTestimonials.mobile.avatar}
                    alt={heroFeaturedTestimonials.mobile.name}
                    width={96}
                    height={96}
                    sizes="56px"
                    className="size-14 rounded-full object-cover"
                  />
                </div>
                <div className="mt-3 flex flex-col items-center justify-center text-center text-sm leading-relaxed">
                  <NumericText>{heroFeaturedTestimonials.mobile.content}</NumericText>
                </div>
                <div className="flex items-center justify-center gap-1 rounded-md px-3 py-2">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="size-4 text-primary"
                      weight="fill"
                    />
                  ))}
                </div>
                <div className="text-center text-sm font-medium">
                  -{heroFeaturedTestimonials.mobile.name}
                </div>
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
            sizes="40px"
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
            sizes="40px"
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
              src={heroFeaturedTestimonials.left.avatar}
              alt={heroFeaturedTestimonials.left.name}
              width={140}
              height={140}
              sizes="64px"
              className="rounded-full size-16"
            />
          </div>
          <div className="flex flex-col text-center mt-2 text-sm items-center justify-center">
            <NumericText>{heroFeaturedTestimonials.left.content}</NumericText>
          </div>
          <div className="flex px-3 py-2 rounded-md items-center gap-1 justify-center">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="size-4 text-primary" weight="fill" />
            ))}
          </div>
          <div className="text-sm font-medium text-center">
            -{heroFeaturedTestimonials.left.name}
          </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className={`${testimonialGlass} hidden md:mt-0 md:flex md:max-w-[26rem] p-4 z-[101] rounded-xl md:h-56 items-center justify-center flex-col absolute md:bottom-0 md:left-auto md:right-[10%] lg:right-[14%] w-full`}
          >
          <div className="flex items-center justify-center">
            <Image
              src={heroFeaturedTestimonials.right.avatar}
              alt={heroFeaturedTestimonials.right.name}
              width={140}
              height={140}
              sizes="64px"
              className="rounded-full size-16"
            />
          </div>
          <div className="flex flex-col text-center mt-2 text-sm items-center justify-center">
            <NumericText>{heroFeaturedTestimonials.right.content}</NumericText>
          </div>
          <div className="flex px-3 py-2 rounded-md items-center gap-1 justify-center">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="size-4 text-primary" weight="fill" />
            ))}
          </div>
          <div className="text-sm font-medium text-center">
            -{heroFeaturedTestimonials.right.name}
          </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
