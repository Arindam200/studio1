import { CareersPage } from "@/components/careers/careers-page";
import { getJobOpenings } from "@/lib/careers";
import { headers } from "next/headers";
import { getSafeLocale } from "@/lib/i18n-messages";

export default async function Careers() {
  const headerStore = await headers();
  const locale = getSafeLocale(headerStore.get("x-studio1-locale"));

  return <CareersPage jobOpenings={getJobOpenings(locale)} />;
}
