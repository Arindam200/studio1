import SingleGrid from "../single-grid";

export default function HeroRightGrids() {
  return (
    <div className="rotate-[18deg] dark:opacity-70 md:dark:opacity-100 opacity-40 sm:opacity-70 h-[80vh] lg:h-[140vh] absolute -bottom-44 lg:top-60 -right-36 lg:-right-0 w-fit">
      <div className="flex items-center gap-4 h-full w-full">
        <SingleGrid
          innerClassName="bg-gradient-to-br from-accent via-accent/20 to-accent/50 dark:from-background dark:via-background/20 dark:to-background/50"
          outerClassName="w-[3.5rem] sm:w-[4.5rem] border-secondary/80 p-2"
        />
        <SingleGrid
          innerClassName="bg-gradient-to-br from-white/20 via-primary to-primary"
          outerClassName="w-[3.5rem]   sm:w-[4.5rem] border-primary/20 p-2"
        />
        <SingleGrid
          innerClassName="bg-gradient-to-br from-white/20 via-primary to-primary"
          outerClassName="w-[3.5rem] sm:w-[4.5rem] border-primary/20 p-2"
        />
      </div>
    </div>
  );
}
