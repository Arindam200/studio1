import React from 'react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import IvanImg from "../../public/assets/Ivan.jpg";
import GabrielImg from "../../public/assets/Gabriel.png";
import JuliaImg from "../../public/assets/Julia.png";
import DavidImg from "../../public/assets/David.png";
import ColeImg from "../../public/assets/Cole.png";
import FerranImg from "../../public/assets/Ferran.png";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
  highlights: string[];
}

const testimonials: Testimonial[] = [
  {
    name: "Ivan Cordoba",
    role: "CEO & Founder Opire",
    avatar: IvanImg.src,
    content:
      `Studio1 turned our ideas into clear and engaging content, helping us connect with our community and strengthen our identity.
      
      A key collaboration for Opire's growth.`,
    highlights: ["Studio1", "Opire's growth"],
  },
  {
    name: "Gabriel L. Manor",
    role: "Director of DevRel, Permit.io",
    avatar: GabrielImg.src,
    content: `We've been working with Arindam on multiple content pieces for the last couple of months, and his work is astonishing.
              
    We also love his network of writers, where he can scale the workload when needed.

    So far, 10/10 experience!`,
    highlights: ["Arindam", "content pieces", "network of writers", "scale the workload", "10/10 experience"],
  },
  {
    name: "Julia Machado",
    role: "Founder & CEO, WebCrumbs",
    avatar: JuliaImg.src,
    content:
      `Arindam gave us a masterclass on how to launch on Product Hunt and I dare to say if it wasn't that we wouldn't have achieved 3rd in our first launch ever and with almost zero preparation.
      
      He write great technical texts that reach an impressive audience. 
      
      We'll definitely work with him again!`,
    highlights: [ "Product Hunt", "technical texts", "impressive audience", "work with him again" ],
  },
  {
    name: "David Mython",
    role: "CEO, Arcjet",
    avatar: DavidImg.src,
    content:
      `We worked with Arindam on a writeup of the Arcjet beta release.
      
      The goal was to introduce the SDK to developers and show off how you can use Arcjet to protect an interesting application. 
      
      Arindam was responsive to feedback and helped us achieve those goals`,
    highlights: ["Arindam", "Arcjet beta release", "SDK", "developers and show off", "protect an interesting application"],
  },
  {
    name: "Cole Stark",
    role: "CMO, Pieces.app",
    avatar: ColeImg.src,
    content:
      `Arindam has been an excellent addition to our DevRel team. 
      
      He brought a creative mindset and a hard work ethic to our team which helped us to scale our Discord presence and overall community growth efforts.`,
    highlights: ["Arindam", "DevRel team", "creative mindset", "hard work ethic", "scale our Discord presence", "overall community growth efforts"],
  },
  {
    name: "Ferran Rodríguez",
    role: "Growth Manager, Latitude",
    avatar: FerranImg.src,
    content:
      `Working with Arindam has been one of the best experiences that I had collaborating with a technical writer.

        Execution and delivery was almost perfect, we just needed one small round of adjustments before publishing.

        I can't recommend enough to work with Arindam and I'm looking forward to our next collaboration!`,
    highlights: ["Arindam", "technical writer", "briefing process", "efficient", "topic ideas", "approach the content piece", "Execution and delivery", "perfect", "small round of adjustments", "publishing", "technical content", "recommend", "collaboration"],
  },
];

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

