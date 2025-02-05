import { IconStarFilled } from "@tabler/icons-react";
import { Marquee } from "../ui/marquee";
import { cn } from "@/lib/utils";

export default function CTAmarquee({
  reverse,
  className,
}: {
  reverse?: boolean;
  className?: string;
}) {
  return (
    <>
      <div
        className={cn(
          "flex flex-col rotate-[2deg] gap-4 mb-20 border ",
          className
        )}
      >
        <Marquee duration={140} reverse={reverse}>
          {[...Array(100)].map((_, i) => (
            <div key={i} className="flex items-center mx-4 gap-10">
              <div className="text-2xl font-bold">SCHEDULE CALL</div>
              <div className="text-2xl font-bold">
                <IconStarFilled className="text-primary" />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
}
