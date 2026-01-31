"use client";
import { Ripple } from "@/components/magicui/ripple";
import {
  IconUsers,
  IconRocket,
  IconSpeakerphone,
  IconChartBar,
} from "@tabler/icons-react";

const services = [
  {
    title: "Influencer Discovery",
    description:
      "We identify and vet relevant influencers who align with your brand and can authentically reach your target developer audience.",
    icon: IconUsers,
  },
  {
    title: "Campaign Management",
    description:
      "We manage the entire campaign lifecycle, from outreach and negotiation to content collaboration and performance tracking.",
    icon: IconRocket,
  },
  {
    title: "Content Amplification",
    description:
      "We work with influencers to create and amplify content that drives engagement and builds brand awareness.",
    icon: IconSpeakerphone,
  },
  {
    title: "Performance Tracking",
    description:
      "We track key metrics to measure the impact of your influencer campaigns and provide detailed reports on their performance.",
    icon: IconChartBar,
  },
];

export default function Services() {
  return (
    <div id="work" className="mt-20 relative overflow-x-hidden ">
      <div className="top-[-10rem] md:top-[-8rem] z-[-1] left-[-80%] md:left-[-20%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out  h-[50rem] md:h-[60rem] w-[10rem] -rotate-[60deg]"></div>
      <div className="top-[-10rem] md:top-[-8rem] z-[-1] right-[-80%] md:right-[-20%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out  h-[50rem] md:h-[60rem] w-[10rem] rotate-[40deg]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center my-10">
          <div className="text-center  font-semibold lg:text-5xl text-4xl mb-4">
            What We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary ">
              Offer
            </span>
          </div>
          <p className=" mx-auto text-foreground/80 dark:text-neutral-400 text-sm md:text-base ">
            End-to-end influencer management for maximum <br className="hidden md:block" /> brand visibility and developer engagement.
          </p>
        </div>

        <div className="sm:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-muted h-[20rem] flex flex-col justify-between items-start p-1 rounded-xl transition-all"
            >
              <div className="relative w-full h-full overflow-hidden bg-background border flex flex-col justify-between rounded-lg p-6 items-start">
                <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                  <div className="absolute border-[3px] group-hover:border-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-[90] inline-flex p-6 ">
                    <service.icon
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
                      {service.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 font-medium dark:text-neutral-400 tracking-wide">
                    {service.description}
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
