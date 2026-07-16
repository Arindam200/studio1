import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies",
  description:
    "Explore how Studio1 has helped devtool and SaaS companies increase developer adoption through technical content, DevRel strategies, and community engagement.",
  path: "/case-studies",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
