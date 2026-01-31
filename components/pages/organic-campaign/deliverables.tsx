"use client";
import { Ripple } from "@/components/magicui/ripple";
import {
  IconVideo,
  IconShare,
  IconArticle,
  IconBrandGithub,
  IconPhoto,
  IconList,
} from "@tabler/icons-react";

const deliverables = [
  {
    title: "Professional Video Content",
    description:
      "5-10 minute high-quality explainer or tutorial video with SEO-optimized title, tags, and custom thumbnail.",
    icon: IconVideo,
  },
  {
    title: "Multi-Platform Distribution",
    description:
      "Strategic content across X (Twitter), LinkedIn, Reddit, and YouTube with coordinated timing for maximum impact.",
    icon: IconShare,
  },
  {
    title: "Long-Form Blog Content",
    description:
      "1000-2000 words comprehensive article with images, GIFs, and code examples, cross-posted to Dev.to, Medium, and LinkedIn.",
    icon: IconArticle,
  },
  {
    title: "GitHub Integration",
    description:
      "Project showcase in our 6k+ starred repository with Sponsor Spotlight feature for maximum developer visibility.",
    icon: IconBrandGithub,
  },
  {
    title: "Visual Assets",
    description:
      "2-3 branded animated graphics and custom YouTube thumbnail designed for maximum click-through rates.",
    icon: IconPhoto,
  },
  {
    title: "Micro-Content Strategy",
    description:
      "4-5 optimized snippets from main content, strategically scheduled for peak engagement across platforms.",
    icon: IconList,
  },
];

export default function Deliverables() {
  return (
    <div id="work" className="mt-20 relative overflow-x-hidden ">
      <div className="top-[-10rem] md:top-[-8rem] z-[-1] left-[-80%] md:left-[-20%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out  h-[50rem] md:h-[60rem] w-[10rem] -rotate-[60deg]"></div>
      <div className="top-[-10rem] md:top-[-8rem] z-[-1] right-[-80%] md:right-[-20%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out  h-[50rem] md:h-[60rem] w-[10rem] rotate-[40deg]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center my-10">
          <div className="text-center  font-semibold lg:text-5xl text-4xl mb-4">
            What You{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary ">
              Get
            </span>
          </div>
          <p className=" mx-auto text-foreground/80 dark:text-neutral-400 text-sm md:text-base ">
            A complete organic growth package designed to maximize <br className="hidden md:block" /> your visibility across all developer channels.
          </p>
        </div>

        <div className="sm:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, index) => (
            <div
              key={index}
              className="relative group bg-muted h-[20rem] flex flex-col justify-between items-start p-1 rounded-xl transition-all"
            >
              <div className="relative w-full h-full overflow-hidden bg-background border flex flex-col justify-between rounded-lg p-6 items-start">
                <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                  <div className="absolute border-[3px] group-hover:border-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-[90] inline-flex p-6 ">
                    <item.icon
                      className="size-10 text-muted-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  <Ripple className="top-1/2 left-1/2 opacity-40 group-hover:opacity-70 -translate-x-1/2 -translate-y-1/2 w-full h-full" />
                </div>
                <div className="mt-4 flex-1 flex items-start justify-end flex-col">
                  <h3 className="text-lg">
                    <a className="focus:outline-none font-semibold text-2xl ">
                      <span className="absolute inset-0 " aria-hidden="true" />
                      {item.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 font-medium dark:text-neutral-400 tracking-wide">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
