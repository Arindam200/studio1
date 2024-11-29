import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { Data } from "@/data";

const Logos ={
  permit: () => (
    <img
      src="https://github.com/permitio/.github/assets/4082578/8f86eb12-2023-4c6c-9806-bcce06db4f5f"
      alt="Permit"
      className="h-10 sm:h-12 md:h-16 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain"
    />
  ),
  Tolgee: () => (
    <img
      src="https://raw.githubusercontent.com/tolgee/documentation/main/tolgee_logo_text.svg"
      alt="Tolgee"
      className="h-8 sm:h-10 md:h-12 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain"
    />
  ),
  CopilotKit: () => (
    <img
      src="https://github.com/RecursivelyAI/CopilotKit/assets/746397/5890217b-524e-49c5-a89e-b8743d2acd51"
      alt="CopilotKit"
      className="h-8 sm:h-9 md:h-10 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain"
    />
  ),
  Nebius: () => (
    <img
      src="https://companieslogo.com/img/orig/NBIS_BIG.D-f866f771.png?t=1729269594"
      alt="Nebius"
      className="h-5 sm:h-6 md:h-6 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain"
    />
  ),
  Latitude: () => (
    <img
      src="https://github.com/latitude-dev/latitude/assets/5465249/4783e122-7150-4bcc-96e0-a3c9c4c1c53b"
      alt="Latitude"
      className="h-6 sm:h-7 md:h-8 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain"
    />
  ),
  Opire: () => (
    <img
      src="https://opire.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbig_logo.fa525053.svg&w=3840&q=75"
      alt="Opire"
      className="h-8 sm:h-9 md:h-10 w-auto max-w-[100px] sm:max-w-[120px] md:max-w-[144px] object-contain"
    />
  ),
  Crawlee: () => (
    <img
      src="https://crawlee.dev/img/crawlee-dark.svg"
      alt="Crawlee"
      className="h-10 sm:h-12 md:h-14 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain"
    />
  ),
  Encore: () => (
    <img
      src="https://camo.githubusercontent.com/77d11bfd37de0bb015849c0305a4cd653bee5f656570ba78899594a67eb08a8c/68747470733a2f2f656e636f72652e6465762f6173736574732f696d672f6c6f676f2e737667"
      alt="Encore"
      className="h-10 sm:h-12 md:h-14 w-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] object-contain"
    />
  ),
  Webcrumbs: () => (
    <img
      src="https://camo.githubusercontent.com/9350767c2dd34b635f3e63e8e61798502bc4eee59df80accb9dc145af0d778c9/68747470733a2f2f63646e2e7765626372756d62732e6f72672f6173736574732f696d616765732f6272616e642f6c6f676f5f7265642e737667"
      alt="Webcrumbs"
      className="h-10 sm:h-12 md:h-16 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain"
    />
  ),
}

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
