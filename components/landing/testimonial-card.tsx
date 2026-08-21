import { Star } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { NumericText } from "@/components/ui/num";
import { cn } from "@/lib/utils";
import { elevatedCardShadow } from "@/lib/shadows";

function parseRole(role: string) {
  const lastComma = role.lastIndexOf(",");
  if (lastComma === -1) return { title: role, company: null as string | null };

  return {
    title: role.slice(0, lastComma).trim(),
    company: role.slice(lastComma + 1).trim(),
  };
}

const testimonialSurface = cn(
  "group relative flex h-full flex-col text-left",
  "rounded-xl border border-border/50 dark:border-white/[0.08]",
  "bg-gradient-to-br from-background/95 via-background/90 to-primary/[0.05]",
  "dark:from-white/[0.04] dark:to-white/[0.01]",
  "backdrop-blur-sm",
  elevatedCardShadow,
  "shadow-feature-card-hover",
  "ring-1 ring-primary/[0.06] dark:ring-white/[0.04]",
  "transition-[box-shadow,ring-color,border-color] duration-500 ease-out",
  "hover:border-primary/20 hover:ring-primary/15",
  "dark:hover:shadow-xl",
  "motion-reduce:transition-none",
);

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: {
    name: string;
    role: string;
    avatar: string;
    content: string;
    highlights: string[];
  };
}) {
  const { title, company } = parseRole(testimonial.role);

  return (
    <article className={cn(testimonialSurface, "p-6 sm:p-7")}>
      <span
        className="font-accent pointer-events-none select-none text-[2.75rem] leading-none text-primary/20 dark:text-primary/15"
        aria-hidden
      >
        &ldquo;
      </span>

      <blockquote className="mt-1 flex-1">
        <p className="font-secondary text-sm leading-[1.65] text-foreground/85 sm:text-[0.9375rem]">
          <NumericText>{testimonial.content.trim()}</NumericText>
        </p>
      </blockquote>

      <footer className="mt-6 border-t border-border/40 pt-5 dark:border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/25 to-primary1/15 opacity-0 blur-[6px] transition-opacity duration-500 group-hover:opacity-100 motion-reduce:transition-none"
              aria-hidden
            />
            <Image
              src={testimonial.avatar || "/placeholder.svg"}
              alt={`${testimonial.name} portrait`}
              width={52}
              height={52}
              quality={95}
              sizes="52px"
              className="relative size-12 rounded-full object-cover ring-2 ring-background [image-rendering:auto] dark:ring-white/10"
            />
          </div>

          <div className="min-w-0 flex-1">
            <cite className="block truncate font-primary text-sm font-medium not-italic text-foreground">
              {testimonial.name}
            </cite>
            <p className="mt-0.5 font-secondary text-xs leading-snug text-muted-foreground">
              {title}
              {company ? (
                <>
                  {", "}
                  <span className="serif-accent font-accent italic text-foreground/70">
                    {company}
                  </span>
                </>
              ) : null}
            </p>
          </div>
        </div>

        <div
          className="mt-3 flex items-center gap-0.5"
          role="img"
          aria-label="5 out of 5 stars"
        >
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className="size-3 text-primary/60 dark:text-primary/50"
              weight="fill"
            />
          ))}
        </div>
      </footer>
    </article>
  );
}
