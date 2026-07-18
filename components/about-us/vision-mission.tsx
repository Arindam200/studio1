"use client";
import { Icon } from "@phosphor-icons/react";
import {
  ChartBar,
  Lightbulb,
  Target,
  TrendUp,
  Users,
  Flag,
  Globe,
  Heart,
  Rocket,
  HandHeart,
} from "@phosphor-icons/react/dist/ssr";
import { motion } from "motion/react";
import { sideBeamGlowLeftTall, sideBeamGlowRightTall } from "@/lib/shadows";
import { cn } from "@/lib/utils";

const contentData = {
  vision: {
    title: "Our Vision",
    icon: ChartBar,
    points: [
      {
        icon: Target,
        text: "Deliver clear, technical content that developers value",
      },
      {
        icon: Lightbulb,
        text: "Encourage creativity and constant learning",
      },
      {
        icon: TrendUp,
        text: "Drive measurable growth with every project",
      },
      {
        icon: Users,
        text: "Build transparent, long-term partnerships",
      },
      {
        icon: Globe,
        text: "Lead with quality and developer-first thinking",
      },
    ],
  },
  mission: {
    title: "Our Mission",
    icon: Flag,
    points: [
      {
        icon: Rocket,
        text: "Turn technical complexity into developer-friendly storytelling",
      },
      {
        icon: HandHeart,
        text: "Help clients hit growth goals through strategic content",
      },
      {
        icon: Heart,
        text: "Foster a collaborative and inclusive team culture",
      },
      {
        icon: Globe,
        text: "Commit to sustainable, long-term results",
      },
      {
        icon: Users,
        text: "Create meaningful impact for both SaaS teams and developer communities",
      },
    ],
  },
};

const ContentBlock = ({
  data,
  index,
}: {
  data: {
    title: string;
    icon: Icon;
    points: {
      icon: Icon;
      text: string;
    }[];
  };
  index: number;
}) => {
  const HeaderIcon = data.icon;

  return (
    <motion.article
      className={cn(
        "group/card relative flex h-full flex-col gap-7 overflow-hidden rounded-xl border-2 p-6 sm:p-8",
        "bg-accent dark:bg-muted-foreground/5",
        "transition-transform duration-300 hover:-translate-y-1"
      )}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.08 * index, ease: "easeOut" }}
    >
      <header className="flex items-center gap-3.5">
        <span
          className={cn(
            "flex size-12 shrink-0 items-center justify-center rounded-lg",
            "bg-background text-foreground",
            "dark:bg-background/80"
          )}
          aria-hidden
        >
          <HeaderIcon weight="regular" className="size-6" />
        </span>
        <h3 className="font-primary text-2xl font-semibold tracking-tight text-foreground sm:text-[1.65rem]">
          {data.title}
        </h3>
      </header>

      <div className="h-px w-full bg-border/80" />

      <ul className="flex flex-col gap-4">
        {data.points.map((point, pointIndex) => {
          const PointIcon = point.icon;
          return (
            <motion.li
              key={point.text}
              className="flex items-start gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1 + pointIndex * 0.04,
                duration: 0.35,
                ease: "easeOut",
              }}
            >
              <PointIcon
                weight="regular"
                className="mt-0.5 size-[1.125rem] shrink-0 text-primary"
                aria-hidden
              />
              <p className="font-secondary text-[0.9375rem] leading-relaxed text-foreground/80">
                {point.text}
              </p>
            </motion.li>
          );
        })}
      </ul>
    </motion.article>
  );
};

export const VisionMission = () => {
  return (
    <div className="relative mx-auto mt-44 w-full px-4 py-8">
      <div className={sideBeamGlowLeftTall}></div>
      <div className={sideBeamGlowRightTall}></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center md:mb-16"
      >
        <h2 className="mb-4 font-primary text-4xl font-normal tracking-tight md:text-5xl">
          What{" "}
          <span className="bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text font-accent italic font-bold text-transparent">
            Fuels
          </span>{" "}
          Us?
        </h2>
        <p className="text-muted-foreground">
          We help SaaS teams build developer trust through <br /> high-impact
          content and DevRel strategy that scales with their product.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
        <ContentBlock data={contentData.vision} index={0} />
        <ContentBlock data={contentData.mission} index={1} />
      </div>
    </div>
  );
};
