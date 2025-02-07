import { Data } from "@/data";
import { cn } from "@/lib/utils";

const services = Data.DevRelAsServiceServices;

export default function Services() {
  return (
    <div id="work" className="sm:py-24 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-center  font-semibold lg:text-5xl text-2xl mb-4">
            Here are our <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary/80 to-background ">
              offerings
            </span>
          </div>
          <p className=" mx-auto text-xl ">
            Everything you need to build and maintain a successful <br />{" "}
            developer relations program.
          </p>
        </div>

        <div className="sm:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden border h-[20rem] flex flex-col justify-between items-start p-6 rounded-2xl transition-all"
            >
              <div
                className={cn(
                  "top-[-10rem] md:top-[-29rem] group-hover:opacity-100 opacity-0 z-[10] absolute bg-gradient-to-t from-primary/10 dark:from-primary to-orange-200 dark:to-orange-900/90  blur-[8em] rounded-xl transition-all duration-700 ease-out w-[10rem] md:w-[30rem] h-[20rem] md:h-[25rem] rotate-[54deg]",
                  index % 2 === 0
                    ? "right-[-20%] md:right-[-50%] "
                    : "left-[0%] translate-x-[-50%]",
                  index === 0 && "left-[50%] translate-x-[-50%]",
                  index === 3 && "left-[50%] translate-x-[-50%]"
                )}
              ></div>
              <div className="rounded-lg z-[90] inline-flex p-3 bg-accent dark:bg-accent/30 backdrop-blur-md">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">
                  <a
                    href="#"
                    className="focus:outline-none text-2xl text-primary"
                  >
                    <span className="absolute inset-0 " aria-hidden="true" />
                    {service.title}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
