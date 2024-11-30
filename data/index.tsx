import IvanImg from "../public/assets/Ivan.jpg";
import GabrielImg from "../public/assets/Gabriel.png";
import JuliaImg from "../public/assets/Julia.png";
import DavidImg from "../public/assets/David.png";
import ColeImg from "../public/assets/Cole.png";
import FerranImg from "../public/assets/Ferran.png";
import AgitaImg from "../public/assets/Agita.png";
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
      designation: "Ai Agents",
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
        "15+ projects completed in just 3 month of our operations, We collaborated with leading software companies.",
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
        "I Found a Tool Even Better than v0 – You Won't Believe What It Can Do!",
      description:
        "As a front-end developer, you've probably heard all about Vercel v0 — the tool that seemed to revolutionize front-end development.But, is v0 as great as it sounds? I spent time comparing it with a new tool, Webcrumbs Frontend AI, to see if it really is a game-changer.",
      link: "https://dev.to/arindam_1729/i-found-a-tool-even-better-than-v0-you-wont-believe-what-it-can-do-igf",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F70kbai7v3r12dr860psw.gif",
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
        "I Found a Tool Even Better than v0 – You Won't Believe What It Can Do!",
      description:
        "As a front-end developer, you've probably heard all about Vercel v0 — the tool that seemed to revolutionize front-end development.But, is v0 as great as it sounds? I spent time comparing it with a new tool, Webcrumbs Frontend AI, to see if it really is a game-changer.",
      link: "https://dev.to/arindam_1729/i-found-a-tool-even-better-than-v0-you-wont-believe-what-it-can-do-igf",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F70kbai7v3r12dr860psw.gif",
    },
  ],
  Services: [
    {
      title: "Blogs as Service",
      description:
        "We create high-quality, technical and promotional blogs tailored for devtool and software companies. Our team of expert writers specializes in crafting SEO-optimized content that drives engagement, educates developers, and helps your tools stand out in a competitive market.",
    },
    {
      title: "DevRel as Service",
      description:
        "Accelerate your growth with targeted Developer Relations services. We help devtool and software companies connect authentically with developers, grow communities, and turn users into advocates.",
    },
    {
      title: "More Services",
      description:
        "Coming soon. We are working to provide more services. Stay tuned for more updates.",
    },
  ],
  Testimonials: [
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
        "network of writers",
        "scale the workload",
        "10/10 experience",
      ],
    },
    {
      name: "Agita Jaunzeme",
      role: "Community Manager, VDK(VMware)",
      avatar: AgitaImg.src,
      content: `Very fast, good-quality work, results! Nothing to add; I totally recommend working with Amitesh!`,
      highlights: ["Amitesh", "good-quality"],
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
      className: "h-10 sm:h-12 md:h-16 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
      alt: "Permit",
    },
    {
      name: "Tolgee",
      image: TolgeeFull.src,
      className: "h-8 sm:h-10 md:h-12 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain",
      alt: "Tolgee",
    },
    {
      name: "CopilotKit",
      image: "https://github.com/RecursivelyAI/CopilotKit/assets/746397/5890217b-524e-49c5-a89e-b8743d2acd51",
      className: "h-8 sm:h-9 md:h-10 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
      alt: "CopilotKit",
    },
    {
      name: "Nebius",
      image: "https://companieslogo.com/img/orig/NBIS_BIG.D-f866f771.png?t=1729269594",
      className: "h-5 sm:h-6 md:h-6 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain",
      alt: "Nebius",
    },
    {
      name: "Latitude",
      image: "https://github.com/latitude-dev/latitude/assets/5465249/4783e122-7150-4bcc-96e0-a3c9c4c1c53b",
      className: "h-6 sm:h-7 md:h-8 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
      alt: "Latitude",
    },
    {
      name: "Opire",
      image: "https://opire.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbig_logo.fa525053.svg&w=3840&q=75",
      className: "h-8 sm:h-9 md:h-10 w-auto max-w-[100px] sm:max-w-[120px] md:max-w-[144px] object-contain",
      alt: "Opire",
    },
    {
      name: "Crawlee",
      image: "https://crawlee.dev/img/crawlee-dark.svg",
      className: "h-10 sm:h-12 md:h-14 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain",
      alt: "Crawlee",
    },
    {
      name: "Encore",
      image: "https://camo.githubusercontent.com/77d11bfd37de0bb015849c0305a4cd653bee5f656570ba78899594a67eb08a8c/68747470733a2f2f656e636f72652e6465762f6173736574732f696d672f6c6f676f2e737667",
      className: "h-10 sm:h-12 md:h-14 w-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] object-contain",
      alt: "Encore",
    },
    {
      name: "Webcrumbs",
      image: "https://camo.githubusercontent.com/9350767c2dd34b635f3e63e8e61798502bc4eee59df80accb9dc145af0d778c9/68747470733a2f2f63646e2e7765626372756d62732e6f72672f6173736574732f696d616765732f6272616e642f6c6f676f5f7265642e737667",
      className: "h-10 sm:h-12 md:h-16 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
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
        github: "https://git.new/Arindam",
      },
    },
    {
      name: "Amitesh Anand",
      role: "Co-founder & Operations Lead",
      image: "/assets/amitesh.png",
      bio: "Technical writer and developer advocate with expertise in creating scalable content. Published 80k+ words reaching 250k+ readers across major tech platforms. HackerNoon award nominee focused on delivering high-impact technical content.",
      social: {
        twitter: "https://mobile.twitter.com/astrodevil_",
        linkedin: "https://www.linkedin.com/in/amitesh1208/",
        github: "#",
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
        github: "https://git.new/Arindam",
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
        github: "#",
      },
    },
    {
      name: "Shivay Lamba",
      role: "ML Engineer and Open source advocate",
      image: "https://avatars.githubusercontent.com/u/19529592?v=4",
      bio: "",
      social: {
        twitter: "https://x.com/HowDevelop",
        linkedin: "#",
        github: "#",
      },
    },
  ],
};


