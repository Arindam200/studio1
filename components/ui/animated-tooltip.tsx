"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

const people = [
  {
    id: 1,
    name: "Latitude",
    designation: "LLM development platform",
    image:
      "https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F8649%2F4a824627-0334-40e4-8df4-7f7465a347f0.png",
  },
  {
    id: 2,
    name: "Encore",
    designation: "TS Framework",
    image:
      "https://user-images.githubusercontent.com/78424526/214602214-52e0483a-b5fc-4d4c-b03e-0b7b23e012df.svg",
  },
  {
    id: 3,
    name: "CopilotKit",
    designation: "Ai Agents",
    image: "https://avatars.githubusercontent.com/u/131273140?s=200&v=4",
  },
  {
    id: 4,
    name: "Permit.io",
    designation: "Authorization as a Service",
    image:
      "https://media.licdn.com/dms/image/v2/D4D0BAQEUnapZHA3qpg/company-logo_200_200/company-logo_200_200/0/1704364380450/permitio_logo?e=2147483647&v=beta&t=0vSDXykS9qDKgJhg-h4CJNPYYe0JCFy3DugA87Lh-2I",
  },
  {
    id: 5,
    name: "Crawlee",
    designation: "Web Scraping framework",
    image:
      "https://ph-files.imgix.net/52d7b824-8e98-4d20-8f09-3290c4f3f97a.png?auto=format",
  },
  {
    id: 6,
    name: "Tolgee",
    designation: "i18n tool",
    image:
      "https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F4876%2F895c36ae-8f92-4d4c-aa17-1e0c19959cad.png",
  },
  {
    id: 7,

    name: "Nebius",
    designation: "AI Cloud",
    image:
      "https://storage.nemax.nebius.cloud/www-gpu-community-images/speaker_83cdf76a-c815-45b3-bdea-5d88db8e0db6.jpg",
  },
];
// {
//   // items = people,
// }: {
//   // items: {
//   //   id: number;
//   //   name: string;
//   //   designation: string;
//   //   image: string;
//   // }[];
// }
export const AnimatedTooltip = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {people.map((item) => (
        <div
          className="-mr-4 relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base">
                  {item.name}
                </div>
                <div className="text-white text-xs">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
          />
        </div>
      ))}
    </>
  );
};
