import {
  BarChartHorizontal,
  BatteryCharging,
  CircleHelp,
  Layers,
  WandSparkles,
  ZoomIn,
} from "lucide-react";

const reasons = [
  {
    title: "Quality",
    description:
      "We create project based tutorials, how-to guides, promotional pieces, list-based articles, and feature use cases, all crafted to engage and educate your developer audience.",
    icon: <ZoomIn className="size-6" />,
  },
  {
    title: "Experience",
    description:
      "Our team includes developers who write and writers who build, ensuring technical content that is both accurate and engaging.",
    icon: <BarChartHorizontal className="size-6" />,
  },
  {
    title: "Support",
    description:
      "We work as an extension of your team, as a content partner. We ensure the work meets your requirements and expectations, collaborating closely until you're completely satisfied.",
    icon: <CircleHelp className="size-6" />,
  },
  {
    title: "Expertise",
    description:
      "Team specializes in diverse tech like AI, ML, Python, Cloud, WebDev, DevOps, modern APIs and more.",
    icon: <WandSparkles className="size-6" />,
  },
  {
    title: "Results",
    description:
      "Content published by us has reached over 600,000 developers so far. We deliver technical content that ranks and converts.",
    icon: <Layers className="size-6" />,
  },
  {
    title: "Collaboration",
    description:
      "15+ projects completed in just 3 month of our operations, We collaborated with leading software companies.",
    icon: <BatteryCharging className="size-6" />,
  },
];

const Features = () => {
  return (
    <section className="sm:py-28 py-16" id="why-us">
      <div className="container">
        <div className="mb-10 md:mb-20">
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
            Why{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 from">
              Work With
            </span>{" "}
            Us?
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div key={i} className="flex flex-col">
              <div className="flex max-sm:justify-center">
                <div className="mb-5 flex size-16 items-center justify-center rounded-lg bg-zinc-900">
                  {reason.icon}
                </div>
              </div>

              <h3 className="mb-2 text-xl font-semibold text-orange-400 max-sm:text-center">
                {reason.title}
              </h3>
              <p className="text-muted-foreground max-sm:text-center">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
