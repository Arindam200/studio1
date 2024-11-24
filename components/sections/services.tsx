import React from "react";
import { CardWithGridEllipsis, CardBody } from "@/components/ui/cards";
const cardContent = [
  {
    title: "Blogs as Service",
    description:
      "We create high-quality, technical and promotional blogs tailored for devtool and software companies. Our team of expert writers specializes in crafting SEO-optimized content that drives engagement, educates developers, and helps your tools stand out in a competitive market.",
  },
  {
    title: "DevRel as Service",
    description:
      "Accelerate your growth with targeted Developer Relations services. We help devtool and software companies connect authentically with developers, grow communities, and turn users into advocates.",
  },
  {
    title: "More Services",
    description:
      "Coming soon. We are working to provide more services. Stay tuned for more updates.",
  },
];

function Service() {
  return (
    <div
      className="sm:py-16 py-28 px-5 space-y-8 overflow-x-hidden"
      id="services"
    >
      <h2 className="text-3xl text-center font-semibold lg:text-5xl mb-12">
        {" "}
        What{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 from">
          We Do
        </span>
      </h2>
      <div className="flex justify-center gap-10 sm:mx-10 max-sm:mx-2 max-sm:flex-col">
        {cardContent.map((content, index) => (
          <CardWithGridEllipsis key={index}>
            <CardBody {...content} />
          </CardWithGridEllipsis>
        ))}
      </div>
    </div>
  );
}

export default Service;
