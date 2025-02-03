import {
  IconBriefcase2Filled,
  IconBulbFilled,
  IconCodeCircle2Filled,
  IconStarFilled,
  IconWriting,
} from "@tabler/icons-react";

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
