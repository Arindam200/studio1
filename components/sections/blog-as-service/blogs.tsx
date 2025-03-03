import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Data } from "@/data";
import { Version1 } from "./blog-thubmnail-version/version-1";
import { Button } from "@/components/ui/button";

const cards = Data.Blogs;

export default function MinimalCardDemo() {
  return (
    <div id="work" className="sm:px-20 px-2.5 py-10 sm:py-20">
      <div className="text-center my-10">
        <div className="text-center  font-semibold lg:text-5xl text-4xl mb-4">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary ">
            Blogs
          </span>
        </div>
        <p className=" mx-auto text-foreground/80 dark:text-neutral-400 text-sm md:text-base ">
          Everything you need to build and maintain a successful{" "}
          <br className="hidden md:block" /> developer relations program.
        </p>
      </div>
      <div className="min-h-[600px] p-4 flex flex-col justify-center rounded-md space-y-4">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, index) => {
            switch (item.version) {
              case 1:
                return (
                  <Version1
                    key={index}
                    title={item.title}
                    description={item.description}
                    hrefLink={item.link}
                    tags={item.tags}
                  />
                );
            }
          })}
        </div>
      </div>
      <Button
        asChild
        variant={"secondary"}
        className="flex w-fit mx-auto justify-center py-4"
      >
        <Link href="/blogs">
          Read More Blogs <ArrowRight size={24} />
        </Link>
      </Button>
    </div>
  );
}
