import { Badge } from "@/components/ui/badge";
import { IconPackages, IconPhoneFilled } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
export default function Hero() {
  return (
    <>
      <div className="h-[42rem] overflow-hidden relative max-w-7xl mx-auto py-10 md:py-20 px-4 mt-24 w-full">
        <div className="flex flex-col items-center justify-center gap-4">
          <Badge className="text-sm font-medium pb-1 flex gap-2 items-center">
            <IconPackages className="size-4" /> Services
          </Badge>
          <div className="md:text-7xl text-5xl font-medium text-center">
            Blog as a Service
          </div>

          <p className="md:text-xl text-base font-medium text-center">
            Creating developer-focused content that builds trust and <br />
            drives technical adoption
          </p>
          <div className="flex md:flex-row mt-10 w-full gap-4 flex-col justify-center">
            <Button className=" h-14 w-full md:w-44">
              Book a Call <IconPhoneFilled className="size-10" />
            </Button>
            <Button variant="secondary" className=" h-14 md:w-44 w-full">
              Explore Services <IconPackages className="size-10" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-10 md:mt-14 mt-10">
            <div className="flex flex-col gap-2 min-w-24 min-h-32 justify-center max-h-32 rounded-2xl items-center">
              <div className="text-4xl font-bold">600K+</div>
              <div className="text-sm text-center">
                Blogs <br /> Views
              </div>
            </div>
            <div className="flex flex-col gap-2 min-w-24 min-h-32 justify-center max-h-32 rounded-2xl items-center">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm text-center">
                Projects <br /> Completed
              </div>
            </div>
            <div className="flex flex-col gap-2 min-w-24 min-h-32 justify-center max-h-32 rounded-2xl items-center">
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm text-center">
                Companies
                <br /> Collaborated
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-[-10rem] md:bottom-[-29rem] left-[50%] z-[-1] opacity-50 dark:opacity-100 absolute bg-gradient-to-t from-primary/10 dark:from-primary to-orange-200 dark:to-orange-900/90  blur-[8em] rounded-xl transition-all translate-x-[-50%] duration-700 ease-out w-[10rem] md:w-[30rem] h-[20rem] md:h-[30rem] rotate-[54deg]"></div>
      </div>
    </>
  );
}
