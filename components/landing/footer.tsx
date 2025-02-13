import Link from "next/link";
import { IconBrandLinkedin, IconBrandX, IconNews } from "@tabler/icons-react";
import Logo from "../ui/svgs/logo";
import RotatingPeople from "./rotating-people";

export default function Footer() {
  return (
    <section className="relative max-h-fit mt-44">
      <RotatingPeople />
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
