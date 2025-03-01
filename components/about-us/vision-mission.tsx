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

const contentData = {
  vision: {
    title: "Our Vision",
    icon: ChartBar,
    points: [
      {
        icon: Target,
        text: "Deliver exceptional value through innovation",
      },
      {
        icon: Lightbulb,
        text: "Foster creativity and continuous learning",
      },
      {
        icon: TrendUp,
        text: "Drive sustainable growth with measurable impact",
      },
      {
        icon: Users,
        text: "Build partnerships based on trust and transparency",
      },
      {
        icon: Globe,
        text: "Set industry standards through leadership",
      },
    ],
  },
  mission: {
    title: "Our Mission",
    icon: Flag,
    points: [
      {
        icon: Rocket,
        text: "Transform challenges into elegant solutions",
      },
      {
        icon: HandHeart,
        text: "Empower clients to achieve strategic objectives",
      },
      {
        icon: Heart,
        text: "Cultivate an inclusive workplace for talent",
      },
      {
        icon: Globe,
        text: "Operate with commitment to sustainability",
      },
      {
        icon: Users,
        text: "Create value for stakeholders and communities",
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
    <div className="flex flex-col w-full rounded-xl h-full">
      <div className="flex items-center h-20 px-4 rounded-t-xl bg-gradient-to-r from-primary to-primary1 text-white gap-2">
        <HeaderIcon className="size-8" />
        <span className="text-2xl font-primary font-semibold text-center leading-tight">
          {data.title}
        </span>
      </div>

      <div className="flex bg-accent dark:bg-accent/50 rounded-b-xl flex-col gap-4 p-6 h-full">
        {data.points.map((point, index) => {
          const PointIcon = point.icon;
          return (
            <div key={index} className="flex items-start gap-4">
              <PointIcon className="size-6 text-primary flex-shrink-0" />
              <p className="text-sm">{point.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const VisionMission = () => {
  return (
    <div className="w-full mx-auto px-4 py-8">
      <div className="text-2xl mb-4 font-primary font-semibold text-center leading-tight">
        What Fuels Us?
      </div>
      <p className="text-center text-sm font-semibold text-neutral-600 dark:text-neutral-400 mx-auto mb-12">
        We empower tech brands to build thriving <br /> developer communities
        through DevRel and high-impact content.
      </p>
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
