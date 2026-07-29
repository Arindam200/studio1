import { CareersPage } from "@/components/careers/careers-page";
import { getJobOpenings } from "@/lib/careers";

export default function Careers() {
  return <CareersPage jobOpenings={getJobOpenings()} />;
}
