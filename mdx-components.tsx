import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";
import { withNumericText } from "@/components/ui/num";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

export const mdxComponents = {
  h1: (props: HeadingProps) => (
    <h1 className="font-medium pt-12 mb-0 text-foreground" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className="font-medium mt-8 mb-3 text-foreground" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className="font-medium mt-8 mb-3 text-foreground" {...props} />
  ),
  h4: (props: HeadingProps) => (
    <h4 className="font-medium text-foreground" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p className="leading-snug text-foreground" {...props}>
      {withNumericText(props.children)}
    </p>
  ),
  ol: (props: ListProps) => (
    <ol className="list-decimal pl-5 space-y-2 text-foreground" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="list-disc pl-5 space-y-1 text-foreground" {...props} />
  ),
  li: (props: ListItemProps) => (
    <li className="pl-1 text-foreground" {...props}>
      {withNumericText(props.children)}
    </li>
  ),
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium text-foreground" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium text-foreground" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="overflow-x-auto rounded-lg border border-border bg-zinc-950 dark:bg-zinc-900 p-4 text-sm my-4 text-zinc-100"
      {...props}
    />
  ),
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(String(children ?? ""));
    return (
      <code
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        className="text-zinc-100"
        {...props}
      />
    );
  },
  Table: ({ data }: { data?: { headers: string[]; rows: string[][] } }) => {
    if (!data?.headers?.length) return null;
    return (
      <table className="w-full my-4 border-collapse text-sm text-foreground">
        <thead>
          <tr className="border-b border-border">
            {data.headers.map((header, index) => (
              <th key={index} className="p-2 text-left font-medium">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index} className="border-b border-border/60">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="p-2">
                  {withNumericText(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-foreground dark:border-zinc-600"
      {...props}
    />
  ),
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="my-6 overflow-x-auto">
      <table
        className="w-full border-collapse text-sm text-foreground"
        {...props}
      />
    </div>
  ),
  thead: (props: ComponentPropsWithoutRef<"thead">) => (
    <thead className="border-b border-border" {...props} />
  ),
  tbody: (props: ComponentPropsWithoutRef<"tbody">) => (
    <tbody {...props} />
  ),
  tr: (props: ComponentPropsWithoutRef<"tr">) => (
    <tr className="border-b border-border/60" {...props} />
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th
      className="border border-border bg-muted/50 p-3 text-left font-medium"
      {...props}
    />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td className="border border-border/60 p-3 align-top" {...props}>
      {withNumericText(props.children)}
    </td>
  ),
};

declare global {
  type MDXProvidedComponents = typeof mdxComponents;
}

export function useMDXComponents(): MDXProvidedComponents {
  return mdxComponents;
}
