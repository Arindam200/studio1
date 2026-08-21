import AboutUsPage from "@/app/(site)/about-us/page";
import {
  localizedPageMetadata,
  type LocaleRouteProps,
} from "@/app/[locale]/localized-metadata";

export async function generateMetadata({ params }: LocaleRouteProps) {
  return localizedPageMetadata({
    params,
    namespace: "Metadata.pages.about",
    path: "/about-us",
  });
}

export default AboutUsPage;
