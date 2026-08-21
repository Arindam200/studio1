import DocumentationPage from "@/app/(site)/(services)/developer-documentation-dx-audit/page";
import {
  localizedPageMetadata,
  type LocaleRouteProps,
} from "@/app/[locale]/localized-metadata";

export async function generateMetadata({ params }: LocaleRouteProps) {
  return localizedPageMetadata({
    params,
    namespace: "Metadata.services.docs",
    path: "/developer-documentation-dx-audit",
    keywords: [
      "docs as a service",
      "docs audit",
      "developer documentation",
      "DX improvements",
      "API documentation",
      "developer experience audit",
    ],
  });
}

export default DocumentationPage;
