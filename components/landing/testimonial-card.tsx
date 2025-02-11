import { Star } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

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
  return (
    <div className="border hover:translate-y-[-6px] transition-all duration-300 ease-in-out bg-accent dark:bg-accent/50 rounded-lg p-6 mb-6 flex flex-col items-center animate-fade-in">
      <div className="flex items-center justify-center mb-4">
        <Image
          src={testimonial.avatar || "/placeholder.svg"}
          alt={testimonial.name}
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>
      <div className="text-sm text-center mb-4">{testimonial.content}</div>
      <div className="flex items-center justify-center gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star key={index} className="size-4 text-primary" weight="fill" />
        ))}
      </div>
      <div className="text-base font-semibold text-center mb-1">
        {testimonial.name}
      </div>
      <div className="text-sm text-neutral-500 dark:text-neutral-400 text-center">
        {testimonial.role}
      </div>
    </div>
  );
}
