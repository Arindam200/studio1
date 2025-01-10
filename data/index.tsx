import IvanImg from "../public/assets/Ivan.jpg";
import GabrielImg from "../public/assets/Gabriel.png";
import JuliaImg from "../public/assets/Julia.png";
import DavidImg from "../public/assets/David.png";
import ColeImg from "../public/assets/Cole.png";
import FerranImg from "../public/assets/Ferran.png";
import AgitaImg from "../public/assets/Agita.png";
import SauravImg from "../public/assets/Saurav.png";
import NathanImg from "../public/assets/Nathan.png";
import MarketaImg from "../public/assets/Marketa.png";
import {
  Search,
  LightbulbIcon,
  Rocket,
  BarChart,
  Code2,
  Users,
  BookOpen,
  MessageSquare,
  Youtube,
  GitBranch,
  ZoomIn,
  BarChartHorizontal,
  CircleHelp,
  WandSparkles,
  Layers,
  BatteryCharging,
} from "lucide-react";
import React from "react";
import PermitFull from "@/public/assets/Permit-full.png";
import TolgeeFull from "@/public/assets/Tolgee-full.svg";
import { title } from "process";

export const Data = {
  Companies: [
    {
      id: 1,
      name: "Latitude",
      designation: "LLM development platform",
      image: "/assets/latitude.png",
    },
    {
      id: 2,
      name: "Encore",
      designation: "TS Framework",
      image: "/assets/encore.png",
    },
    {
      id: 3,
      name: "CopilotKit",
      designation: "AI Agents",
      image: "/assets/copilotkit.png",
    },
    {
      id: 4,
      name: "Permit.io",
      designation: "Authorization as a Service",
      image: "/assets/permit.jpg",
    },
    {
      id: 5,
      name: "Crawlee",
      designation: "Web Scraping framework",
      image: "/assets/crawlee.png",
    },
    {
      id: 6,
      name: "Tolgee",
      designation: "i18n tool",
      image: "/assets/tolgee.png",
    },
    {
      id: 7,
      name: "Nebius",
      designation: "AI Cloud",
      image: "/assets/nebius.jpg",
    },
  ],
  Features: [
    {
      title: "Quality",
      description:
        "We create project based tutorials, how-to guides, promotional pieces, list-based articles, and feature use cases, all crafted to engage and educate your developer audience.",
      icon: <ZoomIn className="size-6" />,
    },
    {
      title: "Experience",
      description:
        "Our team includes developers who write and writers who build, ensuring technical content that is both accurate and engaging.",
      icon: <BarChartHorizontal className="size-6" />,
    },
    {
      title: "Support",
      description:
        "We work as an extension of your team, as a content partner. We ensure the work meets your requirements and expectations, collaborating closely until you're completely satisfied.",
      icon: <CircleHelp className="size-6" />,
    },
    {
      title: "Expertise",
      description:
        "Team specializes in diverse tech like AI, ML, Python, Cloud, WebDev, DevOps, modern APIs and more.",
      icon: <WandSparkles className="size-6" />,
    },
    {
      title: "Results",
      description:
        "Content published by us has reached over 600,000 readers so far. We deliver technical content that ranks and converts.",
      icon: <Layers className="size-6" />,
    },
    {
      title: "Collaboration",
      description:
        "15+ projects completed in just 4 month of our operations, We collaborated with leading software companies.",
      icon: <BatteryCharging className="size-6" />,
    },
  ],
  Allblogs: [
    {
      title: "Building a Kanban Board with Next.js,Vercel AI and Tolgee",
      description:
        "In this article, we will build a real-time Kanban board in Next.js using WebSockets, with database support, AI support through the Vercel AI SDK and localization via Tolgee.",
      link: "https://dev.to/tolgee_i18n/building-a-kanban-board-with-nextjsvercel-ai-and-tolgee-493g",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8se47yg59oimb4sl06eg.gif",
    },
    {
      title: "How I Built the World's Best NextJS, AI Scheduling App",
      description:
        "By the end of this article, you'll learn how to Integrate an AI copilot into your Next.js application by building a scheduling app with Cal.com and Develop and manage a custom scheduler that enhances user experience across your application.",
      link: "https://dev.to/tolgee_i18n/building-a-kanban-board-with-nextjsvercel-ai-and-tolgee-493g",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpvtqkii2tlp04p2cvlx9.gif",
    },
    {
      title: "How to create a LinkedIn job scraper in Python with Crawlee",
      description:
        "In this article, we will build a web application that scrapes LinkedIn for job postings using Crawlee and Streamlit..",
      link: "https://dev.to/crawlee/how-to-create-a-linkedin-job-scraper-in-python-with-crawlee-h9d",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwsyjca1b8q6g9wapyhnp.jpg",
    },
    {
      title:
        "Develop a Real-Time Collaborative Document Editor with Next.js, Appwrite, Liveblocks and Permit.io",
      description:
        "A step-by-step guide to build a secure, real-time collaborative document editor with Next.js, Appwrite, Liveblocks, and Permit.io using ReBAC for flexible and secure relationship-based access control.",
      link: "https://javascript.plainenglish.io/develop-a-real-time-collaborative-document-editor-with-next-js-appwrite-liveblocks-and-permit-io-699a865a7aeb",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Wan7SBxJfZf2HlOu9AIPLw.png",
    },
    {
      title: "Building an AI-powered quiz application with Next.js and OpenAI",
      description:
        "In this tutorial, you'll learn how to build an AI-powered quiz application that enables users to select a topic, answer questions related to that topic, and receive their score instantly upon completing the quiz.",
      link: "https://dev.to/latitude/building-an-ai-powered-quiz-application-with-nextjs-and-openai-2673",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ff04c0el5k9h0pee1pcpp.png",
    },
    {
      title:
        "Manage Permissions in a Langflow Chain for LLM Queries using Permit.io",
      description:
        "A Step-by-Step Guide to Secure and Scalable Permission Management for AI Models with Permit.io",
      link: "https://astrodevil.medium.com/manage-permissions-in-a-langflow-chain-for-llm-queries-using-permit-io-7de8a0fb17b3",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*bY1LzPkOXDXI_eRJ_V-y8w.png",
    },
    {
      title:
        "I Found a Tool Even Better than v0 – You Won't Believe What It Can Do!",
      description:
        "As a front-end developer, you've probably heard all about Vercel v0 — the tool that seemed to revolutionize front-end development.But, is v0 as great as it sounds? I spent time comparing it with a new tool, Webcrumbs Frontend AI, to see if it really is a game-changer.",
      link: "https://dev.to/arindam_1729/i-found-a-tool-even-better-than-v0-you-wont-believe-what-it-can-do-igf",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F70kbai7v3r12dr860psw.gif",
    },
    {
      title:
        "Building an AI-powered finance planner with full-stack Next.js and Nebius AI Studio",
      description:
        "In this guide, we’ll build an AI-powered financial planner using the Meta Llama 3.1 70B model via Nebius AI Studio and a full-stack Next.js app. This solution works seamlessly whether you’re using the Pages Router or the App Router, as much of the customization relies on setting up a custom Next.js server.",
      link: "https://nebius.com/blog/posts/building-ai-powered-finance-planner",
      image:
        "https://storage.ai.nebius.cloud/www-gpu-assets/pages/blog/building-ai-powered-finance-planner/sharing1.jpg",
    },
    {
      title: "Make Prototyping Easier with Webcrumbs",
      description: "Discover the Future of Prototyping with Webcrumbs AI",
      link: "https://astrodevil.medium.com/make-prototyping-easier-with-webcrumbs-3668d8e880d2",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*kirTT63OzhfJCcitLgDRqA.png",
    },
    {
      title: "How to Add RBAC Authorization in Next.js",
      description:
        "A Comprehensive Guide to RBAC Authorization in Next.js using Permit.io",
      link: "https://astrodevil.medium.com/how-to-add-rbac-authorization-in-next-js-1d5e50cbad29",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*yWfXQWV_89Dg6MarsUhnvw.png",
    },
    {
      title: "How to run Meta Llama 3.1 405B with Nebius AI Studio API",
      description:
        "Discover how Nebius AI Studio enables you to integrate the famous Llama 3.1 405B large language model in your applications.",
      link: "https://nebius.com/blog/posts/run-meta-llama-405b-in-ai-studio",
      image:
        "https://storage.ai.nebius.cloud/www-gpu-assets/pages/blog/introducing-nebius-ai-studio/preview.jpg",
    },
    {
      title: "Implementing GraphQL Authorization: A Practical Guide",
      description:
        "Learn how to implement scalable authorization in GraphQL. Simplify RBAC and Permissions management with step-by-step instructions.",
      link: "https://www.permit.io/blog/implementing-graphql-authorization",
      image:
        "https://www.permit.io/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FYDN8Xi5vRQONu81cC1yw&w=1920&q=75",
    },
    {
      title: "How to Build a Real-Time Dashboard with Encore.ts and React",
      description:
        "In this tutorial, you'll learn how to build a real-time dashboard with Encore.ts and React. We'll show you how to set up a real-time connection between your server and client, and how to display real-time data in your dashboard.",
      link: "https://dev.to/encore/how-to-build-a-real-time-dashboard-with-encorets-and-react-ii9",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnd1e4rgk07yfo638ses9.png",
    },
    {
      title: "Creating your own AI-powered code generator and reviewer",
      description:
        "In this hands-on tutorial, you’ll learn how to create a powerful code generation and review application that you can customize to your exact needs. We’ll use Nebius AI Studio and open-source models, making it both cost-effective and extensible.",
      link: "https://nebius.com/blog/posts/building-ai-powered-code-generator",
      image:
        "https://media.licdn.com/dms/image/v2/D4E22AQHXtGpgMsH-BA/feedshare-shrink_800/feedshare-shrink_800/0/1733485301047?e=2147483647&v=beta&t=ZEE4MK-HOS0rbxXkwGi7rqTA9GWxoON8u4L3EXp4tNo",
    },
    {
      title:
        "Build Real-Time Presence Features Like Figma and Google Docs in Your App in Minutes🚀🔥🧑‍💻",
      description:
        "In this article, we will learn how to build real-time presence features like Figma and Google Docs in your app in minutes using Liveblocks.",
      link: "https://dev.to/astrodevil/build-real-time-presence-features-like-figma-and-google-docs-in-your-app-in-minutes-1lae",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fn4ktzy1anqot0vjselc6.png",
    },
    {
      title: "NestJS vs Encore.ts",
      description:
        "Choosing the Right Framework for Your TypeScript Microservices",
      link: "https://dev.to/encore/nestjs-vs-encorets-choosing-the-right-framework-for-your-typescript-microservices-1g61",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9bvci4yohqc5r2o65eda.png",
    },
    {
      title: "Make Open Source Contributions More Rewarding with Opire",
      description:
        "With all Open source fun and learnings we can add one more element to our open-source journey and that is Bounty",
      link: "https://dev.to/opire/make-open-source-contributions-more-rewarding-with-opire-19o1",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fgvh9vgiz0v3i6evue4ip.gif",
    },
    {
      title: "9 Open Source Libraries to Supercharge Your Next Project",
      description:
        "As a developer, we often get confused about which tools to use, so I'm covering 9 Open Source Libraries that will truly supercharge your future project!",
      link: "https://dev.to/arindam_1729/9-open-source-libraries-to-supercharge-your-next-project-c71",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpfgp3ig8xjivkqz4bytl.gif",
    },
    {
      title:
        "How to choose between large and small AI models: A cost-benefit analysis",
      description:
        "This blog post will guide you through the differences, use cases and cost-benefit analysis of different AI models, especially in the context of inference.",
      link: "https://nebius.com/blog/posts/choosing-between-large-and-small-models",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4eowvtjC0YUZgLG-2DMlGxBe69IBU-0XZQ&s",
    },
    {
      title:
        "10 AI Assistants for Frontend Developers That Will Change the Way You Code",
      description:
        "There are a ton of AI coding assistants, but only a few are very helpful and specific to frontend developers. This article will dive into 10 AI coding assistants to help you become a faster, more productive frontend developer.",
      link: "https://astrodevil.medium.com/10-ai-assistants-for-frontend-developers-that-will-change-the-way-you-code-1d833541efb2",
      image:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*0vebjXBoJ_iIVdrFapKosw.png",
    },
    {
      title:
        "Hiring in the Open - How Companies Can Discover Top Talent via Opire",
      description:
        "In this article, we’re going to discuss how Opire’s approach saves companies time and resources while giving developers an effective way to stand out.",
      link: "https://dev.to/opire/hiring-in-the-open-how-companies-can-discover-top-talent-via-opire-k4h",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fz9zn9tnxmbfwyhu7pm55.gif",
    },

    {
      title: "8 Tools You Need to Build Your First SaaS",
      description:
        "In this article, we will discuss the 8 tools you need to build your first SaaS product.",
      link: "https://dev.to/arindam_1729/8-tools-you-need-to-build-your-first-saas-am5",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F71cb2kcoxbtxo721zcw6.gif",
    },
    {
      title: "How to Add RBAC Authorization in Next.js",
      description:
        "By the end of this tutorial, you'll have a clear understanding of how to secure your Next.js application with RBAC, giving you complete control over what each user can access based on their role.",
      link: "https://dev.to/arindam_1729/how-to-add-rbac-authorization-in-nextjs-16m3",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjdfvempfrzz376nh609l.png",
    },
    {
      title: "How to Build Dynamic Feature Toggling in React.js",
      description:
        "A guide on how to build a React Feature Toggling system. Discover how to use CASL and Permit.io for relationship-based access control (ReBAC) to manage feature visibility dynamically",
      link: "https://www.permit.io/blog/dynamic-react-feature-toggling-2024-guide",
      image:
        "https://www.permit.io/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FmCpDaZarQmWinorWRJJM&w=3840&q=75",
    },
    {
      title: "11 Open Source Python Projects You Should Know in 2024",
      description:
        "In this article, we will discuss 11 open-source Python projects that you should know in 2024.",
      link: "https://dev.to/arindam_1729/11-open-source-python-projects-you-should-know-in-2024-583o",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdch857t54wnebiol8i3t.gif",
    },
    {
      title: "How to Implement RBAC (Role-Based Access Control) in Supabase",
      description:
        "In this article, we will learn how to implement RBAC (Role-Based Access Control) in Supabase.",
      link: "https://www.permit.io/blog/how-to-implement-rbac-in-supabase",
      image:
        "https://www.permit.io/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F2H4tKg0FTfGFU3ciyTPa&w=3840&q=75",
    },
    {
      title: "8 Developer Tools You Should Try in 2024",
      description:
        "In this article, we will discuss 8 developer tools that you should try in 2024.",
      link: "https://dev.to/studio1hq/8-developer-tools-you-should-try-in-2024-b8c",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fz21l3b031jaox5raxlp6.png",
    },
    {
      title: "5 Tools Every Developer Should Use in 2024",
      description:
        "In this article, we will discuss 5 tools that every developer should use in 2024.",
      link: "https://dev.to/studio1hq/5-tools-every-developer-must-use-in-2024-438",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnidw6e25vyfgn74ftsa6.png",
    },
    {
      title: "How to Build a Request Access Approval System in Next.js",
      description:
        "In this article, we will learn how to build a request access approval system in Next.js.",
      link: "https://dev.to/arindam_1729/how-to-build-a-request-access-approval-system-using-nextjs-p3p",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fy190e3vkf86c96c426ur.gif",
    },
    {
      title: "Build a Secure Chat App with React, Firebase, and Permit.io",
      description:
        "A step-by-step guide to building a secure, real-time chat app with React, Firebase, and Permit.io - learn how to handle user roles and set up Firebase for authentication and real-time messaging.",
      link: "https://www.permit.io/blog/coding-tutorial-build-a-secure-chat-app-with-react-firebase-and-permitio",
      image:
        "https://www.permit.io/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FGaBppnGURR2iCpdv8VFL&w=3840&q=75",
    },
    {
      title:
        "7 Must-Try Open-Source Tools for Python and JavaScript Developers ",
      description:
        "In this article, we will discuss 7 open-source tools that every Python and JavaScript developer should try.",
      link: "https://dev.to/arindam_1729/7-must-try-open-source-tools-for-python-and-javascript-developers-4c56",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F67vy07x7txqv3ipnqvtv.gif",
    },
    {
      title: "Building and Deploying TypeScript Microservices to Kubernetes",
      description:
        "In this tutorial, you’ll learn how to build a microservice with Encore.ts, and deploy it to a Kubernetes cluster in your AWS account. We’ll show you how to deploying your microservices.",
      link: "https://dev.to/encore/building-and-deploying-typescript-microservices-to-kubernetes-3110",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fq8jei5qtmeckkmdx7hfj.png",
    },
    {
      title: "Top 5 Open Source Projects You Must Explore Before 2025",
      description:
        "In this article, we will discuss the top 5 open-source projects that you must explore before 2025.",
      link: "https://dev.to/arindam_1729/top-5-open-source-projects-you-must-explore-before-2025-3l6l",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fneqgdcpodgseopbqimdg.gif",
    },
  ],
  Blogs: [
    {
      title: "Building a Kanban Board with Next.js,Vercel AI and Tolgee",
      description:
        "In this article, we will build a real-time Kanban board in Next.js using WebSockets, with database support, AI support through the Vercel AI SDK and localization via Tolgee.",
      link: "https://dev.to/tolgee_i18n/building-a-kanban-board-with-nextjsvercel-ai-and-tolgee-493g",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8se47yg59oimb4sl06eg.gif",
    },
    {
      title: "How I Built the World's Best NextJS, AI Scheduling App",
      description:
        "By the end of this article, you'll learn how to Integrate an AI copilot into your Next.js application by building a scheduling app with Cal.com and Develop and manage a custom scheduler that enhances user experience across your application.",
      link: "https://dev.to/tolgee_i18n/building-a-kanban-board-with-nextjsvercel-ai-and-tolgee-493g",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpvtqkii2tlp04p2cvlx9.gif",
    },
    {
      title: "How to create a LinkedIn job scraper in Python with Crawlee",
      description:
        "In this article, we will build a web application that scrapes LinkedIn for job postings using Crawlee and Streamlit..",
      link: "https://dev.to/crawlee/how-to-create-a-linkedin-job-scraper-in-python-with-crawlee-h9d",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwsyjca1b8q6g9wapyhnp.jpg",
    },
    {
      title:
        "Develop a Real-Time Collaborative Document Editor with Next.js, Appwrite, Liveblocks and Permit.io",
      description:
        "A step-by-step guide to build a secure, real-time collaborative document editor with Next.js, Appwrite, Liveblocks, and Permit.io using ReBAC for flexible and secure relationship-based access control.",
      link: "https://javascript.plainenglish.io/develop-a-real-time-collaborative-document-editor-with-next-js-appwrite-liveblocks-and-permit-io-699a865a7aeb",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Wan7SBxJfZf2HlOu9AIPLw.png",
    },
    {
      title: "Building an AI-powered quiz application with Next.js and OpenAI",
      description:
        "In this tutorial, you'll learn how to build an AI-powered quiz application that enables users to select a topic, answer questions related to that topic, and receive their score instantly upon completing the quiz.",
      link: "https://dev.to/latitude/building-an-ai-powered-quiz-application-with-nextjs-and-openai-2673",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ff04c0el5k9h0pee1pcpp.png",
    },
    {
      title:
        "Manage Permissions in a Langflow Chain for LLM Queries using Permit.io",
      description:
        "A Step-by-Step Guide to Secure and Scalable Permission Management for AI Models with Permit.io",
      link: "https://astrodevil.medium.com/manage-permissions-in-a-langflow-chain-for-llm-queries-using-permit-io-7de8a0fb17b3",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*bY1LzPkOXDXI_eRJ_V-y8w.png",
    },
  ],
  Services: [
    {
      title: "Blogs as Service",
      description:
        "We create high-quality, technical and promotional blogs tailored for devtool and software companies. Our team of expert writers specializes in crafting SEO-optimized content that drives engagement, educates developers, and helps your tools stand out in a competitive market.",
      image:
        "https://cdn.prod.website-files.com/66fc1a4b1a3399833cbb73ce/66fc1a4b1a3399833cbb750e_EFB6AC06-B22C-42F1-B402-CF24DEF2A34D.webp",
    },
    {
      title: "DevRel as Service",
      description:
        "Accelerate your growth with targeted Developer Relations services. We help devtool and software companies connect authentically with developers, grow communities, and turn users into advocates.",
      image:
        "https://cdn.prod.website-files.com/66fc1a4b1a3399833cbb73ce/66fc1a4b1a3399833cbb7511_02073CC0-207B-4079-9DA5-BBFDA837CE50.webp",
    },
    {
      title: "More Services",
      description: "New services coming soon. Stay tuned for updates.",
      image:
        "https://cdn.prod.website-files.com/66fc1a4b1a3399833cbb73ce/66fc1a4b1a3399833cbb750f_D579D1FF-97FE-42E0-803A-33634CB722AD.webp",
    },
  ],
  Testimonials: [
    {
      name: "Saurav Jain",
      role: "DevRel, Crawlee",
      avatar: SauravImg.src,
      content: `Arindam and Studio1 team work really great with technical posts, they are super quick and write deeply technical articles that reaches to the right devleoper audiences through their absolute fantastic distribution system. 
      
      Highly recommended. 💯`,
      highlights: [
        "Arindam",
        "Studio1",
        "technical",
        "posts",
        "super",
        "quick",
        "deeply",
        "technical",
        "articles",
        "fantastic",
        "distribution",
        "system",
        "Highly",
        "recommended",
      ],
    },
    {
      name: "Nathan Telbert",
      role: "DevRel, CopilotKit",
      avatar: NathanImg.src,
      content: `Working with Studio1 has been an excellent experience for us. The team delivered high-quality blogs focused on exciting projects that perfectly matched our content needs. 
      
      Their ability to create engaging content for developers has been a valuable addition to our educational content efforts. 
      
      We’re excited to continue collaborating on future projects!`,
      highlights: [
        "Studio1",
        "high-quality blogs",
        "engaging",
        "educational content",
        "continue",
        "collaborating",
        "future",
        "projects",
      ],
    },
    {
      name: "Ivan Cordoba",
      role: "CEO & Founder Opire",
      avatar: IvanImg.src,
      content: `Studio1 turned our ideas into clear and engaging content, helping us connect with our community and strengthen our identity.
            
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
      highlights: [
        "Arindam",
        "content pieces",
        "astonishing",
        "network of writers",
        "scale the workload",
        "10/10 experience",
      ],
    },
    {
      name: "Agita Jaunzeme",
      role: "Community Manager, VDK(VMware)",
      avatar: AgitaImg.src,
      content: `Very fast, good-quality work, results! Nothing to add; 
      
      I totally recommend working with Amitesh!`,
      highlights: ["Amitesh", "good-quality"],
    },
    {
      name: "Marketa Cizmar",
      role: "C0O, Tolgee",
      avatar: MarketaImg.src,
      content: `Arindam wrote a technical article for us, and it was a pleasure working with him. He was friendly, responsive, and always quick to reply to any questions or feedback. 
      
      The whole process was smooth!`,
      highlights: [
        "Arindam",
        "technical article",
        "friendly",
        "responsive",
        "quick",
        "reply",
        "questions",
        "feedback",
        "smooth",
      ],
    },
    {
      name: "Julia Machado",
      role: "Founder & CEO, WebCrumbs",
      avatar: JuliaImg.src,
      content: `Arindam gave us a masterclass on how to launch on Product Hunt and I dare to say if it wasn't that we wouldn't have achieved 3rd in our first launch ever and with almost zero preparation.
            
            He write great technical texts that reach an impressive audience. 
            
            We'll definitely work with him again!`,
      highlights: [
        "Product Hunt",
        "technical texts",
        "impressive audience",
        "work with him again",
      ],
    },
    {
      name: "David Mython",
      role: "CEO, Arcjet",
      avatar: DavidImg.src,
      content: `We worked with Arindam on a writeup of the Arcjet beta release.
            
            The goal was to introduce the SDK to developers and show off how you can use Arcjet to protect an interesting application. 
            
            Arindam was responsive to feedback and helped us achieve those goals`,
      highlights: [
        "Arindam",
        "Arcjet beta release",
        "SDK",
        "developers and show off",
        "protect an interesting application",
      ],
    },
    {
      name: "Cole Stark",
      role: "CMO, Pieces.app",
      avatar: ColeImg.src,
      content: `Arindam has been an excellent addition to our DevRel team. 
            
            He brought a creative mindset and a hard work ethic to our team which helped us to scale our Discord presence and overall community growth efforts.`,
      highlights: [
        "Arindam",
        "DevRel team",
        "creative mindset",
        "hard work ethic",
        "scale our Discord presence",
        "overall community growth efforts",
      ],
    },
    {
      name: "Ferran Rodríguez",
      role: "Growth Manager, Latitude",
      avatar: FerranImg.src,
      content: `Working with Arindam has been one of the best experiences that I had collaborating with a technical writer.
      
              Execution and delivery was almost perfect, we just needed one small round of adjustments before publishing.
      
              I can't recommend enough to work with Arindam and I'm looking forward to our next collaboration!`,
      highlights: [
        "Arindam",
        "technical writer",
        "briefing process",
        "efficient",
        "topic ideas",
        "approach the content piece",
        "Execution and delivery",
        "perfect",
        "small round of adjustments",
        "publishing",
        "technical content",
        "recommend",
        "collaboration",
      ],
    },
  ],
  TrustedbyLogos: [
    {
      name: "Permit",
      image: PermitFull.src,
      className:
        "h-10 sm:h-12 md:h-16 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
      alt: "Permit",
    },
    {
      name: "Tolgee",
      image: TolgeeFull.src,
      className:
        "h-8 sm:h-10 md:h-12 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain",
      alt: "Tolgee",
    },
    {
      name: "CopilotKit",
      image:
        "https://github.com/RecursivelyAI/CopilotKit/assets/746397/5890217b-524e-49c5-a89e-b8743d2acd51",
      className:
        "h-8 sm:h-9 md:h-10 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
      alt: "CopilotKit",
    },
    {
      name: "Nebius",
      image:
        "https://companieslogo.com/img/orig/NBIS_BIG.D-f866f771.png?t=1729269594",
      className:
        "h-5 sm:h-6 md:h-6 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain",
      alt: "Nebius",
    },
    {
      name: "Latitude",
      image:
        "https://github.com/latitude-dev/latitude/assets/5465249/4783e122-7150-4bcc-96e0-a3c9c4c1c53b",
      className:
        "h-6 sm:h-7 md:h-8 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
      alt: "Latitude",
    },
    {
      name: "Opire",
      image:
        "https://opire.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbig_logo.fa525053.svg&w=3840&q=75",
      className:
        "h-8 sm:h-9 md:h-10 w-auto max-w-[100px] sm:max-w-[120px] md:max-w-[144px] object-contain",
      alt: "Opire",
    },
    {
      name: "Crawlee",
      image: "https://crawlee.dev/img/crawlee-dark.svg",
      className:
        "h-10 sm:h-12 md:h-14 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain",
      alt: "Crawlee",
    },
    {
      name: "Encore",
      image:
        "https://camo.githubusercontent.com/77d11bfd37de0bb015849c0305a4cd653bee5f656570ba78899594a67eb08a8c/68747470733a2f2f656e636f72652e6465762f6173736574732f696d672f6c6f676f2e737667",
      className:
        "h-10 sm:h-12 md:h-14 w-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] object-contain",
      alt: "Encore",
    },
    {
      name: "Webcrumbs",
      image:
        "https://camo.githubusercontent.com/9350767c2dd34b635f3e63e8e61798502bc4eee59df80accb9dc145af0d778c9/68747470733a2f2f63646e2e7765626372756d62732e6f72672f6173736574732f696d616765732f6272616e642f6c6f676f5f7265642e737667",
      className:
        "h-10 sm:h-12 md:h-16 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
      alt: "Webcrumbs",
    },
  ],
  BlogAsServiceProcess: [
    {
      name: "Discovery",
      description:
        "We analyze your current content strategy and identify opportunities for contribution and improvement.",
      icon: Search,
      details: [
        "Knowing Tech stack",
        "Analyze developer audience",
        "Identify content scope",
        "initial communication",
      ],
    },
    {
      name: "Strategy",
      description:
        "Develop a customized content plan aligned with your business goals and audience needs.",
      icon: LightbulbIcon,
      details: [
        "Knowing content requirement",
        "Topic ideation",
        "Content format decision",
        "Distribution channel selection",
      ],
    },
    {
      name: "Creation",
      description:
        "Our expert team of technical writers produces high-quality, engaging content.",
      icon: Rocket,
      details: [
        "Technical content development",
        "Custom code examples and demos",
        "Technical review and validation",
        "SEO optimization and formatting",
      ],
    },
    {
      name: "Distribution",
      description:
        "We publish and promote your content across multiple platforms to maximize reach.",
      icon: BarChart,
      details: [
        "Multi-platform publishing",
        "Analytics review",
        "Social Media posts",
        "Developer community sharing",
      ],
    },
  ],
  BlogAsServiceTeam: [
    {
      name: "Arindam Majumder",
      role: "Co-founder & Content Lead",
      image: "https://avatars.githubusercontent.com/u/109217591?v=4",
      bio: "Developer Advocate with expertise in technical writing and open-source. Has reached 270k+ developers through technical content, with notable contributions to Next.js and featured in their RC release blog. Specializes in creating developer-centric content that drives engagement and growth.",
      social: {
        twitter: "https://dub.sh/arindam-x",
        linkedin: "https://dub.sh/arindam-linkedin",
        website: "https://arindam-majumder.vercel.app",
      },
    },
    {
      name: "Amitesh Anand",
      role: "Co-founder & Operations Lead",
      image: "/assets/amitesh.png",
      bio: "Technical writer and developer advocate with expertise in creating scalable content. Published 80k+ words reaching thousands of readers across major tech platforms. Nominated for Noonies 2022 Tech Awards, focused on delivering high-impact technical content.",
      social: {
        twitter: "https://mobile.twitter.com/astrodevil_",
        linkedin: "https://www.linkedin.com/in/amitesh1208/",
        website: "https://mranand.com/featured/",
      },
    },
  ],

  DevRelAsServiceProcess: [
    {
      name: "Discovery",
      description:
        "We analyze your current DevRel efforts and identify opportunities for improvement.",
      icon: Search,
      details: [
        "Audit existing developer programs",
        "Analyze community engagement",
        "Identify growth opportunities",
        "Assessment report",
      ],
    },
    {
      name: "Strategy",
      description:
        "Develop a customized roadmap aligned with your business goals and developer needs.",
      icon: LightbulbIcon,
      details: [
        "Custom roadmap creation",
        "Resource allocation",
        "Timeline planning",
        "KPI definition",
      ],
    },
    {
      name: "Implementation",
      description:
        "Execute the strategy with our experienced team of DevRel professionals.",
      icon: Rocket,
      details: [
        "Content creation",
        "Community building",
        "Plan exciting campaigns",
        "Developer engagement",
      ],
    },
    {
      name: "Measurement",
      description:
        "Track KPIs and adjust strategies based on data-driven insights.",
      icon: BarChart,
      details: [
        "Performance tracking",
        "Analytics review",
        "Strategy adjustment",
        "ROI measurement",
      ],
    },
  ],
  DevRelAsServiceServices: [
    {
      title: "Technical Content Creation",
      description:
        "High-quality tutorials, documentation, and technical blog posts that resonate with developers.",
      icon: Code2,
    },
    {
      title: "Community Management",
      description:
        "Build and nurture a thriving developer community around your product or platform.",
      icon: Users,
    },
    {
      title: "Developer Education",
      description:
        "Comprehensive training programs and workshops to help developers succeed with your tools.",
      icon: BookOpen,
    },
    {
      title: "Developer Support",
      description:
        "Building a responsive developer community where questions are answered and solutions are shared collaboratively.",
      icon: MessageSquare,
    },
    {
      title: "Video Content",
      description:
        "Engaging video tutorials, product demos, and technical livestreams.",
      icon: Youtube,
    },
    {
      title: "Tool Audit",
      description:
        "Strategic onboarding and developer experience assessment through comprehensive tool ecosystem analysis.",
      icon: GitBranch,
    },
  ],
  DevRelAsServiceTeam: [
    {
      name: "Arindam Majumder",
      role: "Open source developer and DevRel",
      image: "https://avatars.githubusercontent.com/u/109217591?v=4",
      bio: "",
      social: {
        twitter: "https://dub.sh/arindam-x",
        linkedin: "https://dub.sh/arindam-linkedin",
        website: "https://arindam-majumder.vercel.app",
      },
    },
    {
      name: "Amitesh Anand",
      role: "Technical writer and DevRel",
      image: "/assets/amitesh.png",
      bio: "",
      social: {
        twitter: "https://mobile.twitter.com/astrodevil_",
        linkedin: "https://www.linkedin.com/in/amitesh1208/",
        website: "https://mranand.com/featured/",
      },
    },
    {
      name: "Shivay Lamba",
      role: "ML Engineer and Open source advocate",
      image: "https://avatars.githubusercontent.com/u/19529592?v=4",
      bio: "",
      social: {
        twitter: "https://x.com/HowDevelop",
        linkedin: "https://in.linkedin.com/in/shivaylamba",
        website: "https://shivaylamba.me",
      },
    },
  ],
};
