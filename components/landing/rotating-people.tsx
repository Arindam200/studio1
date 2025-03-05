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
    <div className={cn("relative z-[50] mx-auto w-screen", className)}>
      {/* Center circle with pulse animation */}

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
