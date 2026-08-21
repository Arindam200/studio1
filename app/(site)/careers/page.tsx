import { CareersPage } from "@/components/careers/careers-page";
import { getJobOpenings } from "@/lib/careers";

export default async function Careers() {
  return <CareersPage jobOpenings={getJobOpenings("en")} />;
}
