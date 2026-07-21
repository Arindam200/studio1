import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { CaseStudyQuote } from "@/components/case-studies/case-study-quote";
import { resolveCaseStudyImageAlt } from "@/lib/case-studies";
import { mdxComponents } from "@/mdx-components";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function extractText(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(extractText).join("");
  if (children && typeof children === "object" && "props" in children) {
    return extractText((children as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

function Frame({ children }: { children: ReactNode }) {
  return <figure className="not-prose my-8">{children}</figure>;
}

function CaseStudyImage({
  src,
  alt,
  title,
  ...props
}: ComponentPropsWithoutRef<"img"> & { "data-path"?: string }) {
  if (!src) return null;
  const resolvedSrc = typeof src === "string" ? src : undefined;
  const resolvedAlt = resolveCaseStudyImageAlt(alt, resolvedSrc);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      src={resolvedSrc}
      alt={resolvedAlt}
      title={title ?? undefined}
      loading="lazy"
      decoding="async"
      className="w-full h-auto rounded-xl border bg-muted/30"
    />
  );
}

function CaseStudyH2({ children, ...props }: ComponentPropsWithoutRef<"h2">) {
  const id = props.id || slugify(extractText(children));
  return (
    <h2
      id={id}
      className="font-inter font-semibold mt-12 mb-4 text-xl md:text-2xl text-foreground scroll-mt-24"
      {...props}
    >
      {children}
    </h2>
  );
}

function CaseStudyBlockquote({
  children,
}: ComponentPropsWithoutRef<"blockquote">) {
  return (
    <figure className="not-prose my-10">
      <CaseStudyQuote>{children}</CaseStudyQuote>
    </figure>
  );
}

type PullQuoteProps = {
  children: ReactNode;
  author?: string;
  role?: string;
  source?: string;
};

function PullQuote({ children, author, role, source }: PullQuoteProps) {
  return (
    <figure className="not-prose my-12">
      <CaseStudyQuote
        variant="pull"
        author={author}
        role={role}
        source={source}
      >
        {children}
      </CaseStudyQuote>
    </figure>
  );
}

function CaseStudyH3({ children, ...props }: ComponentPropsWithoutRef<"h3">) {
  const id = props.id || slugify(extractText(children));
  return (
    <h3
      id={id}
      className="font-inter font-medium mt-8 mb-3 text-lg text-foreground scroll-mt-24"
      {...props}
    >
      {children}
    </h3>
  );
}

export const caseStudyMdxComponents = {
  ...mdxComponents,
  h2: CaseStudyH2,
  h3: CaseStudyH3,
  blockquote: CaseStudyBlockquote,
  PullQuote,
  Frame,
  img: CaseStudyImage,
};
