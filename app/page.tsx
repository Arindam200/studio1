import { GridBackgroundDemo } from "@/components/sections/hero";
import Trustedby from "@/components/sections/trustedby";
import Service from "@/components/sections/services";
import Features from "@/components/sections/features";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="bg-black">
      <GridBackgroundDemo />
      <Trustedby />
      <Service />
      <Features />
      <Testimonials />
    </div>
  );
}
