import VideoPage from "@/app/(site)/(services)/developer-video-production/page";
import {
  localizedPageMetadata,
  type LocaleRouteProps,
} from "@/app/[locale]/localized-metadata";

export async function generateMetadata({ params }: LocaleRouteProps) {
  return localizedPageMetadata({
    params,
    namespace: "Metadata.services.video",
    path: "/developer-video-production",
    keywords: [
      "content creation",
      "developer video production",
      "DevTool product demos",
      "technical YouTube videos",
      "technical video demos",
    ],
  });
}

export default VideoPage;
