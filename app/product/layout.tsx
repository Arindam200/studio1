import { Metadata } from "next";
import { baseUrl } from "@/app/sitemap";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Studio1-built tools for developers and SaaS teams. Raah for web analytics and real-user observability, AssetSnip for website asset extraction and design handoff.",
  openGraph: {
    title: "Products | Studio1",
    description:
      "Studio1-built tools for developers and SaaS teams. Raah for web analytics and real-user observability, AssetSnip for website asset extraction and design handoff.",
    url: baseUrl + "/product",
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Products | Studio1",
    card: "summary_large_image",
    description:
      "Studio1-built tools for developers and SaaS teams. Raah for web analytics and real-user observability, AssetSnip for website asset extraction and design handoff.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
