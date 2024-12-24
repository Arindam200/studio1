import React from "react";
import { Marquee } from "@/components/ui/marquee";
import PermitFull from "@/public/assets/Permit-full.png";
import TolgeeFull from "@/public/assets/Tolgee-full.svg";
import CopilotkitFull from "@/public/assets/Copilotkit-full.png";
import NebiusFull from "@/public/assets/Nebius-full.png";
import LatitudeFull from "@/public/assets/Latitude-full.png";
import WebcrumbsFull from "@/public/assets/Webcrumbs-full.svg";
import CrawleeFull from "@/public/assets/Crawlee-full.svg";
import OpireFull from "@/public/assets/Opire-full.svg";
import EncoreFull from "@/public/assets/Encore-full.svg";

const TrustedbyLogo = [
  {
    name: "Permit",
    image: PermitFull.src,
    className:
      "h-10 sm:h-12 md:h-16 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
    alt: "Permit",
  },
  {
    name: "Tolgee",
    image: TolgeeFull.src,
    className:
      "h-8 sm:h-10 md:h-12 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain",
    alt: "Tolgee",
  },
  {
    name: "CopilotKit",
    image: CopilotkitFull.src,
    className:
      "h-8 sm:h-9 md:h-10 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
    alt: "CopilotKit",
  },
  {
    name: "Nebius",
    image: NebiusFull.src,
    className:
      "h-5 sm:h-6 md:h-6 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain",
    alt: "Nebius",
  },
  {
    name: "Latitude",
    image: LatitudeFull.src,
    className:
      "h-6 sm:h-7 md:h-8 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
    alt: "Latitude",
  },
  {
    name: "Opire",
    image: OpireFull.src,
    className:
      "h-8 sm:h-9 md:h-10 w-auto max-w-[100px] sm:max-w-[120px] md:max-w-[144px] object-contain",
    alt: "Opire",
  },
  {
    name: "Crawlee",
    image: CrawleeFull.src,
    className:
      "h-10 sm:h-12 md:h-14 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain",
    alt: "Crawlee",
  },
  {
    name: "Encore",
    image: EncoreFull.src,
    className:
      "h-10 sm:h-12 md:h-14 w-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] object-contain",
    alt: "Encore",
  },
  {
    name: "Webcrumbs",
    image: WebcrumbsFull.src,
    className:
      "h-10 sm:h-12 md:h-16 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
    alt: "Webcrumbs",
  },
];

function Trustedby() {
  return (
    <div id="trustedby" className="w-full overflow-hidden py-6 sm:py-8 md:py-10">
      <Marquee>
        {TrustedbyLogo.map((Image, index) => (
          <div
            key={index}
            className="relative mx-6 sm:mx-8 md:mx-[4rem] flex items-center justify-center"
          >
            <img
              src={Image.image}
              alt={Image.alt}
              className={Image.className}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Trustedby;
