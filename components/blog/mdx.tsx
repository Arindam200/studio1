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
    return extractText(
      (children as { props: { children?: ReactNode } }).props.children,
    );
  }
  return "";
}

function BlogH2({ children, ...props }: ComponentPropsWithoutRef<"h2">) {
  const id = props.id || slugify(extractText(children));
  return (
    <h2
      id={id}
      className="font-medium mt-8 mb-3 text-foreground scroll-mt-24"
      {...props}
    >
      {children}
    </h2>
  );
}

function BlogH3({ children, ...props }: ComponentPropsWithoutRef<"h3">) {
  const id = props.id || slugify(extractText(children));
  return (
    <h3
      id={id}
      className="font-medium mt-8 mb-3 text-foreground scroll-mt-24"
      {...props}
    >
      {children}
    </h3>
  );
}

export const blogMdxComponents = {
  ...mdxComponents,
  h2: BlogH2,
  h3: BlogH3,
};
