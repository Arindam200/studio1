import { Metadata } from "next";
import { baseUrl } from "@/app/sitemap";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Studio1's technical content and DevRel services. Choose from flexible plans for blog writing, documentation, and developer relations consulting.",
  openGraph: {
    title: "Pricing | Studio1",
    description:
      "Transparent pricing for Studio1's technical content and DevRel services. Choose from flexible plans for blog writing, documentation, and developer relations consulting.",
    url: baseUrl + "/pricing",
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Pricing | Studio1",
    card: "summary_large_image",
    description:
      "Transparent pricing for Studio1's technical content and DevRel services. Choose from flexible plans for blog writing, documentation, and developer relations consulting.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
