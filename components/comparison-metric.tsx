import { cn } from "@/lib/utils";
import { SealCheck } from "@phosphor-icons/react/dist/ssr";
import Logo from "./ui/svgs/logo";
import { Badge } from "./ui/badge";
import { Pencil, Users } from "@phosphor-icons/react";

export const ComparisonMetric = ({ className }: { className?: string }) => {
  return (
    <>
      <div
        className={cn(
          "flex items-center justify-center relative gap-14",
          className,
        )}
      >
        <div className="flex translate-y-10 flex-col -rotate-12 items-center gap-4 px-2 justify-center aspect-square rounded-xl h-[11rem] bg-accent/50 border dark:bg-accent/40">
          <Badge className="flex items-center gap-2 bg-primary/10 text-foreground py-2 px-4">
            <Users className="size-4" /> Devrel
          </Badge>
          <div className="">
            <SealCheck className="size-14 fill-primary drop-shadow-xl" />
          </div>
          <div className="text-xs text-center">
            Build Better <br />
            <span className="text-primary font-semibold mr-1">Developer</span>
            Experiences
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 px-2 justify-center aspect-square rounded-xl h-[11rem] scale-110 bg-accent/50 border dark:bg-accent/40">
          <Badge className="flex items-center gap-2 bg-primary/10 text-foreground py-2 px-4">
            <Logo className="size-4" /> Studio1
          </Badge>
          <div className="">
            <SealCheck className="size-14 fill-primary drop-shadow-xl" />
          </div>
          <div className="text-xs text-center">
            Content that <br />
            <span className="text-primary font-semibold mr-1">Rank Higher</span>
            on Google
          </div>
        </div>
        <div className="flex translate-y-10 rotate-12 flex-col items-center gap-4 px-2 justify-center aspect-square rounded-xl h-[11rem] bg-accent/50 border dark:bg-accent/40">
          <Badge className="flex items-center gap-2 bg-primary/10 text-foreground py-2 px-4">
            <Pencil className="size-4" /> Blogs
          </Badge>
          <div className="">
            <SealCheck className="size-14 fill-primary drop-shadow-xl" />
          </div>
          <div className="text-xs text-center">
            Blogs that <br />
            <span className="text-primary font-semibold mr-1">
              Developers Love
            </span>
            to read
          </div>
        </div>
      </div>
    </>
  );
};
