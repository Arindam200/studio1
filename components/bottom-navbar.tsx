"use client";

import { serviceNavItems } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavbar() {
  const pathname = usePathname();
  const isBottomNavValidPage =
    pathname.startsWith("/devrel-as-service") ||
    pathname.startsWith("/blog-as-service");
  return (
    <>
      <nav className="fixed bottom-[5rem] left-0 w-full">
        {isBottomNavValidPage && (
          <div className="absolute  top-0 left-0 w-full ">
            <nav className="flex max-w-fit drop-shadow-lg border-2 gap-2 mx-auto rounded-2xl py-2 px-2 bg-background !min-h-12 !max-h-20  justify-center items-center ">
              {serviceNavItems.map((item) => (
                <>
                  <Link
                    key={item.title}
                    href={item.path}
                    className="hover:text-foreground bg-accent transition-all duration-75 rounded-sm hover:bg-primary/40 border-2 border-transparent hover:border-primary w-full h-12 p-6 flex items-center justify-center"
                  >
                    {item.title}
                  </Link>
                </>
              ))}
            </nav>
          </div>
        )}
      </nav>
    </>
  );
}
