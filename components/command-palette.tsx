"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import {
  BookOpen,
  Briefcase,
  Circle,
  FileText,
  Newspaper,
  Search,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { localizePathname, type Locale } from "@/lib/i18n";
import type { SearchItem, SearchItemGroup } from "@/lib/search-index";

type CommandPaletteContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const CommandPaletteContext = createContext<CommandPaletteContextValue | null>(
  null,
);

const groupOrder: SearchItemGroup[] = [
  "pages",
  "services",
  "content",
  "blog",
  "caseStudies",
  "careers",
  "legal",
];

const groupIcons: Record<SearchItemGroup, typeof Circle> = {
  pages: Circle,
  services: Briefcase,
  content: FileText,
  blog: Newspaper,
  caseStudies: BookOpen,
  careers: Briefcase,
  legal: FileText,
};

function localizeHref(href: string, locale: Locale) {
  const hashIndex = href.indexOf("#");
  const path = hashIndex === -1 ? href : href.slice(0, hashIndex);
  const hash = hashIndex === -1 ? "" : href.slice(hashIndex);
  return `${localizePathname(path || "/", locale)}${hash}`;
}

function useCommandPaletteContext() {
  const context = useContext(CommandPaletteContext);
  if (!context) {
    throw new Error("SearchTrigger must be used within CommandPaletteProvider");
  }
  return context;
}

export function CommandPaletteProvider({
  children,
  items,
}: {
  children: ReactNode;
  items: SearchItem[];
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const locale = useLocale() as Locale;
  const t = useTranslations("CommandPalette");
  const navT = useTranslations("Nav");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const resolveTitle = useCallback(
    (item: SearchItem) => {
      if (
        item.titleKey &&
        ["careers", "terms", "privacy"].includes(item.titleKey)
      ) {
        return t(`items.${item.titleKey}`);
      }
      if (item.titleKey) {
        return navT(`items.${item.titleKey}`);
      }
      return item.title;
    },
    [navT, t],
  );

  const resolveDescription = useCallback(
    (item: SearchItem) => {
      if (item.descriptionKey) {
        return navT(`descriptions.${item.descriptionKey}`);
      }
      return item.description;
    },
    [navT],
  );

  const groupedItems = useMemo(() => {
    const groups = new Map<SearchItemGroup, SearchItem[]>();

    for (const group of groupOrder) {
      groups.set(group, []);
    }

    for (const item of items) {
      const bucket = groups.get(item.group);
      if (bucket) bucket.push(item);
    }

    return groupOrder
      .map((group) => ({
        group,
        items: groups.get(group) ?? [],
      }))
      .filter(({ items: groupItems }) => groupItems.length > 0);
  }, [items]);

  const runCommand = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(localizeHref(href, locale));
    },
    [locale, router],
  );

  return (
    <CommandPaletteContext.Provider value={{ open, setOpen }}>
      {children}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={t("placeholder")} />
        <CommandList>
          <CommandEmpty>{t("empty")}</CommandEmpty>
          {groupedItems.map(({ group, items: groupItems }) => {
            const Icon = groupIcons[group];
            return (
              <CommandGroup key={group} heading={t(`groups.${group}`)}>
                {groupItems.map((item) => {
                  const title = resolveTitle(item);
                  const description = resolveDescription(item);
                  const searchValue = [
                    title,
                    description,
                    item.title,
                    item.description,
                    ...(item.keywords ?? []),
                  ]
                    .filter(Boolean)
                    .join(" ");

                  return (
                    <CommandItem
                      key={item.id}
                      value={searchValue}
                      onSelect={() => runCommand(item.href)}
                    >
                      <Icon className="text-muted-foreground" />
                      <span className="flex min-w-0 flex-col gap-0.5">
                        <span className="truncate font-medium">{title}</span>
                        {description ? (
                          <span className="truncate text-xs text-muted-foreground">
                            {description}
                          </span>
                        ) : null}
                      </span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            );
          })}
        </CommandList>
      </CommandDialog>
    </CommandPaletteContext.Provider>
  );
}

export function SearchTrigger({ className }: { className?: string }) {
  const { setOpen } = useCommandPaletteContext();
  const t = useTranslations("CommandPalette");

  return (
    <Button
      type="button"
      variant="outline-subtle"
      size="sm"
      className={cn(
        "hidden h-9 gap-2 px-3 text-muted-foreground md:inline-flex",
        className,
      )}
      onClick={() => setOpen(true)}
      aria-label={t("triggerLabel")}
    >
      <Search className="size-4" />
      <span className="hidden lg:inline">{t("trigger")}</span>
      <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground lg:inline-flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </Button>
  );
}

export function MobileSearchTrigger({ className }: { className?: string }) {
  const { setOpen } = useCommandPaletteContext();
  const t = useTranslations("CommandPalette");

  return (
    <button
      type="button"
      aria-label={t("triggerLabel")}
      className={cn(
        "flex size-10 items-center justify-center rounded-md hover:bg-accent md:hidden",
        className,
      )}
      onClick={() => setOpen(true)}
    >
      <Search className="size-5" />
    </button>
  );
}
