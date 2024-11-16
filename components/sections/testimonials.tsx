import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'Arindam Majumder',
    role: 'CEO & Founder',
    avatar: 'https://avatars.githubusercontent.com/u/109217591?v=4',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt.  id ut omnis repellat. Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis.',
  },
  {
    name: 'Jane Doe',
    role: 'CTO',
    avatar: 'https://avatars.githubusercontent.com/u/109217591?v=4',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat. Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.',
  },
  {
    name: 'John Smith',
    role: 'COO',
    avatar: 'https://avatars.githubusercontent.com/u/109217591?v=4',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat. Lorem ipsum dolor sit.',
  },
  {
    name: 'Jane Smith',
    role: 'Tech Lead',
    avatar: 'https://avatars.githubusercontent.com/u/109217591?v=4',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat. incidunt. Ratione, ullam? Iusto id ut omnis repellat ratione.',
  },
  {
    name: 'Richard Doe',
    role: 'Designer',
    avatar: 'https://avatars.githubusercontent.com/u/109217591?v=4',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.',
  },
  {
    name: 'Gordon Doe',
    role: 'Developer',
    avatar: 'https://avatars.githubusercontent.com/u/109217591?v=4',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat. Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.',
  },
];

const Testimonial6 = () => {
  return (

    <section className="py-16 sm:py-28" id='testimonials' >
      <div className="px-2.5 sm:px-10">
        <div className="mb-8 flex-col px-1 lg:mb-12">
          <h2 className="text-3xl text-center font-semibold lg:text-5xl mb-12">
            Why <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 from">Clients Love </span> Us?
          </h2>
          <Carousel className="w-full">
          <div className="flex items-center space-x-2 justify-center">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselContent>
          {testimonials.map((testimonial, idx) => (
              <CarouselItem
                key={idx}
              >
                <div className="flex flex-col items-center text-center">
          <p className="sm:mb-16 mb-8 max-w-4xl sm:px-8 px-2 text-sm font-medium  lg:text-3xl">
            {testimonial.content}
          </p>
          <div className="flex items-center gap-2 md:gap-4">
            <Avatar className="size-12 md:size-16">
              <AvatarImage src={testimonial.avatar} />
              <AvatarFallback> {testimonial.name} </AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="text-sm font-semibold md:text-xl text-orange-400">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground md:text-base">{testimonial.role}</p>
            </div>
          </div>
        </div>
                </CarouselItem>
            ))}
          
        </CarouselContent>
          <CarouselNext className="static translate-y-0" />
          </div>
          </Carousel>
        </div>
        {/* </Carousel> */}
      </div>
    </section>
  );
};

export default Testimonial6;