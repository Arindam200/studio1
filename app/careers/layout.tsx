import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Careers",
  description:
    "Join Studio1 and help devtool companies grow through technical content and DevRel strategies. Explore open positions for technical writers, DevRel specialists, and content strategists.",
  path: "/careers",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
