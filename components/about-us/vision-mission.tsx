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

// Create a reusable card component
const ContentCard = ({
  data,
}: {
  data: {
    title: string;
    icon: Icon;
    points: {
      icon: Icon;
      text: string;
    }[];
  };
}) => {
  const HeaderIcon = data.icon;

  return (
    <motion.div
      className="flex flex-col w-full rounded-xl h-full"
      initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex items-center h-20 px-4 rounded-t-xl bg-gradient-to-r from-primary to-primary1 text-white gap-2">
        <HeaderIcon className="size-8" />
        <span className="text-2xl font-primary font-semibold text-center leading-tight">
          {data.title}
        </span>
      </div>

      <div className="flex bg-background sm:bg-accent dark:bg-background/70 backdrop-blur-xl dark:sm:bg-accent/50 rounded-b-xl flex-col gap-4 p-6 h-full">
        {data.points.map((point, index) => {
          const PointIcon = point.icon;
          return (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <PointIcon className="size-6 text-primary flex-shrink-0" />
              <p className="text-sm">{point.text}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export const VisionMission = () => {
  return (
    <div className="w-full mt-44 relative mx-auto px-4 py-8">
      <div className="top-[-10rem] md:top-[-18rem] z-[-1] left-[-80%] md:left-[-20%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out  h-[50rem] md:h-[60rem] w-[10rem] -rotate-[60deg]"></div>
      <div className="top-[-10rem] md:top-[-18rem] z-[-1] right-[-80%] md:right-[-20%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out  h-[50rem] md:h-[60rem] w-[10rem] rotate-[40deg]"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-sm font-semibold text-neutral-600 dark:text-neutral-400 mx-auto mb-12"></p>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 md:text-5xl">
            What{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary ">
              Fuels
            </span>{" "}
            Us?
          </h2>
          <p className="text-muted-foreground ">
          We help SaaS teams build developer trust through <br /> high-impact content and DevRel strategy that scales with their product.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div className="flex justify-center h-full max-w-[23rem]">
          <ContentCard data={contentData.vision} />
        </div>
        <div className="flex justify-center h-full max-w-[23rem]">
          <ContentCard data={contentData.mission} />
        </div>
      </div>
    </div>
  );
};
