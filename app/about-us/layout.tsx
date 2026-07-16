import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Learn about Studio1, a developer-focused content agency helping devtool and SaaS companies grow through technical writing, DevRel strategies, and community building.",
  path: "/about-us",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
