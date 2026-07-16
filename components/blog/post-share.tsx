import type { ReactNode, SVGProps } from "react";
import {
  LinkedinLogo,
  RedditLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";

type PostShareProps = {
  url: string;
  title: string;
  variant?: "default" | "sidebar";
};

type ShareLink = {
  label: string;
  href: string;
  ariaLabel: string;
  defaultIcon: ReactNode;
  sidebarIcon: ReactNode;
  iconClassName: string;
  hoverClassName: string;
};

function hnSubmitUrl(url: string, title: string) {
  const u = new URL("https://news.ycombinator.com/submitlink");
  u.searchParams.set("u", url);
  u.searchParams.set("t", title);
  return u.toString();
}

function redditSubmitUrl(url: string, title: string) {
  const u = new URL("https://www.reddit.com/submit");
  u.searchParams.set("url", url);
  u.searchParams.set("title", title);
  return u.toString();
}

function xIntentUrl(url: string, title: string) {
  const u = new URL("https://twitter.com/intent/tweet");
  u.searchParams.set("url", url);
  u.searchParams.set("text", title);
  return u.toString();
}

function linkedInShareUrl(url: string) {
  const u = new URL("https://www.linkedin.com/sharing/share-offsite/");
  u.searchParams.set("url", url);
  return u.toString();
}

type IconProps = SVGProps<SVGSVGElement>;

const defaultIconSize = "size-[18px] shrink-0";
const sidebarIconClass = "size-3.5 shrink-0";

function HackerNewsIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        d="M6.951 5.896h1.88l2.457 4.875c.364.726.651 1.434.651 1.434s.316-.689.688-1.434l2.457-4.875h1.749l-4.148 7.799V18h-1.583v-5.064L6.951 5.896z"
      />
    </svg>
  );
}

function SidebarHackerNewsIcon() {
  return (
    <svg
      className={sidebarIconClass}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="24" height="24" rx="5" fill="#FF6600" />
      <path
        fill="#fff"
        d="M6.951 5.896h1.88l2.457 4.875c.364.726.651 1.434.651 1.434s.316-.689.688-1.434l2.457-4.875h1.749l-4.148 7.799V18h-1.583v-5.064L6.951 5.896z"
      />
    </svg>
  );
}

function SidebarRedditIcon() {
  return (
    <svg
      className={sidebarIconClass}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="12" cy="12" r="12" fill="#FF4500" />
      <path
        fill="#fff"
        d="M16.67 11.17a1.08 1.08 0 0 0-1.08-1.08c-.59 0-1.07.47-1.08 1.05h-2.14c-.01-.58-.49-1.05-1.08-1.05-.6 0-1.08.48-1.08 1.08 0 .44.26.81.64.98-.04.24-.06.48-.06.73 0 2.45 2.85 4.43 6.37 4.43s6.37-1.98 6.37-4.43c0-.25-.02-.5-.06-.73.38-.17.64-.54.64-.98zm-7.59 1.08c-.47 0-.85-.38-.85-.85s.38-.85.85-.85.85.38.85.85-.38.85-.85.85zm4.84 0c-.47 0-.85-.38-.85-.85s.38-.85.85-.85.85.38.85.85-.38.85-.85.85zm.2 1.85c-.66.66-1.95.99-3.04.99-1.09 0-2.38-.33-3.04-.99a.3.3 0 0 1 0-.42.3.3 0 0 1 .42 0c.5.5 1.5.78 2.62.78 1.12 0 2.12-.28 2.62-.78a.3.3 0 0 1 .42 0 .3.3 0 0 1 0 .42z"
      />
    </svg>
  );
}

function SidebarXIcon() {
  return (
    <svg
      className={sidebarIconClass}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        width="24"
        height="24"
        rx="5"
        className="fill-foreground"
      />
      <path
        fill="hsl(var(--background))"
        d="M13.2 11.04L17.52 6h-1.03l-3.76 4.38L10.2 6H6.8l4.54 6.62L6.8 18h1.03l3.98-4.63L14.8 18h3.4l-4.99-6.96z"
      />
    </svg>
  );
}

