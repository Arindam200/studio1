import { cn } from "@/lib/utils";

export default function SingleGrid({
  innerClassName,
  outerClassName,
}: {
  innerClassName?: string;
  outerClassName?: string;
}) {
  return (
    <div
      className={cn("border-2 p-1 relative h-full w-[5rem]", outerClassName)}
    >
      <div className={cn("bg-accent h-full w-full", innerClassName)}></div>
    </div>
  );
}
