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
              className="border-2 !w-1/3 h-20 flex px-4 bg-accent/80 backdrop-blur-xl rounded-md items-center justify-center overflow-hidden"
            >
              {item.showNameBeside ? (
                <div className="flex items-center gap-2 min-w-0">
                  <Image
                    src={item.image}
                    className={cn(
                      item.isWhite
                        ? "invert grayscale dark:invert-0 dark:grayscale"
                        : "invert-0 grayscale dark:invert",
                      "h-9 w-9 shrink-0 object-contain",
                      item.className,
                    )}
                    alt=""
                    width={36}
                    height={36}
                  />
                  <span className="text-xs font-semibold truncate">
                    {item.name}
                  </span>
                </div>
              ) : (
                <Image
                  src={item.image}
                  className="invert grayscale dark:invert-0 dark:grayscale h-fit object-contain"
                  alt={item.name}
                  width={100}
                  height={100}
                />
              )}
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
