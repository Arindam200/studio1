import {
  LinkedinLogo,
  RedditLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";

type PostShareProps = {
  url: string;
  title: string;
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

function HackerNewsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.85}
        strokeLinejoin="round"
        strokeLinecap="round"
        paintOrder="stroke fill"
        d="M6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z"
      />
    </svg>
  );
}

export function PostShare({ url, title }: PostShareProps) {
  return (
    <div className="not-prose mt-12 pt-8 border-t border-border">
      <p className="text-sm font-medium text-muted-foreground mb-3">Share</p>
      <div className="flex flex-wrap items-center gap-2">
        <a
          href={hnSubmitUrl(url, title)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Hacker News"
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-muted/50 text-[#FF6600] hover:bg-muted transition-colors"
        >
          <HackerNewsIcon className="size-6 shrink-0" />
        </a>
        <a
          href={redditSubmitUrl(url, title)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Reddit"
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-muted/50 text-[#FF4500] hover:bg-muted transition-colors"
        >
          <RedditLogo className="size-5" weight="fill" />
        </a>
        <a
          href={xIntentUrl(url, title)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-muted/50 text-foreground hover:bg-muted transition-colors"
        >
          <XLogo className="size-5" weight="fill" />
        </a>
        <a
          href={linkedInShareUrl(url)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-muted/50 text-[#0A66C2] hover:bg-muted transition-colors"
        >
          <LinkedinLogo className="size-5" weight="fill" />
        </a>
      </div>
    </div>
  );
}
