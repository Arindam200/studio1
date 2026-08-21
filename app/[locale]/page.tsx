import HomePage from "@/app/(site)/page";
import {
  localizedHomeMetadata,
  type LocaleRouteProps,
} from "@/app/[locale]/localized-metadata";

export async function generateMetadata({ params }: LocaleRouteProps) {
  return localizedHomeMetadata(params);
}

export default HomePage;
