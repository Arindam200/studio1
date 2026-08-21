"use client";
import { companies } from "@/data/companies";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { sideBeamGlowLeftMuted, sideBeamGlowRightMuted } from "@/lib/shadows";
import { cn } from "@/lib/utils";

/** Studio1 inset edge highlight, same values as button / floating-tile inset pair. */
const companyCardInsetShadow =
  "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.22),inset_0_-1px_0_0_rgba(0,0,0,0.12)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),inset_0_-1px_0_0_rgba(0,0,0,0.2)]";

export const Companies = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="relative"
    >
      <div className={sideBeamGlowLeftMuted}></div>
      <div className={sideBeamGlowRightMuted}></div>
      <div className="mb-12">
        <div className="text-center mb-10">
          <h2 className="mb-3 font-primary text-4xl font-normal tracking-tight md:text-5xl">
            Partnered{" "}
            <span className="serif-accent font-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary">
              Companies
            </span>{" "}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            We empower tech brands to build thriving developer communities
            through DevRel and high-impact content.
          </p>
        </div>

        <div className="grid max-w-5xl z-20 mx-auto grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {companies.map((item, index) => {
            const logoVariant =
              "logoVariant" in item ? item.logoVariant : undefined;
            const logoDarkImage =
              "logoDarkImage" in item ? item.logoDarkImage : undefined;
            const logoClassName =
              "logoClassName" in item ? item.logoClassName : undefined;
            const logoImageClassName = cn(
              logoVariant === "wide"
                ? "object-contain dark:brightness-125"
                : "rounded-lg object-contain",
              logoClassName,
            );

            return (
              <Link
                href={item.href}
                key={`${item.name}-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div
                  className={`border-2 bg-accent z-20 backdrop-blur-2xl dark:bg-muted-foreground/5 w-full h-full rounded-xl flex flex-col items-center justify-center gap-2.5 px-3 py-5 sm:py-6 cursor-pointer transition-transform duration-300 group-hover:-translate-y-1 ${companyCardInsetShadow}`}
                >
                  <div
                    className={
                      logoVariant === "wide"
                        ? "relative h-12 w-28 shrink-0 sm:h-14 sm:w-36"
                        : "relative size-12 shrink-0 sm:size-14"
                    }
                  >
                    {logoDarkImage ? (
                      <>
                        <Image
                          className={cn(logoImageClassName, "dark:hidden")}
                          src={item.image}
                          fill
                          sizes={logoVariant === "wide" ? "144px" : "56px"}
                          alt={item.name}
                        />
                        <Image
                          className={cn(logoImageClassName, "hidden dark:block")}
                          src={logoDarkImage}
                          fill
                          sizes={logoVariant === "wide" ? "144px" : "56px"}
                          alt={item.name}
                        />
                      </>
                    ) : (
                      <Image
                        className={logoImageClassName}
                        src={item.image}
                        fill
                        sizes={logoVariant === "wide" ? "144px" : "56px"}
                        alt={item.name}
                      />
                    )}
                  </div>
                  <div className="text-center text-sm font-semibold leading-snug line-clamp-2">
                    {item.name}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
