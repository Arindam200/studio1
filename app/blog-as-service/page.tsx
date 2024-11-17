import React from "react";
import Hero from "@/components/sections/blog-as-service/hero"
import Cta from "@/components/sections/cta"
import Foooter from "@/components/sections/footer"
import Impact from "@/components/sections/blog-as-service/impact";
import Process from "@/components/sections/blog-as-service/process";
import MinimalCardDemo from "@/components/sections/blog-as-service/blogs";
import Team from "@/components/sections/blog-as-service/team";

export default function Page() {
  return (
    <div className="bg-black">
      <Hero />
      <Impact />
      <MinimalCardDemo />
      {/* <AnimatedBeamDemo /> */}
      <Process />
      <Team />
      <Cta />
      <Foooter />
    </div>
  );
}