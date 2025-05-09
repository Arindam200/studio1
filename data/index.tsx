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
import JesseImg from "@/public/assets/Jesse.png";
import React from "react";
import {
  Permit,
  Tolgee,
  Copilotkit,
  Nebius,
  Latitude,
  Webcrumbs,
  Crawlee,
  Opire,
  Eachlab,
  Stream,
  Swytchcode,
  Stackql,
  Encore,
  Velt,
  ReadySet,
  Nitric,
  KitOps,
  CodeRabbit,
  PermitFull,
  TolgeeFull,
  CopilotkitFull,
  NebiusFull,
  LatitudeFull,
  WebcrumbsFull,
  CrawleeFull,
  OpireFull,
  EncoreFull,
  VeltFull,
  ReadySetFull,
  NitricFull,
  KitOpsFull,
  CodeRabbitFull,
} from "@/constants/image";
import {
  IconAugmentedReality,
  IconBolt,
  IconBook,
  IconBrandYoutube,
  IconBulb,
  IconChartBar,
  IconChartBarPopular,
  IconCode,
  IconGitBranch,
  IconHeadset,
  IconHeartHandshake,
  IconMessage,
  IconPlus,
  IconRocket,
  IconSearch,
  IconSettingsCheck,
  IconUsers,
} from "@tabler/icons-react";
import {
  ChartBar,
  ChatCentered,
  ChatCenteredDots,
  CubeFocus,
  Handshake,
  Headset,
  Lightning,
  Nut,
  PencilLine,
  Users as UsersTwo,
} from "@phosphor-icons/react/dist/ssr";

