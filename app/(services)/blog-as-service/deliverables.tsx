"use client";

import WhatsIncluded, {
  type Deliverable,
} from "@/components/sections/whats-included";
import {
  PencilLine,
  MagnifyingGlass,
  Code,
  ShareNetwork,
  Strategy,
  CheckCircle,
  ChartLineUp,
  UsersThree,
} from "@phosphor-icons/react";

const deliverables: Deliverable[] = [
  {
    title: "Dedicated Technical Writers",
    description:
      "Engineers who write. Matched to your stack, your audience, and your product voice.",
    icon: <PencilLine weight="duotone" className="size-5" />,
  },
  {
    title: "Developer SEO Articles",
    description:
      "Data-driven, technically accurate content structured for Google and AI citation.",
    icon: <MagnifyingGlass weight="duotone" className="size-5" />,
  },
  {
    title: "Code-Rich Tutorials",
    description:
      "Step-by-step guides with real code examples, practical use cases, and working demos.",
    icon: <Code weight="duotone" className="size-5" />,
  },
  {
    title: "Product Integration Content",
    description:
      "Hands-on walkthroughs showing how your product fits into real developer workflows.",
    icon: <Strategy weight="duotone" className="size-5" />,
  },
  {
    title: "Multi-Platform Distribution",
    description:
      "Every piece distributed across Dev.to, Hashnode, Reddit, LinkedIn, and newsletters.",
    icon: <ShareNetwork weight="duotone" className="size-5" />,
  },
  {
    title: "Content Strategy & Research",
    description:
      "Keyword research, topic mapping, and competitive analysis to guide every piece.",
    icon: <MagnifyingGlass weight="duotone" className="size-5" />,
  },
  {
    title: "Technical Review & Validation",
    description:
      "Every article goes through peer review and technical validation before publish.",
    icon: <CheckCircle weight="duotone" className="size-5" />,
  },
  {
    title: "Performance Reporting",
    description:
      "Regular reports on traffic, rankings, engagement, and developer adoption metrics.",
    icon: <ChartLineUp weight="duotone" className="size-5" />,
  },
];

export default function BlogDeliverables() {
  return (
    <WhatsIncluded
      deliverables={deliverables}
      heading="What's Included"
      highlightWord="Included"
      subtitle="Everything you need for a full technical content engine, from strategy to distribution."
    />
  );
}
