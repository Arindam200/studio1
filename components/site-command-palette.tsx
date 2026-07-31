import { CommandPaletteProvider } from "@/components/command-palette";
import { buildSearchIndex } from "@/lib/search-index";

export function SiteCommandPalette({ children }: { children: React.ReactNode }) {
  const items = buildSearchIndex();

  return <CommandPaletteProvider items={items}>{children}</CommandPaletteProvider>;
}
