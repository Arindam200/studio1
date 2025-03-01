import { Globe, LinkedinLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Particles } from "../ui/particles";
export const TeamCard = ({
  member,
}: {
  member: {
    name: string;
    role: string;
    image: StaticImageData;
    bio: string;
    social: {
      twitter: string;
      linkedin: string;
      website: string;
    };
  };
}) => {
  return (
    <div className="flex relative hover:-translate-y-1 transition-all duration-700 border-2 dark:border-accent/80 bg-muted/20 group rounded-lg overflow-hidden h-[25rem] flex-col items-center justify-center">
      <div className="bottom-[-6rem] group-hover:opacity-100 opacity-0 z-[-1] left-1/2 -translate-x-1/2 absolute bg-gradient-to-t from-primary via-primary/30 to-primary/50 blur-[3.5em] rounded-full transition-all duration-1000 ease-out h-[90%] w-full"></div>
      <Particles
        className="absolute h-screen opacity-0 group-hover:opacity-100 transition-all duration-700 inset-0 z-0"
        quantity={100}
        ease={80}
        color="#f97316"
        refresh
      />
      <div className="w-full flex items-center justify-center absolute bottom-0 h-fit">
        <Image
          className="w-80 object-cover"
          width={200}
          height={200}
          src={member.image}
          alt={member.name}
        />
      </div>
      <div className="absolute w-[90%] transition-all duration-500 top-0 border-2 py-1  left-1/2 -translate-x-1/2 bg-muted-foreground/10 rounded-lg flex flex-col mt-4 gap-2 items-center justify-center">
        <div className="text-base font-primary font-semibold text-center leading-tight">
          {member.name}
        </div>

        <div className="text-xs flex gap-2 items-center justify-center font-primary text-center leading-tight">
          <Link href={member.social.twitter}>
            <XLogo className="size-4" />
          </Link>
          <Link href={member.social.linkedin}>
            <LinkedinLogo className="size-4" />
          </Link>
          <Link href={member.social.website}>
            <Globe className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
