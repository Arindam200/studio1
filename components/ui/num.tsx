import { cn } from "@/lib/utils";
import { Fragment, type ReactNode } from "react";

/**
 * Matches standalone numeric tokens (stats, prices, percentages, ranks).
 * Uses a letter lookbehind so digits inside brand names like "Studio1" are
 * never captured, the whole word must stay in the primary/brand font.
 */
const NUMERIC_CAPTURE =
  "(?<![a-zA-Z])(?:\\$?\\d[\\d,./]*\\+?%?|#\\d+|(?:\\d[\\d,./]*-)?\\d+[KMB]?\\+?)";

const NUMERIC_SPLIT = new RegExp(`(${NUMERIC_CAPTURE})`, "gi");
const NUMERIC_TOKEN = new RegExp(`^${NUMERIC_CAPTURE}$`, "i");

/** Wraps explicit numeric content in Space Grotesk (`font-numeric`). */
export function Num({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("font-numeric tabular-nums", className)}>{children}</span>
  );
}

/**
 * Auto-styles numeric tokens inside a string with `Num`.
 * Brand names such as "Studio1" / "Studio1HQ" are excluded by design (see
 * NUMERIC_CAPTURE lookbehind), do not wrap the brand word in `Num` manually.
 */
export function NumericText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const parts = children.split(NUMERIC_SPLIT);

  return (
    <>
      {parts.map((part, i) =>
        NUMERIC_TOKEN.test(part) ? (
          <Num key={i} className={className}>
            {part}
          </Num>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

export function withNumericText(children: ReactNode): ReactNode {
  if (typeof children === "string") {
    return <NumericText>{children}</NumericText>;
  }

  if (Array.isArray(children)) {
    return children.map((child, index) =>
      typeof child === "string" ? (
        <NumericText key={index}>{child}</NumericText>
      ) : (
        <Fragment key={index}>{child}</Fragment>
      ),
    );
  }

  return children;
}
