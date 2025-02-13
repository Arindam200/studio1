import {
  AgitaImg,
  GabrielImg,
  IvanImg,
  NathanImg,
  SauravImg,
} from "@/constants/image";
import { JuliaImg, MarketaImg } from "@/constants/image";
import { DavidImg, FerranImg } from "@/constants/image";
import { ColeImg } from "@/constants/image";
import Logo from "../ui/svgs/logo";
import { cn } from "@/lib/utils";
export default function RotatingPeople({ className }: { className?: string }) {
  const avatarUrls = [
    SauravImg,
    NathanImg,
    IvanImg,
    GabrielImg,
    AgitaImg,
    MarketaImg,
    JuliaImg,
    DavidImg,
    ColeImg,
    FerranImg,
  ];

  return (
    <div className={cn("relative z-[50] mx-auto", className)}>
      {/* Center circle with pulse animation */}
      <div className="absolute inset-0 m-auto size-56 shadow-[inset_2px_24px_20px_#ffffff20] rounded-full bg-gradient-to-r from-primary via-primary1 to-primary flex items-center justify-center ">
        <div className="bg-white/90 backdrop-blur-lg rounded-full size-48 drop-shadow-2xl flex flex-col gap-1 items-center py-6 text-center">
          <Logo className="size-8" />
          <div className=" text-foreground dark:text-background">
            <h1 className="text-sm font-semibold">Join the community</h1>
          </div>
        </div>
      </div>

      {/* Rotating container for avatars */}
      <div className="absolute inset-0 animate-spin-slow">
        {/* Surrounding avatars */}
        {avatarUrls.map((element, index) => {
          const angle = (index * 360) / avatarUrls.length;
          const radius = 170; // Distance from center5
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={index}
              className="absolute w-12 h-12 hover:scale-110 transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
              }}
            >
              <div className="w-full h-full rounded-md overflow-hidden border-[3px] border-white shadow-lg animate-spin-reverse-slow">
                <img
                  src={element.src || "/placeholder.svg"}
                  alt={`Community member ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
