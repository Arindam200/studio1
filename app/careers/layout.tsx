import { Metadata } from "next";
import { baseUrl } from "@/app/sitemap";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Studio1 and help devtool companies grow through technical content and DevRel strategies. Explore open positions for technical writers, DevRel specialists, and content strategists.",
  openGraph: {
    title: "Careers | Studio1",
    description:
      "Join Studio1 and help devtool companies grow through technical content and DevRel strategies. Explore open positions for technical writers, DevRel specialists, and content strategists.",
    url: baseUrl + "/careers",
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Careers | Studio1",
    card: "summary_large_image",
    description:
      "Join Studio1 and help devtool companies grow through technical content and DevRel strategies. Explore open positions for technical writers, DevRel specialists, and content strategists.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
