"use client";
import { cn } from "@/lib/utils";
import { ShineBorder } from "@/components/ui/shineborder";

type CardContent = {
  title: string;
  description: string;
  image: string;
};

export const CardBody = (content: CardContent) => (
  <div
    className={cn(
      "text-left space-y-4 p-4 md:p-6 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center",
    )}
  >
    <img src={content.image} className="h-20" alt={content.title} />
    <h3 className="text-lg font-bold mb-1 text-orange-400 max-sm:text-center min-h-32">
      {content.title}
      <p className="text-wrap text-zinc-500 text-sm">{content.description}</p>
    </h3>
  </div>
);

export const CardWithGridEllipsis = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <ShineBorder
    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    className="border sm:w-[70rem] relative sm:min-h-72 rounded-md overflow-hidden bg-zinc-950 dark:border-zinc-900 p-1"
  >
    <div
      className={`size-full bg-[url(assets/svg/circle-ellipsis.svg)] bg-repeat bg-[length:30px_30px]`}
    >
      <div className="size-full bg-gradient-to-tr from-zinc-950 via-zinc-950/80 to-zinc-900/10">
        {children}
      </div>
    </div>
  </ShineBorder>
);

export const CardWithGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="border w-full rounded-md overflow-hidden dark:border-zinc-900 bg-zinc-950">
    <div className="size-full bg-[url(assets/svg/grid.svg)] bg-repeat bg-[length:50px_50px]">
      <div className="size-full bg-gradient-to-tr from-zinc-950 via-zinc-950/[.85] to-zinc-950">
        {children}
      </div>
    </div>
  </div>
);
