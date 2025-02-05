import Hero from "@/components/landing/hero";
import Trustedby from "@/components/landing/trustedby";
import Services from "@/components/landing/services";
import CTA from "@/components/landing/cta";
import Footer from "@/components/landing/footer";
export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <Hero />
      <Trustedby />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}
