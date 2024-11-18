import React from "react";
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardFooter,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-cards";
import Link from "next/link";

const cards = [
  {
    title: "Building a Kanban Board with Next.js,Vercel AI and Tolgee",
    description:
      "In this article, we will build a real-time Kanban board in Next.js using WebSockets, with database support, AI support through the Vercel AI SDK and localization via Tolgee.",
    link: "https://dev.to/tolgee_i18n/building-a-kanban-board-with-nextjsvercel-ai-and-tolgee-493g",
  },
  {
    title: "Sick title",
    description:
      "How to design with gestures and motion that feel intuitive and natural.",
      link: "https://dev.to/tolgee_i18n/building-a-kanban-board-with-nextjsvercel-ai-and-tolgee-493g",
  },
  {
    title: "Sick title",
    description:
      "How to design with gestures and motion that feel intuitive and natural.",
      link: "https://dev.to/tolgee_i18n/building-a-kanban-board-with-nextjsvercel-ai-and-tolgee-493g",
  },
  {
    title: "Sick title",
    description:
      "How to design with gestures and motion that feel intuitive and natural.",
      link: "https://dev.to/tolgee_i18n/building-a-kanban-board-with-nextjsvercel-ai-and-tolgee-493g",
  },
  {
    title: "Sick title",
    description:
      "How to design with gestures and motion that feel intuitive and natural.",
      link: "https://dev.to/tolgee_i18n/building-a-kanban-board-with-nextjsvercel-ai-and-tolgee-493g",
  },
  {
    title: "Sick title",
    description:
      "How to design with gestures and motion that feel intuitive and natural.",
      link: "https://dev.to/tolgee_i18n/building-a-kanban-board-with-nextjsvercel-ai-and-tolgee-493g",
  },
];

export default function MinimalCardDemo() {
  return (
    <div className="sm:px-20 px-2.5 py-10 sm:py-20">
      <div className="sm:p-2">
        <div className="text-center mb-6 font-semibold lg:text-5xl text-2xl pb-4">
          Our{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 from">
            Blogs
          </span>
        </div>
      </div>
      <div className="min-h-[600px] p-4 flex flex-col justify-center rounded-md space-y-4">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (

            <MinimalCard key={card.title}>
              <Link href={card.link} > 
              <MinimalCardImage
                src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8se47yg59oimb4sl06eg.gif"
                alt={card.title}
              />
              <MinimalCardTitle>{card.title}</MinimalCardTitle>
              <MinimalCardDescription>
                {card.description}
              </MinimalCardDescription>
              <MinimalCardFooter>          
                </MinimalCardFooter>
                </Link>
            </MinimalCard>
          ))}
        </div>
      </div>
    </div>
  );
}
