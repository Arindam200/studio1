import type { ComponentPropsWithoutRef, ReactNode } from "react";
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
}: ComponentPropsWithoutRef<"img"> & { "data-path"?: string }) {
  if (!src) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={typeof src === "string" ? src : undefined}
      alt={alt ?? ""}
      loading="lazy"
      className="w-full h-auto rounded-xl border bg-muted/30"
    />
  );
}

function CaseStudyH2({ children, ...props }: ComponentPropsWithoutRef<"h2">) {
  const id = props.id || slugify(extractText(children));
  return (
    <h2
      id={id}
      className="font-primary font-semibold mt-12 mb-4 text-xl md:text-2xl text-foreground scroll-mt-24"
      {...props}
    >
      {children}
    </h2>
  );
}

function CaseStudyH3({ children, ...props }: ComponentPropsWithoutRef<"h3">) {
  const id = props.id || slugify(extractText(children));
  return (
    <h3
      id={id}
      className="font-primary font-medium mt-8 mb-3 text-lg text-foreground scroll-mt-24"
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
  Frame,
  img: CaseStudyImage,
};
