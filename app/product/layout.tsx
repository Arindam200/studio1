import { Metadata } from "next";
import { PageSideBeamGlows } from "@/components/shared/page-side-beam-glows";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Products",
  description:
    "Studio1-built tools for developers and SaaS teams. Raah for web analytics and real-user observability, AssetSnip for website asset extraction and design handoff.",
  path: "/product",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <PageSideBeamGlows />
      {children}
    </div>
  );
}
