import TechnicalContentPage from "@/app/(site)/(services)/technical-content-marketing/page";
import {
  localizedPageMetadata,
  type LocaleRouteProps,
} from "@/app/[locale]/localized-metadata";

export async function generateMetadata({ params }: LocaleRouteProps) {
  return localizedPageMetadata({
    params,
    namespace: "Metadata.services.technicalContent",
    path: "/technical-content-marketing",
  });
}

export default TechnicalContentPage;
