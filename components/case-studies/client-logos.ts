import type { StaticImageData } from "next/image";
import {
  LiteLLM,
  LiteLLMFull,
  Memori,
  MemoriFull,
  Permit,
  PermitFull,
  ScrapeGraph,
  Webcrumbs,
  WebcrumbsFull,
} from "@/constants/image";

export type ClientLogo = {
  /** Square mark, used in cards and fact strips. */
  icon: StaticImageData;
  /** Full wordmark, used in heroes and logo rows. Falls back to icon. */
  full?: StaticImageData;
};

/** Case-study slug → local client logo assets. */
export const clientLogos: Record<string, ClientLogo> = {
  litellm: { icon: LiteLLM, full: LiteLLMFull },
  memori: { icon: Memori, full: MemoriFull },
  permit: { icon: Permit, full: PermitFull },
  scrapegraph: { icon: ScrapeGraph },
  webcrumbs: { icon: Webcrumbs, full: WebcrumbsFull },
};

export function getClientLogo(slug: string): ClientLogo | null {
  return clientLogos[slug] ?? null;
}
