import type { Metadata } from "next";
import { PageSideBeamGlows } from "@/components/shared/page-side-beam-glows";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Blog",
  description:
    "Articles and insights on developer tools, technical writing, DevRel strategies, and developer marketing from the Studio1 team.",
  path: "/blog",
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
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen overflow-x-clip">
      <PageSideBeamGlows />
      {children}
    </div>
  );
}
