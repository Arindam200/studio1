import { Metadata } from "next";
import { baseUrl } from "@/app/sitemap";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Studio1, a developer-focused content agency helping devtool and SaaS companies grow through technical writing, DevRel strategies, and community building.",
  openGraph: {
    title: "About Us | Studio1",
    description:
      "Learn about Studio1, a developer-focused content agency helping devtool and SaaS companies grow through technical writing, DevRel strategies, and community building.",
    url: baseUrl + "/about-us",
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "About Us | Studio1",
    card: "summary_large_image",
    description:
      "Learn about Studio1, a developer-focused content agency helping devtool and SaaS companies grow through technical writing, DevRel strategies, and community building.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
