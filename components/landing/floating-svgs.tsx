import { Lightbulb } from "@phosphor-icons/react";
import { Code, Laptop, Pen } from "@phosphor-icons/react/dist/ssr";

export default function FloatingSvgs() {
  return (
    <>
      <div className="text-white drop-shadow-[10px_16px_50px_hsl(var(--primary))] -rotate-[25deg] rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary1 via-primary to-primary1 backdrop-blur-xl absolute bottom-[2rem] z-[201] md:top-[17rem] left-[2rem] md:left-[4rem] lg:left-[18rem] xl:left-[20rem] size-14">
        <Code className="size-6" />
      </div>
      <div className="text-white drop-shadow-[10px_16px_50px_hsl(var(--primary))] rotate-[25deg] rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary1 via-primary to-primary1 backdrop-blur-xl absolute bottom-[2rem] z-[201] md:top-[17rem] right-[2rem] md:right-[4rem] lg:right-[18rem] xl:right-[20rem] size-14">
        <Pen className="size-6" />
      </div>
      {/* <div className="md:flex hidden text-white drop-shadow-[10px_16px_50px_hsl(var(--primary))] rotate-[25deg] rounded-2xl items-center justify-center bg-gradient-to-br from-primary1 via-primary to-primary1 backdrop-blur-xl absolute top-[30rem] right-[18rem] size-16">
        <Laptop className="size-8" />
      </div>
      <div className="md:flex hidden text-white drop-shadow-[10px_16px_50px_hsl(var(--primary))] -rotate-[25deg] rounded-2xl items-center justify-center bg-gradient-to-br from-primary1 via-primary to-primary1 backdrop-blur-xl absolute top-[30rem] left-[18rem] size-16">
        <Lightbulb className="size-8" />
      </div> */}
    </>
  );
}