export const Data = {
  Companies: [
    {
      id: 1,
      name: "Nebius",
      designation: "AI Cloud",
      image: Nebius,
      href: "https://nebius.com/",
      description: "AI-centric cloud platform offering infrastructure for intensive AI workloads.",
    },
    {
      id: 2,
      name: "Velt",
      designation: "Real-time Collaboration",
      image: Velt,
      href: "https://velt.dev/",
      description: "Offers real-time collaboration tools for web applications, enabling features like live cursors and co-editing.",
    },
    {
      id: 3,
      name: "Permit.io",
      designation: "Authorization as a Service",
      image: Permit,
      href: "https://www.permit.io/",
      description: "Provides a full-stack authorization framework, simplifying access control integration for developers.",
    },
    {
      id: 4,
      name: "Stream",
      designation: "Chat & Activity APIs",
      image: Stream,
      href: "https://getstream.io/",
      description: "APIs and SDKs for real-time chat, video, and activity feeds at scale.​",
    },
    {
      id: 5,
      name: "CodeRabbit",
      designation: "AI Code Review",
      image: CodeRabbit,
      href: "https://coderabbit.ai/",
      description: "Context-aware, AI-powered platform for code reviews.",
    },
    {
      id: 6,
      name: "Eachlabs",
      designation: "Video-to-Anime AI",
      image: Eachlab,
      href: "https://eachlabs.com/",
      description: "AI tool that transforms videos into anime-style animations.",
    },
    {
      id: 7,
      name: "KitOps",
      designation: "MLOps Tools",
      image: KitOps,
      href: "https://kitops.org/",
      description: "Open-source tool for packaging and versioning AI/ML models.",
    },
    {
      id: 8,
      name: "Nitric",
      designation: "Cloud Framework",
      image: Nitric,
      href: "https://nitric.io/",
      description: "Cloud-native backend framework with infra-as-code support.",
    },
    {
      id: 9,
      name: "Encore",
      designation: "AI Search Engine",
      image: Encore,
      href: "https://encore.ai/",
      description: "TypeScript-based framework for building backend applications.",
    },
    {
      id: 10,
      name: "CopilotKit",
      designation: "AI Agents",
      image: Copilotkit,
      href: "https://www.copilotkit.ai/",
      description: "Open-source platform to embed custom AI copilots in web apps.",
    },
    {
      id: 11,
      name: "Crawlee",
      designation: "Web Scraping Framework",
      image: Crawlee,
      href: "https://crawlee.dev/",
      description: "Web scraping and browser automation library for JavaScript and Python.",
    },
    {
      id: 12,
      name: "Tolgee",
      designation: "i18n Tool",
      image: Tolgee,
      href: "https://tolgee.io/",
      description: "Localization platform with in-context translation for web apps.",
    },
    {
      id: 13,
      name: "ReadySet",
      designation: "Database Caching",
      image: ReadySet,
      href: "https://readyset.io/",
      description: "Caching layer for databases to speed up queries without code changes.",
    },
    {
      id: 14,
      name: "WebCrumbs",
      designation: "AI Web Development",
      image: Webcrumbs,
      href: "https://www.webcrumbs.ai/",
      description: "AI platform that automates frontend web development workflows.",
    },
    {
      id: 15,
      name: "SwytchCode",
      designation: "Dev Environment Sync",
      image: Swytchcode,
      href: "https://swytchcode.com/",
      description: "AI-powered tool that generates ready-to-use integration code for APIs.",
    },
    {
      id: 16,
      name: "StackQL",
      designation: "Cloud Resource Query",
      image: Stackql,
      href: "https://stackql.io/",
      description: "Query cloud infrastructure using SQL, like querying a database.",
    },
    {
      id: 17,
      name: "Latitude",
      designation: "LLM Development Platform",
      image: Latitude,
      href: "https://latitude.so/",
      description: "Open-source tool for teams to design and refine LLM prompts collaboratively.",
    },
    {
      id: 18,
      name: "Opire",
      designation: "Open Source Platform",
      image: Opire,
      href: "https://opire.dev/",
      description: "Community platform for open-source project management.",
    }    
  ],
  Features: [
    {
      title: "Quality",
      description:
        "Premium developer content at 50% less cost than other technical agencies. More than 65% of our clients choose to work with us again.",
      icon: CubeFocus,
    },
    {
      title: "Experience",
      description:
        "From seed-stage startups to NASDAQ-listed companies, we've supported launches, crafted dev-friendly contents and scaled developer adoption.",
      icon: Lightning,
    },
    {
      title: "Expertise",
      description:
        "AI, ML, DevOps, Python, Cloud, WebDev and API integrations - our team knows tech.",
      icon: Nut,
    },
    {
      title: "Support",
      description:
        "We operate as an embedded team — fast iterations, no hand-holding required.",
      icon: Headset,
    },
    {
      title: "Results",
      description:
        "1M+ content views across blogs, tutorials and videos, driving visibility, credibility and product growth.",
      icon: ChartBar,
    },
    {
      title: "Collaboration",
      description:
        "20+ successful partnerships in last 8 months, fast-moving teams trust us to deliver.",
      icon: Handshake,
    },
    {
      title: "Testimonials",
      description:
        "Trusted by founders, CMOs and DevRel teams to create content that drives real developer impact.",
      icon: ChatCenteredDots,
    },
  ],

  Allblogs: [
    {
      title: "Understanding the Model Context Protocol: Architecture",
      description:
        "Model Context Protocol (MCP) offers a clean, open standard for connecting language models to real-world systems through a modular, plug-and-play interface. In this article, we explore how MCP works..",
      link: "https://nebius.com/blog/posts/understanding-model-context-protocol-mcp-architecture",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8se47yg59oimb4sl06eg.gif",
      tags: ["SEO"],
      version: 1,
    },
    {
      title: "Building a Kanban Board with Next.js,Vercel AI and Tolgee",
      description:
        "In this article, we will build a real-time Kanban board in Next.js using WebSockets, with database support, AI support through the Vercel AI SDK and localization via Tolgee.",
      link: "https://dev.to/tolgee_i18n/building-a-kanban-board-with-nextjsvercel-ai-and-tolgee-493g",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8se47yg59oimb4sl06eg.gif",
      tags: ["project-building"],
      version: 1,
    },
    {
      title: "How I Built the World's Best NextJS, AI Scheduling App",
      description:
        "By the end of this article, you'll learn how to Integrate an AI copilot into your Next.js application by building a scheduling app with Cal.com and Develop and manage a custom scheduler that enhances user experience across your application.",
      link: "https://dev.to/tolgee_i18n/building-a-kanban-board-with-nextjsvercel-ai-and-tolgee-493g",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpvtqkii2tlp04p2cvlx9.gif",
      tags: ["project-building"],
      version: 1,
    },
    {
      title: "How to create a LinkedIn job scraper in Python with Crawlee",
      description:
        "In this article, we will build a web application that scrapes LinkedIn for job postings using Crawlee and Streamlit..",
      link: "https://dev.to/crawlee/how-to-create-a-linkedin-job-scraper-in-python-with-crawlee-h9d",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwsyjca1b8q6g9wapyhnp.jpg",
      tags: ["project-building"],
      version: 1,
    },
    {
      title:
        "Develop a Real-Time Collaborative Document Editor with Next.js, Appwrite, Liveblocks and Permit.io",
      description:
        "A step-by-step guide to build a secure, real-time collaborative document editor with Next.js, Appwrite, Liveblocks, and Permit.io using ReBAC for flexible and secure relationship-based access control.",
      link: "https://javascript.plainenglish.io/develop-a-real-time-collaborative-document-editor-with-next-js-appwrite-liveblocks-and-permit-io-699a865a7aeb",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Wan7SBxJfZf2HlOu9AIPLw.png",
      tags: ["project-building"],
      version: 1,
    },
    {
      title: "Building an AI-powered quiz application with Next.js and OpenAI",
      description:
        "In this tutorial, you'll learn how to build an AI-powered quiz application that enables users to select a topic, answer questions related to that topic, and receive their score instantly upon completing the quiz.",
      link: "https://dev.to/latitude/building-an-ai-powered-quiz-application-with-nextjs-and-openai-2673",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ff04c0el5k9h0pee1pcpp.png",
      tags: ["project-building"],
      version: 1,
    },
    {
      title:
        "Manage Permissions in a Langflow Chain for LLM Queries using Permit.io",
      description:
        "A Step-by-Step Guide to Secure and Scalable Permission Management for AI Models with Permit.io",
      link: "https://astrodevil.medium.com/manage-permissions-in-a-langflow-chain-for-llm-queries-using-permit-io-7de8a0fb17b3",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*bY1LzPkOXDXI_eRJ_V-y8w.png",
      tags: ["project-building"],
      version: 1,
    },
    {
      title:
        "I Found a Tool Even Better than v0 – You Won't Believe What It Can Do!",
      description:
        "As a front-end developer, you've probably heard all about Vercel v0 — the tool that seemed to revolutionize front-end development.But, is v0 as great as it sounds? I spent time comparing it with a new tool, Webcrumbs Frontend AI, to see if it really is a game-changer.",
      link: "https://dev.to/arindam_1729/i-found-a-tool-even-better-than-v0-you-wont-believe-what-it-can-do-igf",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F70kbai7v3r12dr860psw.gif",
      tags: ["project-building"],
      version: 1,
    },
    {
      title:
        "Building an AI-powered finance planner with full-stack Next.js and Nebius AI Studio",
      description:
        "In this guide, we'll build an AI-powered financial planner using the Meta Llama 3.1 70B model via Nebius AI Studio and a full-stack Next.js app. This solution works seamlessly whether you're using the Pages Router or the App Router, as much of the customization relies on setting up a custom Next.js server.",
      link: "https://nebius.com/blog/posts/building-ai-powered-finance-planner",
      // image:
      //   "https://storage.ai.nebius.cloud/www-gpu-assets/pages/blog/building-ai-powered-finance-planner/sharing1.jpg",
      tags: ["project-building"],
      version: 1,
    },
    {
      title: "Make Prototyping Easier with Webcrumbs",
      description: "Discover the Future of Prototyping with Webcrumbs AI",
      link: "https://astrodevil.medium.com/make-prototyping-easier-with-webcrumbs-3668d8e880d2",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*kirTT63OzhfJCcitLgDRqA.png",
      tags: ["SEO"],
      version: 1,
    },
    {
      title: "How to Add RBAC Authorization in Next.js",
      description:
        "A Comprehensive Guide to RBAC Authorization in Next.js using Permit.io",
      link: "https://astrodevil.medium.com/how-to-add-rbac-authorization-in-next-js-1d5e50cbad29",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*yWfXQWV_89Dg6MarsUhnvw.png",
      tags: ["project-building"],
      version: 1,
    },
    {
      title: "How to run Meta Llama 3.1 405B with Nebius AI Studio API",
      description:
        "Discover how Nebius AI Studio enables you to integrate the famous Llama 3.1 405B large language model in your applications.",
      link: "https://nebius.com/blog/posts/run-meta-llama-405b-in-ai-studio",
      image:
        "https://storage.ai.nebius.cloud/www-gpu-assets/pages/blog/introducing-nebius-ai-studio/preview.jpg",
      tags: ["How-tos"],
      version: 1,
    },
    {
      title: "Implementing GraphQL Authorization: A Practical Guide",
      description:
        "Learn how to implement scalable authorization in GraphQL. Simplify RBAC and Permissions management with step-by-step instructions.",
      link: "https://www.permit.io/blog/implementing-graphql-authorization",
      image:
        "https://www.permit.io/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FYDN8Xi5vRQONu81cC1yw&w=1920&q=75",
      tags: ["project-building"],
      version: 1,
    },
    {
      title: "How to Build a Real-Time Dashboard with Encore.ts and React",
      description:
        "In this tutorial, you'll learn how to build a real-time dashboard with Encore.ts and React. We'll show you how to set up a real-time connection between your server and client, and how to display real-time data in your dashboard.",
      link: "https://dev.to/encore/how-to-build-a-real-time-dashboard-with-encorets-and-react-ii9",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnd1e4rgk07yfo638ses9.png",
      tags: ["project-building"],
      version: 1,
    },
    {
      title: "Creating your own AI-powered code generator and reviewer",
      description:
        "In this hands-on tutorial, you'll learn how to create a powerful code generation and review application that you can customize to your exact needs. We'll use Nebius AI Studio and open-source models, making it both cost-effective and extensible.",
      link: "https://nebius.com/blog/posts/building-ai-powered-code-generator",
      image:
        "https://media.licdn.com/dms/image/v2/D4E22AQHXtGpgMsH-BA/feedshare-shrink_800/feedshare-shrink_800/0/1733485301047?e=2147483647&v=beta&t=ZEE4MK-HOS0rbxXkwGi7rqTA9GWxoON8u4L3EXp4tNo",
      tags: ["project-building"],
      version: 1,
    },
    {
      title:
        "Build Real-Time Presence Features Like Figma and Google Docs in Your App in Minutes",
      description:
        "In this article, we will learn how to build real-time presence features like Figma and Google Docs in your app in minutes using Liveblocks.",
      link: "https://dev.to/astrodevil/build-real-time-presence-features-like-figma-and-google-docs-in-your-app-in-minutes-1lae",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fn4ktzy1anqot0vjselc6.png",

      tags: ["project-building"],
      version: 1,
    },
    {
      title: "Build a Real-Time Bidding System With Next.js and Stream",
      description:
        "Stream’s React Chat SDK with the JavaScript client will help us build a bidding app with support for rich messages, image uploads, videos and more.",
      link: "https://thenewstack.io/build-a-real-time-bidding-system-with-next-js-and-stream/",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9bvci4yohqc5r2o65eda.png",
      tags: ["project-building"],
      version: 1,
    },
    {
      title: "Vibe Coding with Cursor AI: How to Build Figma-Style Comments",
      description:
        "In this article, we will learn how to build a Figma-Style Comments with Cursor and Velt.",
      link: "https://dev.to/arindam_1729/vibe-coding-with-cursor-ai-how-to-build-figma-style-comments-556m",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9bvci4yohqc5r2o65eda.png",
      tags: ["project-building"],
      version: 1,
    },
    {
      title:
        "Stop Vibe Coding: Make Your AI SaaS Production-Ready with These 7 Tools",
      description:
        "In this article, we will learn how to make your AI SaaS production-ready with these 7 tools.",
      link: "https://dev.to/arindam_1729/stop-vibe-coding-make-your-ai-saas-production-ready-with-these-7-tools-2pam/",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9bvci4yohqc5r2o65eda.png",
      tags: ["general"],
      version: 1,
    },
    {
      title:
        "How to Build a Ghibli-Style AI Video App Using Pixverse and Eachlabs",
      description:
        "In this article, we will learn how to build a Ghibli-Style AI Video App Using Pixverse and Eachlabs.",
      link: "https://dev.to/astrodevil/how-to-build-a-ghibli-style-ai-video-app-using-pixverse-and-eachlab-fhc",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9bvci4yohqc5r2o65eda.png",
      tags: ["project-building"],
      version: 1,
    },
    {
      title: "NestJS vs Encore.ts",
      description:
        "Choosing the Right Framework for Your TypeScript Microservices",
      link: "https://dev.to/encore/nestjs-vs-encorets-choosing-the-right-framework-for-your-typescript-microservices-1g61",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9bvci4yohqc5r2o65eda.png",
      tags: ["general"],
      version: 1,
    },
    {
      title:
        "Build Google Sheets-Style Collaborative Comments in Your Web App Using TanStack Tables and Velt SDK",
      description:
        "In this article, we will learn how to build a Google Sheets-Style Collaborative Comments in Your Web App Using TanStack Tables and Velt SDK.",
      link: "https://dev.to/astrodevil/build-google-sheets-style-collaborative-comments-in-your-web-app-using-tanstack-tables-and-velt-sdk-53lf",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9bvci4yohqc5r2o65eda.png",
      tags: ["project-building"],
      version: 1,
    },
    {
      title:
        "Build a React File Sharing App with Granular Access Controls (ReBAC)",
      description:
        "In this article, we will learn how to build a React File Sharing App with Granular Access Controls (ReBAC).",
      link: "https://dev.to/astrodevil/build-a-react-file-sharing-app-with-granular-access-controls-rebac-ka4",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9bvci4yohqc5r2o65eda.png",
      tags: ["project-building"],
      version: 1,
    },
    {
      title: "Git, diffs, patches - thinking in changes, not just code",
      description:
        "In this article, we will learn how to think in changes, not just code.",
      link: "https://dev.to/coderabbitai/git-diffs-patches-thinking-in-changes-not-just-code-2f0p",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9bvci4yohqc5r2o65eda.png",
      tags: ["general"],
      version: 1,
    },
    {
      title:
        "How to Make Your Postgres Database 100x Faster and 50% Cheaper with Readyset Cloud",
      description:
        "In this article, we will learn how to make your Postgres database 100x faster and 50% cheaper with Readyset Cloud.",
      link: "https://dev.to/astrodevil/how-to-make-your-postgres-database-100x-faster-and-50-cheaper-with-readyset-cloud-2n7j",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9bvci4yohqc5r2o65eda.png",
      tags: ["project-building"],
      version: 1,
    },
    {
      title:
        "Build Real-Time Presence Features Like Figma and Google Docs in Your App in Minutes",
      description:
        "In this article, we will learn how to build a real-time presence features like Figma and Google Docs in your app in minutes.",
      link: "https://dev.to/astrodevil/build-real-time-presence-features-like-figma-and-google-docs-in-your-app-in-minutes-1lae",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9bvci4yohqc5r2o65eda.png",
      tags: ["project-building"],
      version: 1,
    },
    {
      title: "I Built a Social Media App in Minutes with Webcrumbs & Lovable!",
      description:
        "In this article, we will learn how to build a social media app in minutes with Webcrumbs and Lovable.",
      link: "https://dev.to/arindam_1729/i-built-a-social-media-app-in-minutes-with-webcrumbs-lovable-4h7e",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9bvci4yohqc5r2o65eda.png",
      tags: ["project-building"],
      version: 1,
    },
    {
      title: "Authentication and Authorization with Firebase",
      description:
        "A step-by-step guide to building a secure, multi-tenant app using Firebase for authentication and storage, and Permit.io for fine-grained authorization—learn how to manage permissions, enforce access control, and debug policies with audit logs..",
      link: "https://www.permit.io/blog/authentication-and-authorization-with-firebase",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9bvci4yohqc5r2o65eda.png",
      tags: ["SEO"],
      version: 1,
    },
    {
      title: "Implementing Role Based Access Control (RABC) in React",
      description:
        "In this article, we will learn how to implement Role Based Access Control (RABC) in React.",
      link: "https://www.permit.io/blog/implementing-react-rbac-authorization",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9bvci4yohqc5r2o65eda.png",
      tags: ["project-building"],
      version: 1,
    },
    {
      title:
        "Build an AI Travel Planner with CopilotKit, LangGraph & Google Maps API",
      description:
        "In this article, we will learn how to build an AI Travel Planner with CopilotKit, LangGraph & Google Maps API.",
      link: "https://dev.to/copilotkit/build-an-ai-travel-planner-with-copilotkit-langgraph-google-maps-api-32fm",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9bvci4yohqc5r2o65eda.png",
      tags: ["project-building"],
      version: 1,
    },
    {
      title: "Build an AI-Powered, Open-Source Notion",
      description:
        "In this article, we will learn how to build an AI-Powered, Open-Source Notion.",
      link: "https://dev.to/copilotkit/work-smarter-in-notion-add-a-copilot-with-copilotkit-50be",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9bvci4yohqc5r2o65eda.png",
      tags: ["project-building"],
      version: 1,
    },
    {
      title: "I built a Photo Editing App with Webcrumbs and GitHub Copilot",
      description:
        "In this article, we will learn how to build a photo editing app with Webcrumbs and GitHub Copilot.",
      link: "https://dev.to/arindam_1729/how-webcrumbs-github-copilot-built-my-ui-without-me-writing-a-single-line-of-css-987",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9bvci4yohqc5r2o65eda.png",
      tags: ["project-building"],
      version: 1,
    },
    {
      title:
        "Fine-Grained Permissions and Bulk Messaging Made Simple with Permit.io and Resend",
      description:
        "In this article, we will learn how to build a fine-grained permissions and bulk messaging made simple with Permit.io and Resend.",
      link: "https://dev.to/arindam_1729/fine-grained-permissions-and-bulk-messaging-made-simple-with-permitio-and-resend-1mm5",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9bvci4yohqc5r2o65eda.png",
      tags: ["project-building"],
      version: 1,
    },
    {
      title: "Make Open Source Contributions More Rewarding with Opire",
      description:
        "With all Open source fun and learnings we can add one more element to our open-source journey and that is Bounty",
      link: "https://dev.to/opire/make-open-source-contributions-more-rewarding-with-opire-19o1",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fgvh9vgiz0v3i6evue4ip.gif",
      tags: ["general"],
      version: 1,
    },
    {
      title: "9 Open Source Libraries to Supercharge Your Next Project",
      description:
        "As a developer, we often get confused about which tools to use, so I'm covering 9 Open Source Libraries that will truly supercharge your future project!",
      link: "https://dev.to/arindam_1729/9-open-source-libraries-to-supercharge-your-next-project-c71",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpfgp3ig8xjivkqz4bytl.gif",
      tags: ["growth"],
      version: 1,
    },
    {
      title:
        "How to choose between large and small AI models: A cost-benefit analysis",
      description:
        "This blog post will guide you through the differences, use cases and cost-benefit analysis of different AI models, especially in the context of inference.",
      link: "https://nebius.com/blog/posts/choosing-between-large-and-small-models",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4eowvtjC0YUZgLG-2DMlGxBe69IBU-0XZQ&s",
      tags: ["general"],
      version: 1,
    },
    {
      title:
        "10 AI Assistants for Frontend Developers That Will Change the Way You Code",
      description:
        "There are a ton of AI coding assistants, but only a few are very helpful and specific to frontend developers. This article will dive into 10 AI coding assistants to help you become a faster, more productive frontend developer.",
      link: "https://astrodevil.medium.com/10-ai-assistants-for-frontend-developers-that-will-change-the-way-you-code-1d833541efb2",
      image:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*0vebjXBoJ_iIVdrFapKosw.png",
      tags: ["general"],
      version: 1,
    },
    {
      title:
        "Hiring in the Open - How Companies Can Discover Top Talent via Opire",
      description:
        "In this article, we're going to discuss how Opire's approach saves companies time and resources while giving developers an effective way to stand out.",
      link: "https://dev.to/opire/hiring-in-the-open-how-companies-can-discover-top-talent-via-opire-k4h",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fz9zn9tnxmbfwyhu7pm55.gif",
      tags: ["general"],
      version: 1,
    },

    {
      title: "8 Tools You Need to Build Your First SaaS",
      description:
        "In this article, we will discuss the 8 tools you need to build your first SaaS product.",
      link: "https://dev.to/arindam_1729/8-tools-you-need-to-build-your-first-saas-am5",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F71cb2kcoxbtxo721zcw6.gif",
      tags: ["general"],
      version: 1,
    },
    {
      title: "How to Add RBAC Authorization in Nextjs",
      description:
        "By the end of this tutorial, you'll have a clear understanding of how to secure your Next.js application with RBAC, giving you complete control over what each user can access based on their role.",
      link: "https://dev.to/arindam_1729/how-to-add-rbac-authorization-in-nextjs-16m3",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjdfvempfrzz376nh609l.png",
      tags: ["project-building"],
      version: 1,
    },
    {
      title: "How to Build Dynamic Feature Toggling in React.js",
      description:
        "A guide on how to build a React Feature Toggling system. Discover how to use CASL and Permit.io for relationship-based access control (ReBAC) to manage feature visibility dynamically",
      link: "https://www.permit.io/blog/dynamic-react-feature-toggling-2024-guide",
      image:
        "https://www.permit.io/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FmCpDaZarQmWinorWRJJM&w=3840&q=75",
      tags: ["project-building"],
      version: 1,
    },
    {
      title: "11 Open Source Python Projects You Should Know in 2024",
      description:
        "In this article, we will discuss 11 open-source Python projects that you should know in 2024.",
      link: "https://dev.to/arindam_1729/11-open-source-python-projects-you-should-know-in-2024-583o",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdch857t54wnebiol8i3t.gif",
      tags: ["growth"],
      version: 1,
    },
    {
      title: "How to Implement RBAC (Role-Based Access Control) in Supabase",
      description:
        "In this article, we will learn how to implement RBAC (Role-Based Access Control) in Supabase.",
      link: "https://www.permit.io/blog/how-to-implement-rbac-in-supabase",
      image:
        "https://www.permit.io/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F2H4tKg0FTfGFU3ciyTPa&w=3840&q=75",
      tags: ["project-building"],
      version: 1,
    },
    {
      title: "8 Developer Tools You Should Try in 2024",
      description:
        "In this article, we will discuss 8 developer tools that you should try in 2024.",
      link: "https://dev.to/studio1hq/8-developer-tools-you-should-try-in-2024-b8c",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fz21l3b031jaox5raxlp6.png",
      tags: ["growth"],
      version: 1,
    },
    {
      title: "5 Tools Every Developer Should Use in 2024",
      description:
        "In this article, we will discuss 5 tools that every developer should use in 2024.",
      link: "https://dev.to/studio1hq/5-tools-every-developer-must-use-in-2024-438",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnidw6e25vyfgn74ftsa6.png",
      tags: ["growth"],
      version: 1,
    },
    {
      title: "How to Build a Request Access Approval System in Next.js",
      description:
        "In this article, we will learn how to build a request access approval system in Next.js.",
      link: "https://dev.to/arindam_1729/how-to-build-a-request-access-approval-system-using-nextjs-p3p",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fy190e3vkf86c96c426ur.gif",
      tags: ["project-building"],
      version: 1,
    },
    {
      title: "Build a Secure Chat App with React, Firebase, and Permit.io",
      description:
        "A step-by-step guide to building a secure, real-time chat app with React, Firebase, and Permit.io - learn how to handle user roles and set up Firebase for authentication and real-time messaging.",
      link: "https://www.permit.io/blog/coding-tutorial-build-a-secure-chat-app-with-react-firebase-and-permitio",
      image:
        "https://www.permit.io/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FGaBppnGURR2iCpdv8VFL&w=3840&q=75",
      tags: ["project-building"],
      version: 1,
    },
    {
      title:
        "7 Must-Try Open-Source Tools for Python and JavaScript Developers ",
      description:
        "In this article, we will discuss 7 open-source tools that every Python and JavaScript developer should try.",
      link: "https://dev.to/arindam_1729/7-must-try-open-source-tools-for-python-and-javascript-developers-4c56",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F67vy07x7txqv3ipnqvtv.gif",
      tags: ["growth"],
      version: 1,
    },
    {
      title: "Building and Deploying TypeScript Microservices to Kubernetes",
      description:
        "In this tutorial, you'll learn how to build a microservice with Encore.ts, and deploy it to a Kubernetes cluster in your AWS account. We'll show you how to deploying your microservices.",
      link: "https://dev.to/encore/building-and-deploying-typescript-microservices-to-kubernetes-3110",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fq8jei5qtmeckkmdx7hfj.png",
      tags: ["project-building"],
      version: 1,
    },
    {
      title: "Top 5 Open Source Projects You Must Explore Before 2025",
      description:
        "In this article, we will discuss the top 5 open-source projects that you must explore before 2025.",
      link: "https://dev.to/arindam_1729/top-5-open-source-projects-you-must-explore-before-2025-3l6l",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fneqgdcpodgseopbqimdg.gif",
      tags: ["growth"],
      version: 1,
    },
    {
      title:
        "The Ultimate Stack for Serverless & Cloud-Native Developers in 2025",
      description:
        "In this article, we will discuss the ultimate stack for serverless & cloud-native developers in 2025.",
      link: "https://dev.to/arindam_1729/the-ultimate-stack-for-serverless-cloud-native-developers-in-2025-38dc",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9bvci4yohqc5r2o65eda.png",
      tags: ["growth"],
      version: 1,
    },
  ],
  Blogs: [
    {
      title: "Understanding the Model Context Protocol: Architecture",
      description:
        "Model Context Protocol (MCP) offers a clean, open standard for connecting language models to real-world systems through a modular, plug-and-play interface. In this article, we explore how MCP works..",
      link: "https://nebius.com/blog/posts/understanding-model-context-protocol-mcp-architecture",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8se47yg59oimb4sl06eg.gif",
      tags: ["seo"],
      version: 1,
    },
    {
      title: "Building a Kanban Board with Next.js,Vercel AI and Tolgee",
      description:
        "In this article, we will build a real-time Kanban board in Next.js using WebSockets, with database support, AI support through the Vercel AI SDK and localization via Tolgee.",
      link: "https://dev.to/tolgee_i18n/building-a-kanban-board-with-nextjsvercel-ai-and-tolgee-493g",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8se47yg59oimb4sl06eg.gif",
      tags: ["growth", "personal"],
      version: 1,
    },
    {
      title: "How I Built the World's Best NextJS, AI Scheduling App",
      description:
        "By the end of this article, you'll learn how to Integrate an AI copilot into your Next.js application by building a scheduling app with Cal.com and Develop and manage a custom scheduler that enhances user experience across your application.",
      link: "https://dev.to/tolgee_i18n/building-a-kanban-board-with-nextjsvercel-ai-and-tolgee-493g",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpvtqkii2tlp04p2cvlx9.gif",
      tags: ["growth"],
      version: 1,
    },
    {
      title: "How to create a LinkedIn job scraper in Python with Crawlee",
      description:
        "In this article, we will build a web application that scrapes LinkedIn for job postings using Crawlee and Streamlit..",
      link: "https://dev.to/crawlee/how-to-create-a-linkedin-job-scraper-in-python-with-crawlee-h9d",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwsyjca1b8q6g9wapyhnp.jpg",
      tags: ["growth"],
      version: 1,
    },
    {
      title:
        "Develop a Real-Time Collaborative Document Editor with Next.js, Appwrite, Liveblocks and Permit.io",
      description:
        "A step-by-step guide to build a secure, real-time collaborative document editor with Next.js, Appwrite, Liveblocks, and Permit.io using ReBAC for flexible and secure relationship-based access control.",
      link: "https://javascript.plainenglish.io/develop-a-real-time-collaborative-document-editor-with-next-js-appwrite-liveblocks-and-permit-io-699a865a7aeb",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Wan7SBxJfZf2HlOu9AIPLw.png",
      tags: ["growth"],
      version: 1,
    },
    {
      title: "Building an AI-powered quiz application with Next.js and OpenAI",
      description:
        "In this tutorial, you'll learn how to build an AI-powered quiz application that enables users to select a topic, answer questions related to that topic, and receive their score instantly upon completing the quiz.",
      link: "https://dev.to/latitude/building-an-ai-powered-quiz-application-with-nextjs-and-openai-2673",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ff04c0el5k9h0pee1pcpp.png",
      tags: ["growth"],
      version: 1,
    },
    {
      title:
        "Manage Permissions in a Langflow Chain for LLM Queries using Permit.io",
      description:
        "A Step-by-Step Guide to Secure and Scalable Permission Management for AI Models with Permit.io",
      link: "https://astrodevil.medium.com/manage-permissions-in-a-langflow-chain-for-llm-queries-using-permit-io-7de8a0fb17b3",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*bY1LzPkOXDXI_eRJ_V-y8w.png",
      tags: ["growth"],
      version: 1,
    },
  ],
  Services: [
    {
      title: "Blogs as Service",
      description:
        "We create high-quality, technical and promotional blogs tailored for devtool and software companies. Our team of expert writers specializes in crafting SEO-optimized content that drives engagement, educates developers",
      icon: PencilLine,
    },

    {
      title: "More Services",
      description: (
        <p>
          New services <span className="font-extrabold">coming soon</span>.
          <br /> Stay tuned for updates.
        </p>
      ),
      icon: IconPlus,
    },
    {
      title: "DevRel as Service",
      description:
        "Accelerate your growth with targeted Developer Relations services. We help devtool and software companies connect authentically with developers, grow communities, and turn users into advocates.",
      icon: UsersTwo,
    },
  ],
  Testimonials: [
    {
      name: "Jesse Williams",
      role: "Co-Founder & COO, Jozu",
      avatar: JesseImg.src,
      content: `We've used Studio1 to lead our open source and closed source community building and developer awareness work for just over a year. Their contributions and work has helped us drive adoption and awareness with our audience. Their team has deep experience in our space, interfacing with our team perfectly, and going above to help us grow.`,
      highlights: [],
    },
    {
      name: "Marketa Cizmar",
      role: "COO, Tolgee",
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
      content: `Very fast, good-quality work, results! Nothing to add; I totally recommend working with Amitesh !`,
      highlights: ["Amitesh", "good-quality"],
    },
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
      
      We're excited to continue collaborating on future projects!`,
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
      image: CopilotkitFull.src,
      className:
        "h-8 sm:h-9 md:h-10 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
      alt: "CopilotKit",
    },
    {
      name: "Nebius",
      image: NebiusFull.src,
      className:
        "h-5 sm:h-6 md:h-6 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain",
      alt: "Nebius",
    },
    {
      name: "Latitude",
      image: LatitudeFull.src,
      className:
        "h-6 sm:h-7 md:h-8 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
      alt: "Latitude",
    },
    {
      name: "Opire",
      image: OpireFull.src,
      className:
        "h-8 sm:h-9 md:h-10 w-auto max-w-[100px] sm:max-w-[120px] md:max-w-[144px] object-contain",
      alt: "Opire",
    },
    {
      name: "Crawlee",
      image: CrawleeFull.src,
      className:
        "h-10 sm:h-12 md:h-14 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain",
      alt: "Crawlee",
    },
    {
      name: "Encore",
      image: EncoreFull.src,
      className:
        "h-10 sm:h-12 md:h-14 w-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] object-contain",
      alt: "Encore",
    },
    {
      name: "Webcrumbs",
      image: WebcrumbsFull.src,
      className:
        "h-10 sm:h-12 md:h-16 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
      alt: "Webcrumbs",
    },
  ],
  BlogAsServiceProcess: [
    {
      name: "Discovery",
      description:
        "We align with your product, team, and goals to shape a content strategy that makes sense.",
      icon: IconSearch,
      details: [
        <p>Tech stack deep-dive</p>,
        <p>Developer audience analysis</p>,
        <p>Scope definition</p>,
        <p>First sync</p>,
      ],
    },
    {
      name: "Strategy",
      description:
        "We build a repeatable content engine tailored to your goals.",
      icon: IconBulb,
      details: [
        <p>Topic ideation and prioritization</p>,
        <p>Format selection (blog, guide, tutorial, etc.)</p>,
        <p>Channel planning</p>,
      ],
    },
    {
      name: "Creation",
      description:
        "Technical writers and engineers collaborate to produce high-quality, relevant content.",
      icon: IconRocket,
      details: [
        <p>Code-rich, accurate technical writing</p>,
        <p>Custom examples and use cases</p>,
        <p>Technical validation + peer review</p>,
        <p>SEO formatting and readability pass</p>,
      ],
    },
    {
      name: "Distribution",
      description: "We help push your content where devs actually see it.",
      icon: IconChartBar,
      details: [
        <p>Dev.to, Medium, company blogs</p>,
        <p>Social sharing and analytics</p>,
        <p>Developer community amplification</p>,
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
        "We assess your product, DevRel touchpoints, and community to uncover quick wins and long-term opportunities.",
      icon: IconSearch,
      details: [
        <p>Audit existing developer programs</p>,
        <p>Analyze community engagement</p>,
        <p>Identify growth opportunities</p>,
        <p>Provide an actionable assessment report</p>,
      ],
    },
    {
      name: "Strategy",
      description:
        "We craft a tailored DevRel roadmap aligned with your goals — across content, community, education, and advocacy.",
      icon: IconBulb,
      details: [
        <p>Custom roadmap creation</p>,
        <p>Resource and role planning</p>,
        <p>Timeline and campaign mapping</p>,
        <p>KPI and success metrics definition</p>,
      ],
    },

    {
      name: "Creation",
      description:
        "Our writers and DevRel engineers produce content and campaigns that drive trust, clarity, and developer engagement.",
      icon: IconRocket,
      details: [
        <p>Technical content creation</p>,
        <p>Community activation initiatives</p>,
        <p>Campaign planning and execution</p>,
        <p>Developer engagement strategies</p>,
      ],
    },

    {
      name: "Distribution",
      description:
        "We publish and amplify your content across the right developer channels — and iterate based on performance.",
      icon: IconChartBar,
      details: [
        <p>Community-based promotion</p>,
        <p>Analytics and performance reviews</p>,
        <p>Strategic iteration</p>,
        <p>ROI and impact tracking</p>,
      ],
    },
  ],

  DevRelAsServiceServices: [
    {
      title: "Technical Content Creation",
      description:
        "Developer-focused blogs, docs, and tutorials that drive clarity and adoption.",
      icon: IconCode,
    },
    {
      title: "Community Management",
      description:
        "Build and manage active developer communities around your product or ecosystem.",
      icon: IconUsers,
    },
    {
      title: "Developer Education",
      description:
        "Live workshops, tutorials, and onboarding flows to help devs succeed with your tool.",
      icon: IconBook,
    },
    {
      title: "Developer Support",
      description:
        "Responsive help channels and community-driven answers that developers can count on.",
      icon: IconMessage,
    },
    {
      title: "Video Content",
      description:
        "Engaging demos, product explainers and dev-focused livestreams.",
      icon: IconBrandYoutube,
    },
    {
      title: "Tool Audit",
      description:
        "Developer experience audits and onboarding gap analysis to optimize your DX.",
      icon: IconGitBranch,
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
