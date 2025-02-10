import { Lightbulb } from "@phosphor-icons/react";
import { Code, Laptop, Pen } from "@phosphor-icons/react/dist/ssr";

export default function FloatingSvgs() {
  return (
    <>
      <div className="text-white drop-shadow-[10px_16px_50px_hsl(var(--primary))] -rotate-[25deg] rounded-3xl flex items-center justify-center bg-primary absolute top-[15rem] left-[15rem] size-20">
        <Code className="size-10" />
      </div>
      <div className="text-white drop-shadow-[10px_16px_50px_hsl(var(--primary))] rotate-[25deg] rounded-3xl flex items-center justify-center bg-primary absolute top-[15rem] right-[15rem] size-20">
        <Pen className="size-10" />
      </div>
      <div className="text-white drop-shadow-[10px_16px_50px_hsl(var(--primary))] rotate-[25deg] rounded-2xl flex items-center justify-center bg-primary absolute top-[30rem] right-[25rem] size-16">
        <Laptop className="size-8" />
      </div>
      <div className="text-white drop-shadow-[10px_16px_50px_hsl(var(--primary))] -rotate-[25deg] rounded-2xl flex items-center justify-center bg-primary absolute top-[30rem] left-[25rem] size-16">
        <Lightbulb className="size-8" />
      </div>
    </>
  );
}
