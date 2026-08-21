import DevRelPage from "@/app/(site)/(services)/developer-relations-growth-campaigns/page";
import {
  localizedPageMetadata,
  type LocaleRouteProps,
} from "@/app/[locale]/localized-metadata";

export async function generateMetadata({ params }: LocaleRouteProps) {
  return localizedPageMetadata({
    params,
    namespace: "Metadata.services.devrel",
    path: "/developer-relations-growth-campaigns",
  });
}

export default DevRelPage;
