import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { Data } from "@/data";

const Logos = Data.Trustedby;

const arr = [
  Logos.permit,
  Logos.Tolgee,
  Logos.Nebius,
  Logos.CopilotKit,
  Logos.Latitude,
  Logos.Opire,
  Logos.Crawlee,
  Logos.Encore,
  Logos.Webcrumbs,
];

function Trustedby() {
  return (
    <div className="w-full overflow-hidden py-6 sm:py-8 md:py-10">
      <Marquee>
        {arr.map((Logo, index) => (
          <div
            key={index}
            className="relative mx-6 sm:mx-8 md:mx-[4rem] flex items-center justify-center"
          >
            <Logo />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Trustedby;
