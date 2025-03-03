import { Data } from "@/data";
import Image from "next/image";
import { Spotlight, SpotLightItem } from "../ui/spotlight-card";

export const Companies = () => {
  return (
    <>
      <div className="mb-20">
        <div className="text-2xl mb-10 font-primary font-semibold text-center leading-tight">
          Partnered Companies
        </div>
        <div className="grid max-w-4xl mx-auto grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {Data.Companies.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="border-2 bg-accent dark:bg-muted-foreground/5 flex-col aspect-square rounded-xl flex items-center justify-center"
                >
                  <div className="w-32">
                    <Image
                      className="rounded-lg"
                      src={item.image}
                      width={1000}
                      height={1000}
                      alt={item.name}
                    />
                  </div>
                  <div className="h-16 flex items-center justify-center text-lg font-semibold">
                    {item.name}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
