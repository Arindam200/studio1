import Hero from "@/components/landing/hero";
import Trustedby from "@/components/landing/trustedby";
import Services from "@/components/landing/services";
import Features from "@/components/landing/features";
import Testimonials from "@/components/landing/testimonials";
import RotatingPeople from "@/components/landing/rotating-people";
export default function Home() {
  return (
    <div className="overflow-x-hidden h-fit !max-h-fit">
      <Hero />
      <Trustedby />
      <Services />
      <Features />
      <Testimonials />
    </div>
  );
}
