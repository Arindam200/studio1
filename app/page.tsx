import Hero from "@/components/landing/hero";
import Trustedby from "@/components/landing/trustedby";
import Services from "@/components/landing/services";
import Features from "@/components/landing/features";
import Testimonials from "@/components/landing/testimonials";
export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <Hero />
      <Trustedby />
      <Services />
      <Features />
      <Testimonials />
    </div>
  );
}
