import React from "react";
import { Marquee } from "@/components/ui/marquee";
import PermitFull from "@/public/assets/Permit-full.png";
import TolgeeFull from "@/public/assets/Tolgee-full.svg";

const TrustedbyLogo = [
  {
    name: "Permit",
    image: PermitFull.src,
    className: "h-10 sm:h-12 md:h-16 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
    alt: "Permit",
  },
  {
    name: "Tolgee",
    image: TolgeeFull.src,
    className: "h-8 sm:h-10 md:h-12 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain",
    alt: "Tolgee",
  },
  {
    name: "CopilotKit",
    image: "https://github.com/RecursivelyAI/CopilotKit/assets/746397/5890217b-524e-49c5-a89e-b8743d2acd51",
    className: "h-8 sm:h-9 md:h-10 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
    alt: "CopilotKit",
  },
  {
    name: "Nebius",
    image: "https://companieslogo.com/img/orig/NBIS_BIG.D-f866f771.png?t=1729269594",
    className: "h-5 sm:h-6 md:h-6 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain",
    alt: "Nebius",
  },
  {
    name: "Latitude",
    image: "https://github.com/latitude-dev/latitude/assets/5465249/4783e122-7150-4bcc-96e0-a3c9c4c1c53b",
    className: "h-6 sm:h-7 md:h-8 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
    alt: "Latitude",
  },
  {
    name: "Opire",
    image: "https://opire.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbig_logo.fa525053.svg&w=3840&q=75",
    className: "h-8 sm:h-9 md:h-10 w-auto max-w-[100px] sm:max-w-[120px] md:max-w-[144px] object-contain",
    alt: "Opire",
  },
  {
    name: "Crawlee",
    image: "https://crawlee.dev/img/crawlee-dark.svg",
    className: "h-10 sm:h-12 md:h-14 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain",
    alt: "Crawlee",
  },
  {
    name: "Encore",
    image: "https://camo.githubusercontent.com/77d11bfd37de0bb015849c0305a4cd653bee5f656570ba78899594a67eb08a8c/68747470733a2f2f656e636f72652e6465762f6173736574732f696d672f6c6f676f2e737667",
    className: "h-10 sm:h-12 md:h-14 w-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] object-contain",
    alt: "Encore",
  },
  {
    name: "Webcrumbs",
    image: "https://camo.githubusercontent.com/9350767c2dd34b635f3e63e8e61798502bc4eee59df80accb9dc145af0d778c9/68747470733a2f2f63646e2e7765626372756d62732e6f72672f6173736574732f696d616765732f6272616e642f6c6f676f5f7265642e737667",
    className: "h-10 sm:h-12 md:h-16 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
    alt: "Webcrumbs",
  },
];

function Trustedby() {
  return (
    <div className="w-full overflow-hidden py-6 sm:py-8 md:py-10">
      <Marquee>
        {TrustedbyLogo.map((Image,index) => (
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
