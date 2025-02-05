import {
  IconBriefcase2Filled,
  IconBulbFilled,
  IconCodeCircle2Filled,
  IconStarFilled,
  IconWriting,
} from "@tabler/icons-react";
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
} from "./image";

export const navItems = [
  {
    title: "Home",
    path: "/",
    children: [
      { title: "Work", path: "/#work", icon: IconBriefcase2Filled },
      { title: "Why Us", path: "/#why-us", icon: IconBulbFilled },
      { title: "Testimonials", path: "/#testimonials", icon: IconStarFilled },
    ],
  },

  {
    title: "Services",
    path: "/services",
    children: [
      {
        title: "DevRel as a Service",
        path: "/devrel-as-service",
        icon: IconCodeCircle2Filled,
      },
      {
        title: "Blog as a Service",
        path: "/blog-as-service",
        icon: IconWriting,
      },
    ],
  },
  { title: "Blogs", path: "/blogs" },
  { title: "Pricing", path: "/pricing" },
];

export const serviceNavItems = [
  { title: "Stats", path: "#stats" },
  { title: "Work", path: "#work" },
  { title: "Process", path: "#process" },
  { title: "Team", path: "#team" },
];

export const trustedbyLogo = [
  {
    name: "Permit",
    image: PermitFull,
    className:
      "h-10 sm:h-12 md:h-16 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
    alt: "Permit",
  },
  {
    name: "Tolgee",
    image: TolgeeFull,
    className:
      "h-8 sm:h-10 md:h-12 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain",
    alt: "Tolgee",
  },
  {
    name: "CopilotKit",
    image: CopilotkitFull,
    className:
      "h-8 sm:h-9 md:h-10 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
    alt: "CopilotKit",
  },

  {
    name: "Nebius",
    image: NebiusFull,
    className:
      "h-5 sm:h-6 md:h-6 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain",
    alt: "Nebius",
  },

  {
    name: "Latitude",
    image: LatitudeFull,
    className:
      "h-6 sm:h-7 md:h-8 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
    alt: "Latitude",
  },

  {
    name: "Opire",
    image: OpireFull,
    className:
      "h-8 sm:h-9 md:h-10 w-auto max-w-[100px] sm:max-w-[120px] md:max-w-[144px] object-contain",
    alt: "Opire",
  },

  {
    name: "Crawlee",
    image: CrawleeFull,
    className:
      "h-10 sm:h-12 md:h-14 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain",
    alt: "Crawlee",
  },

  {
    name: "Encore",
    image: EncoreFull,
    className:
      "h-10 sm:h-12 md:h-14 w-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] object-contain",
    alt: "Encore",
  },

  {
    name: "Webcrumbs",
    image: WebcrumbsFull,
    className:
      "h-10 sm:h-12 md:h-16 w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[176px] object-contain",
    alt: "Webcrumbs",
  },
];
