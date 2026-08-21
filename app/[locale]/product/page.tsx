import ProductPage from "@/app/(site)/product/page";
import {
  localizedPageMetadata,
  type LocaleRouteProps,
} from "@/app/[locale]/localized-metadata";

export async function generateMetadata({ params }: LocaleRouteProps) {
  return localizedPageMetadata({
    params,
    namespace: "Metadata.pages.product",
    path: "/product",
  });
}

export default ProductPage;
