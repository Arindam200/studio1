"use client"
import { cn } from '@/lib/utils';
import {ShineBorder} from './shineborder';
const cardContent = {
  title: 'Lorem ipsum dolor',
  description:
    'Lorem ipsum dolor, sit amet elit consectetur adipisicing. Nostrum, hic ipsum! dolor, sit amet elit consectetur amete elite!',
};
export const CardBody = ({ className = '' }) => (
  <div className={cn('text-left space-y-4 p-4 md:p-6', className)}>

    <img src="https://cdn.prod.website-files.com/66fc1a4b1a3399833cbb73ce/66fc1a4b1a3399833cbb7510_048579A7-9748-4357-A675-BF76610495E7.webp"  className="h-20"alt="" />
    <h3 className="text-lg font-bold mb-1 text-orange-400">
      {cardContent.title}
      <p className="text-wrap text-zinc-500 text-sm">{cardContent.description}</p>
    </h3>
  </div>
);

export const CardWithGridEllipsis = ({ children }: { children: React.ReactNode }) => (
    <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} className="border w-[70rem] relative h-56 rounded-md overflow-hidden bg-zinc-950 dark:border-zinc-900 p-1">

      <div
        className={`size-full bg-[url(assets/svg/circle-ellipsis.svg)] bg-repeat bg-[length:30px_30px]`}
      >
        <div className="size-full bg-gradient-to-tr from-zinc-950 via-zinc-950/80 to-zinc-900/10">
          {children}
        </div>
        
      </div>
      
    </ShineBorder>
  );

export const CardWithGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="border w-full rounded-md overflow-hidden dark:border-zinc-900 bg-zinc-950">
    <div className="size-full bg-[url(/svg/grid.svg)] bg-repeat bg-[length:50px_50px]">
      <div className="size-full bg-gradient-to-tr from-zinc-950 via-zinc-950/[.85] to-zinc-950">
        {children}
      </div>
    </div>
  </div>
);