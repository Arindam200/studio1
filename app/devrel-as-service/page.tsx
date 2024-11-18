import React from "react";
import Hero from "@/components/sections/devrel-as-service/hero";
import Impact from "@/components/sections/devrel-as-service/impact";
import Services from "@/components/sections/devrel-as-service/services";
import Team from "@/components/sections/devrel-as-service/team";
import Process from "@/components/sections/devrel-as-service/process";

export default function DevRel() {
  return (
    <div className="bg-black">
      <Hero />
      <Impact />
      <Services />
      <Process />
      <Team />
    </div>
  );
}
