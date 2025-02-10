import { IconPhone, IconPhoneFilled } from "@tabler/icons-react";
import { Button } from "../ui/button";

export default function CTA() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 my-28">
        <div className="border shadow-xl relative flex flex-col overflow-hidden  items-center justify-center h-[20rem] rounded-3xl">
          <div className="text-2xl md:text-4xl text-center font-bold">
            Ready to Skyrocket <br /> Your Developer Community?
          </div>
          <div className=" text-center text-sm md:text-base w-[80%] md:w-full text-muted-foreground leading-tight mb-8 mt-4">
            Schedule a call with our team to learn{" "}
            <br className="hidden md:block" /> how we can help you grow your
            developer community.
          </div>
          <div className="bottom-[-10rem] md:bottom-[-18rem] rotate-[65deg] right-[-14%] opacity-50 dark:opacity-100 z-[-1] absolute bg-gradient-to-t from-primary to-primary/90 blur-[4em] rounded-xl transition-all translate-x-[-50%] w-[10rem] md:w-[10rem] h-[10rem] md:h-[30rem]" />
          <div className="bottom-[-10rem] md:bottom-[-17rem] rotate-[-65deg] left-[-8%] opacity-50 dark:opacity-100 z-[-1] absolute bg-gradient-to-t from-primary to-primary/90 blur-[4em] rounded-xl transition-all translate-x-[-50%] w-[10rem] md:w-[10rem] h-[10rem] md:h-[30rem]" />

          <Button className="h-12 min-w-32 px-4">
            Schedule a call <IconPhoneFilled />
          </Button>
        </div>
      </div>
    </>
  );
}
