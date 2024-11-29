import React from "react";
import { CardWithGridEllipsis, CardBody } from "@/components/ui/cards";
import { Data } from "@/data";
const cardContent = Data.Services;

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
