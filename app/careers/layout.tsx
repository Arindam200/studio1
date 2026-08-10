import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { getTranslations } from "next-intl/server";
import { getSafeLocale } from "@/lib/i18n-messages";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata.pages.careers");
  const headerStore = await headers();
  const locale = getSafeLocale(headerStore.get("x-studio1-locale"));

  return pageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/careers",
    locale,
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
