"use client";

import { Globe, LinkedinLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useRef, type MouseEvent } from "react";

const socialLinks = (member: {
  social: { twitter: string; linkedin: string; website: string };
}) => [
  { href: member.social.twitter, label: "X (Twitter)", Icon: XLogo },
  { href: member.social.linkedin, label: "LinkedIn", Icon: LinkedinLogo },
  { href: member.social.website, label: "Website", Icon: Globe },
];

export const TeamCard = ({
  member,
}: {
  member: {
    name: string;
    role: string;
    image: StaticImageData | string;
    bio: string;
    social: {
      twitter: string;
      linkedin: string;
      website: string;
    };
  };
}) => {
  const tileRef = useRef<HTMLDivElement>(null);
  const glow = useRef({ x: 0, y: 0, tx: 0, ty: 0, raf: 0 });

  useEffect(
    () => () => cancelAnimationFrame(glow.current.raf),
    [],
  );

  const animate = () => {
    const g = glow.current;
    g.x += (g.tx - g.x) * 0.12;
    g.y += (g.ty - g.y) * 0.12;
    tileRef.current?.style.setProperty("--mouse-x", `${g.x}px`);
    tileRef.current?.style.setProperty("--mouse-y", `${g.y}px`);
    if (Math.abs(g.tx - g.x) > 0.2 || Math.abs(g.ty - g.y) > 0.2) {
      g.raf = requestAnimationFrame(animate);
    } else {
      g.raf = 0;
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const g = glow.current;
    g.tx = e.clientX - rect.left;
    g.ty = e.clientY - rect.top;
    if (!g.raf) g.raf = requestAnimationFrame(animate);
  };

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const g = glow.current;
    g.x = g.tx = e.clientX - rect.left;
    g.y = g.ty = e.clientY - rect.top;
    tileRef.current?.style.setProperty("--mouse-x", `${g.x}px`);
    tileRef.current?.style.setProperty("--mouse-y", `${g.y}px`);
  };

  return (
    <div className="group flex h-full flex-col">
      {/* Portrait tile — the wrapper's 2px padding IS the border; the glow
          sits underneath and the opaque inner panel covers its center, so it
          can only ever be visible in the 2px ring */}
      <div
        ref={tileRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        className="group/tile relative rounded-2xl bg-border p-[2px]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 ease-out group-hover/tile:opacity-100 [background:radial-gradient(200px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),hsl(var(--primary))_0%,hsl(var(--primary)/0.4)_40%,transparent_75%)]"
        />
        <div className="relative aspect-[9/10] overflow-hidden rounded-[14px]">
          <div aria-hidden className="absolute inset-0 bg-background" />
          <div
            aria-hidden
            className="absolute inset-0 bg-accent backdrop-blur-2xl dark:bg-muted-foreground/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.22),inset_0_-1px_0_0_rgba(0,0,0,0.12)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),inset_0_-1px_0_0_rgba(0,0,0,0.2)]"
          />
          {typeof member.image === "string" ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(min-width: 768px) 30vw, 90vw"
              className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
            />
          ) : (
            <Image
              src={member.image}
              alt={member.name}
              width={400}
              height={500}
              className="absolute bottom-0 left-1/2 h-full w-auto -translate-x-1/2 object-contain object-bottom grayscale transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
            />
          )}
        </div>
      </div>

      {/* Caption — pure typography, no chrome */}
      <div className="flex flex-1 flex-col px-1 pt-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-primary text-lg font-semibold leading-tight tracking-tight">
            {member.name}
          </h3>
          <div className="flex items-center gap-1 text-muted-foreground">
            {socialLinks(member).map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${member.name} on ${label}`}
                className="flex size-7 items-center justify-center transition-colors duration-300 hover:text-primary"
              >
                <Icon className="size-4" />
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-1 text-sm leading-snug text-muted-foreground">
          {member.role}
        </p>
        <div className="mt-4 h-px w-full bg-border/60 transition-colors duration-500 group-hover:bg-primary/40" />
      </div>
    </div>
  );
};
