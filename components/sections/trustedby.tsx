import React from "react";
import { Marquee } from "@/components/ui/marquee";
const Logos = {

  permit: () => (
    <img
      src="https://github.com/permitio/.github/assets/4082578/8f86eb12-2023-4c6c-9806-bcce06db4f5f"
      alt="Permit"
     className="h-16 sm:min-w-44 w-[140px]"
    />
  ),
  Tolgee: () => (
    <img
      src="https://raw.githubusercontent.com/tolgee/documentation/main/tolgee_logo_text.svg"
      alt="Tolgee"
   className="h-12 sm:min-w-40 w-[140px]"
    />
  ),
  CopilotKit: () => (
    <img
      src="https://github.com/RecursivelyAI/CopilotKit/assets/746397/5890217b-524e-49c5-a89e-b8743d2acd51"
      alt="CopilotKit"
      className="h-10 sm:min-w-44 w-[140px]"
    />
  ),
  Nebius:() => (
    <img
      src="https://companieslogo.com/img/orig/NBIS_BIG.D-f866f771.png?t=1729269594"
      alt="Nebius"
      className="h-6 sm:min-w-40 w-[140px]"
    />
  ),
  Latitude: () => (
    <img
      src="https://github.com/latitude-dev/latitude/assets/5465249/4783e122-7150-4bcc-96e0-a3c9c4c1c53b"
      alt="Latitude"
      className="h-8 sm:min-w-44 w-[140px]"
    />
  ),
  Opire: () => (
    <img
      src="https://opire.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbig_logo.fa525053.svg&w=3840&q=75"
      alt="Opire"
      className="h-10 sm:min-w-36 w-[140px]"
    />
  ),
  Crawlee: () => (
    <img
      src="https://crawlee.dev/img/crawlee-dark.svg"
      alt="Crawlee"
      className="h-14 sm:min-w-40 w-[140px]"
    />
  ),
  Encore: () => (
    <img
      src="https://camo.githubusercontent.com/77d11bfd37de0bb015849c0305a4cd653bee5f656570ba78899594a67eb08a8c/68747470733a2f2f656e636f72652e6465762f6173736574732f696d672f6c6f676f2e737667"
      alt="Encore"
      className="sm:h-14 h-30 sm:min-w-40 w-[240px]"
    />
  ),
  Webcrumbs: () => (
    <img
      src="https://camo.githubusercontent.com/9350767c2dd34b635f3e63e8e61798502bc4eee59df80accb9dc145af0d778c9/68747470733a2f2f63646e2e7765626372756d62732e6f72672f6173736574732f696d616765732f6272616e642f6c6f676f5f7265642e737667"
      alt="Webcrumbs"
      className="h-16 sm:min-w-44 w-[140px]"
      />
  ),
};

const arr = [ Logos.permit, Logos.Tolgee, Logos.Nebius, Logos.CopilotKit, Logos.Latitude, Logos.Opire, Logos.Crawlee, Logos.Encore, Logos.Webcrumbs ];

function Trustedby() {
  return (
    <div className="">
      <Marquee>
        {arr.map((Logo, index) => (
          <div
            key={index}
            className="relative h-full w-fit mx-[4rem] flex items-center justify-start"
          >
            <Logo />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Trustedby;
