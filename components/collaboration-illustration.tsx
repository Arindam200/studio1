import { cn } from "@/lib/utils";
import Image from "next/image";
import { Marquee } from "./ui/marquee";
import { trustedbyLogo } from "@/constants/data";

export const CollaborationIllustration = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <>
      <div
        className={cn(
          "w-full min-h-[1rem] flex items-center justify-center gap-4",
          className,
        )}
      >
        <Marquee>
          {trustedbyLogo.map((item) => (
            <div
              key={item.name}
              className="flex h-14 w-[6.75rem] shrink-0 items-center justify-center overflow-hidden rounded-md border-2 bg-accent/80 px-2.5 backdrop-blur-xl sm:h-16 sm:w-[7.5rem] sm:px-3"
            >
              <div className="relative h-7 w-full sm:h-8">
                <Image
                  src={item.image}
                  className={cn(
                    "object-contain object-center",
                    !("noFilter" in item && item.noFilter) &&
                      (item.isWhite
                        ? "grayscale invert dark:invert-0"
                        : "invert-0 grayscale dark:invert"),
                    item.className,
                  )}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 108px, 120px"
                />
              </div>
            </div>
          ))}
        </Marquee>

        {/* <div className="border-2 !w-1/3 h-fit bg-accent/80 backdrop-blur-xl rounded-md aspect-square flex items-center justify-center">
          <Logo />
        </div>
        <div className="border-2 !w-1/3 h-fit bg-accent/80 backdrop-blur-xl rounded-md aspect-square flex items-center justify-center">
          <Logo />
        </div> */}
      </div>
    </>
  );
};
