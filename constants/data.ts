import {
  CopilotkitFull,
  PermitFull,
  TolgeeFull,
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
  amiteshNoBg,
  shivayNoBg,
  arindamNoBg,
  StreamFull,
  SwytchcodeFull,
  StackqlFull,
  EachlabFull,
} from "./image";
import {
  Briefcase,
  CheckCircle,
  Lightbulb,
  Pen,
  Star,
} from "@phosphor-icons/react/dist/ssr";

export const navItems = [
  {
    title: "Home",
    path: "/",
    children: [
      { title: "Work", path: "/#work", icon: Briefcase },
      { title: "Why Us", path: "/#why-us", icon: Lightbulb },
      { title: "Testimonials", path: "/#testimonials", icon: Star },
    ],
  },
  { title: "About Us", path: "/about-us" },
  {
    title: "Services",
    path: "#",
    children: [
      {
        title: "DevRel as a Service",
        path: "/devrel-as-service",
        icon: CheckCircle,
      },
      {
        title: "Blog as a Service",
        path: "/blog-as-service",
        icon: Pen,
      },
    ],
  },
  { title: "Blogs", path: "/blogs" },
];

export const serviceNavItems = [
  { title: "Stats", path: "#stats" },
  { title: "Work", path: "#work" },
  { title: "Process", path: "#process" },
];

export const trustedbyLogo = [
  {
    name: "Nebius",
    image: NebiusFull,
    isWhite: true,
    className:
      "h-5 sm:h-6 md:h-6 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain dark:brightness-200",
    alt: "Nebius",
  },
  {
    name: "Velt",
    image: VeltFull,
    isWhite: true,
    className:
      "h-6 sm:h-7 md:h-8 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain dark:brightness-200 dark:contrast-125 scale-90",
    alt: "Velt",
  },
  {
    name: "Stream",
    image: StreamFull,
    isWhite: true,
    className:
      "h-8 sm:h-9 md:h-10 w-auto max-w-[100px] sm:max-w-[120px] md:max-w-[144px] object-contain dark:brightness-200",
    alt: "Stream",
  },
  {
    name: "Permit",
    image: PermitFull,
    isWhite: true,
    className:
      "h-10 sm:h-12 md:h-16 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain dark:brightness-200",
    alt: "Permit",
  },
  {
    name: "Eachlabs",
    image: EachlabFull,
    isWhite: true,
    className:
      "h-6 sm:h-7 md:h-8 w-auto max-w-[80px] sm:max-w-[120px] md:max-w-[140px] object-contain dark:brightness-200 dark:contrast-125 scale-90",
    alt: "Eachlabs",
  },
  {
    name: "Latitude",
    image: LatitudeFull,
    isWhite: true,
    className:
      "h-6 sm:h-7 md:h-8 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain dark:brightness-200",
    alt: "Latitude",
  },
  {
    name: "Encore",
    image: EncoreFull,
    isWhite: true,
    className:
      "h-10 sm:h-12 md:h-14 w-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] object-contain dark:brightness-200",
    alt: "Encore",
  },
  {
    name: "ReadySet",
    image: ReadySetFull,
    isWhite: false,
    className:
      "h-8 sm:h-9 md:h-10 w-auto max-w-[100px] sm:max-w-[120px] md:max-w-[144px] object-contain dark:brightness-200",
    alt: "ReadySet",
  },
  {
    name: "CopilotKit",
    image: CopilotkitFull,
    isWhite: true,
    className:
      "h-8 sm:h-9 md:h-10 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain dark:brightness-200",
    alt: "CopilotKit",
  },
  {
    name: "Crawlee",
    image: CrawleeFull,
    isWhite: true,
    className:
      "h-10 sm:h-12 md:h-14 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain dark:brightness-200",
    alt: "Crawlee",
  },
  {
    name: "Tolgee",
    image: TolgeeFull,
    isWhite: true,
    className:
      "h-8 sm:h-10 md:h-12 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain dark:brightness-200",
    alt: "Tolgee",
  },
  {
    name: "Nitric",
    image: NitricFull,
    isWhite: false,
    className:
      "h-6 sm:h-7 md:h-8 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain dark:brightness-200 dark:contrast-125 scale-90",
    alt: "Nitric",
  },
  {
    name: "WebCrumbs",
    image: WebcrumbsFull,
    isWhite: true,
    className:
      "h-10 sm:h-12 md:h-16 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain dark:brightness-200",
    alt: "WebCrumbs",
  },
  {
    name: "KitOps",
    image: KitOpsFull,
    isWhite: true,
    className:
      "h-6 sm:h-7 md:h-8 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain dark:brightness-200 [&>rect]:hidden",
    alt: "KitOps",
  },
  {
    name: "CodeRabbit",
    image: CodeRabbitFull,
    isWhite: true,
    className:
      "h-6 sm:h-7 md:h-8 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain dark:brightness-200 dark:contrast-125 scale-90",
    alt: "CodeRabbit",
  },
  {
    name: "SwytchCode",
    image: SwytchcodeFull,
    isWhite: false,
    className:
      "h-8 sm:h-9 md:h-10 w-auto max-w-[100px] sm:max-w-[120px] md:max-w-[144px] object-contain dark:brightness-200",
    alt: "Swytchcode",
  },
  {
    name: "StackQL",
    image: StackqlFull,
    isWhite: false,
    className:
      "h-8 sm:h-9 md:h-10 w-auto max-w-[100px] sm:max-w-[120px] md:max-w-[144px] object-contain dark:brightness-200",
    alt: "Stackql",
  },
  {
    name: "Opire",
    image: OpireFull,
    isWhite: true,
    className:
      "h-8 sm:h-9 md:h-10 w-auto max-w-[100px] sm:max-w-[120px] md:max-w-[144px] object-contain dark:brightness-200",
    alt: "Opire",
  },
];

export const teamMembers = [
  {
    name: "Arindam Majumder",
    role: "Open source developer and DevRel",
    image: arindamNoBg,
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
    image: amiteshNoBg,
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
    image: shivayNoBg,
    bio: "",
    social: {
      twitter: "https://x.com/HowDevelop",
      linkedin: "https://in.linkedin.com/in/shivaylamba",
      website: "https://shivaylamba.me",
    },
  },
];
