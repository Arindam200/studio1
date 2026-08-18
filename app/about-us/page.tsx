"use client";
import { VisionMission } from "@/components/about-us/vision-mission";
import {
  Code,
  UsersThree,
  Wrench,
  FileText,
  Link as LinkIcon,
} from "@phosphor-icons/react";
import { Team } from "@/components/about-us/team";
import { Companies } from "@/components/about-us/companies";
import { motion } from "motion/react";
import { sideBeamGlowLeftMuted, sideBeamGlowRightMuted } from "@/lib/shadows";
import { useTranslations } from "next-intl";

const tags = [
  {
    key: "developerCentric",
    icon: Code,
  },
  {
    key: "technicalExpertise",
    icon: Wrench,
  },
  {
    key: "communityDriven",
    icon: UsersThree,
  },
  {
    key: "contentFocused",
    icon: FileText,
  },
  {
    key: "endToEnd",
    icon: LinkIcon,
  },
];

/** Frosted glass pills: translucent fill, primary-tinted border + soft orange shadow. */
const capsuleClassName =
  "rounded-full px-3 py-1.5 sm:px-3.5 inline-flex gap-2 items-center text-xs sm:text-sm font-medium text-foreground border border-border/40 dark:border-white/15 bg-white/55 dark:bg-white/[0.08] backdrop-blur-md shadow-[0_6px_18px_-4px_hsl(var(--primary)/0.32)] dark:shadow-[0_6px_18px_-4px_hsl(var(--primary)/0.22)]";

// Animation variants that can be reused across components
const sectionAnimation = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

function StudioIntroVideo() {
  return (
    <section className="mx-auto mt-14 mb-14 w-full max-w-[65rem] md:mt-20 md:mb-20">
      <div className="overflow-hidden rounded-2xl border border-border/60 bg-muted/20 shadow-[0_24px_80px_-42px_hsl(var(--primary)/0.7)] dark:border-white/[0.08] dark:bg-white/[0.03]">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src="https://www.youtube-nocookie.com/embed/86fFNr5Dyqk?rel=0"
            title="How Studio1 started"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default function AboutUs() {
  const t = useTranslations("AboutPage");

  return (
    <section className="overflow-x-hidden">
      <div className="max-w-7xl mx-auto h-fit relative">
        <div className={sideBeamGlowLeftMuted}></div>
        <div className={sideBeamGlowRightMuted}></div>
        {/*
        <motion.div
          className="flex flex-col w-full h-[40rem] max-h-fit mt-20"
          initial="hidden"
          animate="visible"
          variants={sectionAnimation}
        >
          <div className="relative h-full w-full">
            <AboutRipple mainCircleSize={310} numCircles={10} />
            <div className="absolute flex flex-col gap-2 inset-0 items-center justify-center">
              <div className="drop-shadow-[0_0px_25px_hsl(var(--primary))] bottom-[6rem] md:bottom-[5rem] backdrop-blur-sm z-[30] rounded-3xl bg-background/60 border-2 border-accent/40 flex items-center justify-center p-3">
                <Logo className="size-12 sm:size-16 md:size-24" />
              </div>
              <span className="font-primary text-2xl font-semibold tracking-tight">
                Studio1
              </span>
            </div>
          </div>
        </motion.div>
        */}

        <motion.div
          className="flex flex-col items-center gap-8 px-4 pt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionAnimation}
        >
          <StudioIntroVideo />
          <h1 className="text-3xl md:text-5xl font-primary font-normal tracking-tight text-center leading-tight">
            {t("titlePrefix")} {" "}
            <span className="serif-accent font-accent italic font-normal text-primary/75 text-[1.08em]">
              {t("titleHighlightOne")}
            </span>{" "}
            {t("titleMiddle")} {" "}
            <span className="serif-accent font-accent italic font-normal text-primary/75 text-[1.08em]">
              {t("titleHighlightTwo")}
            </span>{" "}
            <br /> {t("titleSuffix")}
          </h1>
          <div className="text-center text-sm md:text-base text-neutral-600 dark:text-neutral-400">
            {t("descriptionLineOne")}
            <br className="hidden md:block" /> {t("descriptionLineTwo")}
          </div>

          <div className="flex flex-wrap max-w-md sm:max-w-xl items-center justify-center gap-2.5 sm:gap-3 mt-10">
            {tags.map((tag, index) => (
              <motion.div
                key={tag.key}
                initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <span className={capsuleClassName}>
                  <tag.icon
                    weight="fill"
                    className="size-4 shrink-0 text-primary"
                  />
                  {t(`tags.${tag.key}`)}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionAnimation}
          >
            <VisionMission />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionAnimation}
          >
            <Team />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionAnimation}
          >
            <Companies />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
