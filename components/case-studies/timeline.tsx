"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image, { StaticImageData } from "next/image";
import { Calendar, Note } from "@phosphor-icons/react";
import Logo from "../ui/svgs/logo";
import { Badge } from "../ui/badge";

interface TimelineItem {
  title: string;
  description: string;
  image: string | StaticImageData;
  mdxContent: any;
  date: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full overflow-hidden" ref={containerRef}>
      <div ref={ref} className="relative max-w-3xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col md:flex-row relative"
          >
            {/* Timeline dot and line */}
            <div className="absolute left-4 md:left-8 -top-8 bottom-0 w-[2px] bg-border hidden md:block">
              <div className="absolute top-8 -left-[9px] w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
            </div>

            {/* Content */}
            <div className="ml-0 bg pb-20 md:ml-24 flex-1">
              <div className="border-2 rounded-lg">
                <div className="px-6 bg-muted-foreground/5 p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge className="flex bg-border hover:bg-border py-1 text-foreground rounded-md items-center gap-2">
                      <Logo className="size-5" />
                      Studio1
                    </Badge>
                    <Badge className="flex bg-border hover:bg-border text-foreground rounded-md items-center gap-2">
                      <Calendar className="size-5" />
                      {item.date}
                    </Badge>
                  </div>

                  <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-300">
                    {item.description}
                  </p>
                </div>

                <Accordion
                  type="single"
                  collapsible
                  className="w-full rounded-md border-t-2"
                >
                  <AccordionItem value="content">
                    <AccordionTrigger className="bg-accent px-6">
                      <div className="flex items-center gap-2">
                        <Note className="size-6" /> View Details
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="mb-4 rounded-md px-6">
                      <div className="prose dark:prose-invert max-w-none pt-4">
                        {<item.mdxContent />}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Animated progress line */}
        <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
          className="absolute left-4 md:left-8 top-0 w-[2px] bg-gradient-to-b from-primary via-primary to-transparent hidden md:block"
        />
      </div>
    </div>
  );
}