function SidebarLinkedInIcon() {
  return (
    <svg
      className={sidebarIconClass}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="24" height="24" rx="5" fill="#0A66C2" />
      <path
        fill="#fff"
        d="M7.12 9.64h2.39v8.36H7.12V9.64zm1.2-3.84a1.39 1.39 0 1 1 0 2.78 1.39 1.39 0 0 1 0-2.78zm3.28 3.84h2.29v1.14h.03c.32-.6 1.1-1.24 2.27-1.24 2.43 0 2.88 1.6 2.88 3.68v4.78h-2.39v-4.24c0-1.01-.02-2.31-1.41-2.31-1.41 0-1.63 1.1-1.63 2.23v4.32h-2.39V9.64z"
      />
    </svg>
  );
}

export function PostShare({ url, title, variant = "default" }: PostShareProps) {
  const isSidebar = variant === "sidebar";
  const links: ShareLink[] = [
    {
      label: "Hacker News",
      href: hnSubmitUrl(url, title),
      ariaLabel: "Share on Hacker News",
      defaultIcon: <HackerNewsIcon className={defaultIconSize} />,
      sidebarIcon: <SidebarHackerNewsIcon />,
      iconClassName: "text-[#FF6600]",
      hoverClassName: "hover:border-[#FF6600]/35 hover:bg-[#FF6600]/[0.06]",
    },
    {
      label: "Reddit",
      href: redditSubmitUrl(url, title),
      ariaLabel: "Share on Reddit",
      defaultIcon: (
        <RedditLogo className={defaultIconSize} weight="fill" />
      ),
      sidebarIcon: <SidebarRedditIcon />,
      iconClassName: "text-[#FF4500]",
      hoverClassName: "hover:border-[#FF4500]/35 hover:bg-[#FF4500]/[0.06]",
    },
    {
      label: "X",
      href: xIntentUrl(url, title),
      ariaLabel: "Share on X",
      defaultIcon: <XLogo className={defaultIconSize} weight="bold" />,
      sidebarIcon: <SidebarXIcon />,
      iconClassName: "text-foreground",
      hoverClassName: "hover:border-foreground/25 hover:bg-foreground/[0.05]",
    },
    {
      label: "LinkedIn",
      href: linkedInShareUrl(url),
      ariaLabel: "Share on LinkedIn",
      defaultIcon: (
        <LinkedinLogo className={defaultIconSize} weight="fill" />
      ),
      sidebarIcon: <SidebarLinkedInIcon />,
      iconClassName: "text-[#0A66C2]",
      hoverClassName: "hover:border-[#0A66C2]/35 hover:bg-[#0A66C2]/[0.06]",
    },
  ];

  return (
    <section
      className={
        isSidebar
          ? "not-prose border-t border-border pt-8"
          : "not-prose mt-12 pt-8 border-t border-border"
      }
      aria-labelledby="post-share-heading"
    >
      <div className={isSidebar ? "mb-3" : "mb-5"}>
        <h2
          id="post-share-heading"
          className={
            isSidebar
              ? "text-sm font-semibold text-foreground"
              : "text-base font-semibold text-foreground"
          }
        >
          Share
        </h2>
        {!isSidebar ? (
          <p className="mt-1 text-sm text-muted-foreground">
            Pass it on if this was useful.
          </p>
        ) : null}
      </div>

      <div
        className={
          isSidebar
            ? "flex flex-wrap items-center gap-1.5"
            : "flex flex-wrap gap-2"
        }
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.ariaLabel}
            title={link.label}
            className={
              isSidebar
                ? `group inline-flex size-7 items-center justify-center rounded-md border border-border/40 bg-background/40 transition-all duration-200 hover:-translate-y-px ${link.hoverClassName}`
                : "inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 text-sm font-medium transition-colors hover:bg-muted hover:border-border/80 sm:px-4"
            }
          >
            <span
              className={`${isSidebar ? "" : link.iconClassName} transition-transform duration-200 group-hover:scale-105`}
            >
              {isSidebar ? link.sidebarIcon : link.defaultIcon}
            </span>
            {!isSidebar ? (
              <span className="hidden sm:inline text-foreground">
                {link.label}
              </span>
            ) : null}
          </a>
        ))}
      </div>
    </section>
  );
}
