import { cn } from "@/lib/utils";

/** Quiet section label. Prefer this over gradient pill badges on every block. */
export function SectionEyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-secondary text-xs font-medium uppercase tracking-[0.18em] text-primary",
        className,
      )}
    >
      {children}
    </p>
  );
}
