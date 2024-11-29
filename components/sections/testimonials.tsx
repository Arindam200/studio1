import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Data } from '@/data';

const testimonials = Data.Testimonials;

const Testimonial6: React.FC = () => {
  return (
    <section className="py-16 sm:py-28" id="testimonials">
      <div className="px-2.5 sm:px-10">
        <div className="mb-8 flex-col px-1 lg:mb-12">
          <h2 className="text-3xl text-center font-semibold lg:text-5xl mb-12">
            Why{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600">
              Clients Love{" "}
            </span>
            Us?
          </h2>
          <Carousel className="w-full">
            <div className="flex items-center space-x-2 justify-center">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselContent>
                {testimonials.map((testimonial, idx) => (
                  <CarouselItem key={idx}>
                    <div className="flex flex-col items-center text-center">
                      <div className="sm:mb-16 mb-8 max-w-5xl sm:px-8 px-2 text-md sm:min-h-4xl sm:mt-20 mt-10 font-medium lg:text-3xl">
                        {testimonial.content.split("\n").map((line, index) => (
                          <p key={index} className="sm:mb-2.5 mb-1.5">
                            {line.split(" ").map((word, wordIndex) => {
                              const isHighlighted = testimonial.highlights.some(
                                highlight => word.toLowerCase().includes(highlight.toLowerCase())
                              );
                              return (
                                <span
                                  key={`${index}-${wordIndex}`}
                                  className={isHighlighted ? "text-orange-500 font-semibold" : ""}
                                >
                                  {word}{" "}
                                </span>
                              );
                            })}
                          </p>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 md:gap-4">
                        <Avatar className="w-12 h-12 md:w-16 md:h-16">
                          <AvatarImage src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} />
                          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <p className="text-sm font-semibold md:text-xl text-orange-400">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground md:text-base">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonial6;

