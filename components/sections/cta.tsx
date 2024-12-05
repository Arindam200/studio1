import { ArrowRight } from "lucide-react";
import { CardWithGrid } from "@/components/ui/cards";
import React from "react";

const Cta = () => {
  return (
    <section className="sm:py-10 py-8" id="#cta">
      <div className="container">
        <CardWithGrid>
          <div className="flex w-full flex-col gap-16 max-sm:gap-8 overflow-hidden rounded-lg border border-orange-400 p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-16">
            <div className="flex-1">
              <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                Ready to Skyrocket Your Developer Community?
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Schedule a call with our team to learn how we can help you grow
                your developer community.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <a
                href="mailto:studioone.tech@gmail.com"
                className="px-6 gap-2 max-sm:justify-center flex max-sm:px-4 max-sm:text-base py-2.5 text-center text-lg font-semibold rounded-md bg-gradient-to-b from-orange-500 to-orange-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
              >
                Book a Call <ArrowRight className="pt-1" />
              </a>
            </div>
          </div>
        </CardWithGrid>
      </div>
    </section>
  );
};

export default Cta;
