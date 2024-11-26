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
    image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8se47yg59oimb4sl06eg.gif"
  },
  {
    title: "How I Built the World's Best NextJS, AI Scheduling App",
    description:
      "By the end of this article, you'll learn how to Integrate an AI copilot into your Next.js application by building a scheduling app with Cal.com and Develop and manage a custom scheduler that enhances user experience across your application.",
    link: "https://dev.to/tolgee_i18n/building-a-kanban-board-with-nextjsvercel-ai-and-tolgee-493g",
    image:"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpvtqkii2tlp04p2cvlx9.gif"
  },
  {
    title: "How to create a LinkedIn job scraper in Python with Crawlee",
    description:
      "In this article, we will build a web application that scrapes LinkedIn for job postings using Crawlee and Streamlit..",
      link: "https://dev.to/crawlee/how-to-create-a-linkedin-job-scraper-in-python-with-crawlee-h9d",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwsyjca1b8q6g9wapyhnp.jpg"
  },
  {
    title: "Develop a Real-Time Collaborative Document Editor with Next.js, Appwrite, Liveblocks and Permit.io",
    description:
      "A step-by-step guide to build a secure, real-time collaborative document editor with Next.js, Appwrite, Liveblocks, and Permit.io using ReBAC for flexible and secure relationship-based access control.",
      link: "https://javascript.plainenglish.io/develop-a-real-time-collaborative-document-editor-with-next-js-appwrite-liveblocks-and-permit-io-699a865a7aeb",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Wan7SBxJfZf2HlOu9AIPLw.png"
  },
  {
    title: "Building an AI-powered quiz application with Next.js and OpenAI",
    description:
      "In this tutorial, you'll learn how to build an AI-powered quiz application that enables users to select a topic, answer questions related to that topic, and receive their score instantly upon completing the quiz.",
      link: "https://dev.to/latitude/building-an-ai-powered-quiz-application-with-nextjs-and-openai-2673",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ff04c0el5k9h0pee1pcpp.png"
  },
  {
    title: "I Found a Tool Even Better than v0 – You Won't Believe What It Can Do!",
    description:
      "As a front-end developer, you’ve probably heard all about Vercel v0 — the tool that seemed to revolutionize front-end development.But, is v0 as great as it sounds? I spent time comparing it with a new tool, Webcrumbs Frontend AI, to see if it really is a game-changer.",
      link: "https://dev.to/arindam_1729/i-found-a-tool-even-better-than-v0-you-wont-believe-what-it-can-do-igf",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F70kbai7v3r12dr860psw.gif"
  },
];

export default function MinimalCardDemo() {
  return (
    <div id="blogs" className="sm:px-20 px-2.5 py-10 sm:py-20">
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
                src={card.image || 'default-image-url'}
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
