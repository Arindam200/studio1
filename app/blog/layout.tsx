import type { Metadata } from "next";
import { baseUrl } from "@/app/sitemap";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore articles on developer tools, technical writing, DevRel strategies, API documentation, and developer marketing from Studio1.",
  keywords: [
    "technical content",
    "developer relations",
    "DevRel",
    "API documentation",
    "developer marketing",
    "technical writing",
    "SEO",
    "developer tools",
  ],
  openGraph: {
    title: "Blog | Studio1",
    description:
      "Explore articles on developer tools, technical writing, DevRel strategies, API documentation, and developer marketing from Studio1.",
    url: `${baseUrl}/blog`,
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Blog | Studio1",
    card: "summary_large_image",
    description:
      "Explore articles on developer tools, technical writing, DevRel strategies, API documentation, and developer marketing from Studio1.",
  },
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="top-[-10rem] md:top-[-18rem] z-[-1] left-[-80%] md:left-[-20%] fixed bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out h-[50rem] md:h-[60rem] w-[10rem] -rotate-[60deg]" />
      <div className="top-[-10rem] md:top-[-18rem] z-[-1] right-[-80%] md:right-[-20%] fixed bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out h-[50rem] md:h-[60rem] w-[10rem] rotate-[40deg]" />
      {children}
    </div>
  );
}
