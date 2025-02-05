import Hero from "@/components/landing/hero";
import Trustedby from "@/components/landing/trustedby";
import Services from "@/components/landing/services";
export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <Hero />
      <Trustedby />
      <Services />
    </div>
  );
}
