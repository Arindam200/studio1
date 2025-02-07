import Hero from "@/components/landing/hero";
import Trustedby from "@/components/landing/trustedby";
import Services from "@/components/landing/services";
import Features from "@/components/landing/features";

export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <Hero />
      <Trustedby />
      <Services />
      <Features />
    </div>
  );
}
