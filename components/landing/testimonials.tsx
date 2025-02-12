"use client";

import { useState } from "react";
import { ChatCenteredDots } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Data } from "@/data";
import TestimonialCard from "./testimonial-card";

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const initialTestimonials = Data.Testimonials.slice(0, 6);
  const remainingTestimonials = Data.Testimonials.slice(6);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col items-center gap-4 justify-center mb-16">
          <Badge className="text-sm font-medium bg-gradient-to-r from-primary to-primary1 flex gap-2 items-center">
            <ChatCenteredDots weight="fill" className="size-4" /> Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-medium text-center">
            What Our Clients Say
          </h2>
          <p className="text-center text-base mt-2 max-w-2xl">
            Here you will see what our clients say about us. Explore and make a
            call directly to our HQ.
          </p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 mt-20 space-y-6">
          {initialTestimonials.map((testimonial, index) => (
            <div key={index} className="break-inside-avoid">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
          {showAll && (
            <div className="transition-all duration-500 ease-in-out">
              {remainingTestimonials.map((testimonial, index) => (
                <div key={index + 6} className="break-inside-avoid">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          )}
        </div>
        {!showAll && remainingTestimonials.length > 0 && (
          <div className="flex justify-center mt-12">
            <Button onClick={() => setShowAll(true)}>See More</Button>
          </div>
        )}
      </div>
    </section>
  );
}
