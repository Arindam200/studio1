import Link from "next/link";
import { IconBrandLinkedin, IconBrandX, IconNews } from "@tabler/icons-react";
import Logo from "../ui/svgs/logo";
import RotatingPeople from "./rotating-people";

export default function Footer() {
  return (
    <section className="relative max-h-fit">
      <div className="overflow-hidden flex items-center !h-[30rem] justify-center w-full translate-y-[15rem]">
        <RotatingPeople />
        <div className="absolute inset-0 m-auto size-56 shadow-[inset_2px_24px_20px_#ffffff20] rounded-full bg-gradient-to-r from-primary via-primary1 to-primary flex items-center justify-center ">
          <div className="bg-white/90 backdrop-blur-lg rounded-full size-48 drop-shadow-2xl flex flex-col gap-1 items-center py-6 text-center">
            <Logo className="size-8" />
            <div className=" text-foreground dark:text-background">
              <h1 className="text-sm font-semibold">Join the community</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="top-[-10rem] md:top-[-10rem] z-[-1] left-[0%] absolute bg-gradient-to-t opacity-50 dark:opacity-80 from-primary dark:to-primary/80 to-primary/80 blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out md:size-[30rem] md:h-[40rem] md:w-[10rem] -rotate-[60deg]"></div>
      <div className="top-[-10rem] md:top-[-10rem] z-[-1] right-[0%] absolute bg-gradient-to-t opacity-50 dark:opacity-80 from-primary dark:to-primary/80 to-primary/80 blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out md:size-[30rem] md:h-[40rem] md:w-[10rem] rotate-[60deg]"></div>

      <footer className="border-t z-[101] relative  pb-10">
        <div className="max-w-7xl  bg-background mx-auto px-4 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2 ">
            <div className="space-y-6 ">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Logo className="size-8" />
                  <h2 className="text-2xl font-bold">Studio1</h2>
                </div>
                <p className="text-muted-foreground sm:w-96">
                  Empowering tech companies with technical content and DevRel
                  services.
                </p>
              </div>
              <div className="flex gap-4 ">
                <Link
                  href="https://x.com/Studio1HQ"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <IconBrandX className="size-6 text-primary" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/studio1hq/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <IconBrandLinkedin className="size-6 text-primary" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://dev.to/studio1hq"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <IconNews className="size-6 text-primary" />
                  <span className="sr-only">Blogs</span>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-4 py-4 px-4 rounded-xl bg-accent/40">
                <h3 className="font-bold text-primary">Services</h3>
                <nav className="flex flex-col gap-2">
                  <Link
                    href="/blog-as-service"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Technical Content
                  </Link>
                  <Link
                    href="/devrel-as-service"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    DevRel Consulting
                  </Link>
                  <Link
                    href="/devrel-as-service"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Community Building
                  </Link>
                  <Link
                    href="/blog-as-service"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Developer Marketing
                  </Link>
                </nav>
              </div>
              <div className="space-y-4 py-4 px-4 rounded-xl bg-accent/40">
                <h3 className="font-bold text-primary">Agency</h3>
                <nav className="flex flex-col gap-2">
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="https://dev.to/studio1hq"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Community Blog
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Careers (Coming soon)
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-4 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-base text-muted-foreground">
              ©{new Date().getFullYear()} Studio1. All rights reserved.
            </p>
            <nav className="flex gap-4">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms and Conditions
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </section>
  );
}
