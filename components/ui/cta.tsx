import { ArrowRight } from 'lucide-react';
import {CardWithGrid} from '@/components/ui/cards';

const CTA10 = () => {
  return (
    <section className="sm:py-32 py-20">
      <div className="container">
      <CardWithGrid >
        <div className="flex w-full flex-col gap-16 max-sm:gap-8 overflow-hidden rounded-lg border border-orange-400 p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-16">
        
          <div className="flex-1">
            
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            Ready to Skyrocket Your Developer Community?
            </h3>
            <p className="text-muted-foreground lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis!
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button className="px-6 gap-2 max-sm:justify-center flex max-sm:px-4 max-sm:text-base py-2.5 text-center text-lg font-semibold rounded-md bg-gradient-to-b from-orange-500 to-orange-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
             Book a Call <ArrowRight className='pt-1' />
            </button>
          </div>
           
        </div>
        </CardWithGrid>
      </div>
       
    </section>
  );
};

export default CTA10;
