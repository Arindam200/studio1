"use client";

import WhatsIncluded, {
  type Deliverable,
} from "@/components/sections/whats-included";
import {
  Megaphone,
  UsersThree,
  BookOpenText,
  Chats,
  VideoCamera,
  Wrench,
  CalendarCheck,
  ChartLineUp,
} from "@phosphor-icons/react";

const deliverables: Deliverable[] = [
  {
    title: "Community Building",
    description:
      "Build and nurture developer communities through Discord, forums, and social channels.",
    icon: <UsersThree weight="duotone" className="size-5" />,
  },
  {
    title: "Developer Education",
    description:
      "Workshops, webinars, and tutorial series that help developers succeed with your product.",
    icon: <BookOpenText weight="duotone" className="size-5" />,
  },
  {
    title: "Technical Content Creation",
    description:
      "Blog posts, guides, and documentation written by engineers with hands-on experience.",
    icon: <Chats weight="duotone" className="size-5" />,
  },
  {
    title: "Developer Advocacy",
    description:
      "Conference talks, meetup presentations, and thought leadership in developer communities.",
    icon: <Megaphone weight="duotone" className="size-5" />,
  },
  {
    title: "Video Production",
    description:
      "Product demos, explainer videos, and tutorials optimized for developer platforms.",
    icon: <VideoCamera weight="duotone" className="size-5" />,
  },
  {
    title: "Tool & DX Audits",
    description:
      "Evaluate and improve your developer experience from onboarding to advanced usage.",
    icon: <Wrench weight="duotone" className="size-5" />,
  },
  {
    title: "Event Management",
    description:
      "Plan and execute hackathons, meetups, and developer events that drive engagement.",
    icon: <CalendarCheck weight="duotone" className="size-5" />,
  },
  {
    title: "Metrics & Reporting",
    description:
      "Track community growth, content performance, and developer adoption with regular reports.",
    icon: <ChartLineUp weight="duotone" className="size-5" />,
  },
];

export default function DevRelDeliverables() {
  return (
    <WhatsIncluded
      deliverables={deliverables}
      heading="What's Included"
      highlightWord="Included"
      subtitle="End-to-end DevRel execution, from community building to measurable developer adoption."
    />
  );
}
