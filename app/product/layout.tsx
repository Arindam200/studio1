import { PageSideBeamGlows } from "@/components/shared/page-side-beam-glows";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { getTranslations } from "next-intl/server";
import { getSafeLocale } from "@/lib/i18n-messages";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata.pages.product");
  const headerStore = await headers();
  const locale = getSafeLocale(headerStore.get("x-studio1-locale"));

  return pageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/product",
    locale,
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <PageSideBeamGlows />
      {children}
    </div>
  );
}
