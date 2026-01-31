import { Metadata } from "next";
import { baseUrl } from "@/app/sitemap";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore how Studio1 has helped devtool and SaaS companies increase developer adoption through technical content, DevRel strategies, and community engagement.",
  openGraph: {
    title: "Case Studies | Studio1",
    description:
      "Explore how Studio1 has helped devtool and SaaS companies increase developer adoption through technical content, DevRel strategies, and community engagement.",
    url: baseUrl + "/case-studies",
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Case Studies | Studio1",
    card: "summary_large_image",
    description:
      "Explore how Studio1 has helped devtool and SaaS companies increase developer adoption through technical content, DevRel strategies, and community engagement.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
