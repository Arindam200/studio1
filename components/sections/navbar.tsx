"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar2 from "@/components/ui/acc-navbar";
import Navbar3 from "./devrel-as-service/navbar3";
import Navbar4 from "./blog-as-service/navbar4";
import Navbar5 from "@/app/blogs/navbar";
import { usePathname } from "next/navigation";
import Logo from "@/public/assets/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDevrel, setIsDevrel] = useState(false);
  const [isBlog, setIsBlog] = useState(false);
  const [isAllBlog, setIsAllBlog] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsDevrel(pathname.includes("/devrel-as-service"));
    setIsBlog(pathname.includes("/blog-as-service"));
    setIsAllBlog(pathname.includes("/blogs"));
  }, [pathname]);

  const renderNavbar = () => {
    if (isDevrel) return <Navbar3 />;
    if (isBlog) return <Navbar4 />;
    if (isAllBlog) return <Navbar5 />;
    return <Navbar2 />;
  };

  return (
    <header className="fixed top-2 z-50 w-full overflow-x-hidden">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        {!isScrolled && (
          <Link href="/" className="flex items-center space-x-2">
            <img
              src={Logo.src}
              alt="Studio1 - Technical Content and DevRel Services"
              className="h-14 w-14 max-md:h-10 max-md:w-10 fill-primary text-primary rounded-full"
            />
            <span className="text-xl font-bold max-sm:hidden sm:visible">
              Studio1HQ
            </span>
          </Link>
        )}
        <div className="hidden md:flex">{renderNavbar()}</div>
        {isScrolled && renderNavbar()}
        {!isScrolled && (
          <a
            href="mailto:studioone.tech@gmail.com"
            className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] flex text-lg max-md:text-sm font-semibold px-8 py-2.5 max-md:px-4 max-md:py-1.5 bg-orange-600 text-white rounded-md transition duration-200 ease-linear hover:bg-orange-700 hover:shadow-[0_6px_20px_rgba(93,93,93,23%)]"
          >
            Contact Us
          </a>
        )}
      </div>
    </header>
  );
}
