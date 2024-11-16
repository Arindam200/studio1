import {
    BarChartHorizontal,
    BatteryCharging,
    CircleHelp,
    Layers,
    WandSparkles,
    ZoomIn,
  } from 'lucide-react';
  
  const reasons = [
    {
      title: 'Quality',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?',
      icon: <ZoomIn className="size-6" />,
    },
    {
      title: 'Experience',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?',
      icon: <BarChartHorizontal className="size-6" />,
    },
    {
      title: 'Support',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?',
      icon: <CircleHelp className="size-6" />,
    },
    {
      title: 'Innovation',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?',
      icon: <WandSparkles className="size-6" />,
    },
    {
      title: 'Results',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?',
      icon: <Layers className="size-6" />,
    },
    {
      title: 'Efficiency',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?',
      icon: <BatteryCharging className="size-6" />,
    },
  ];
  
  const Feature43 = () => {
    return (
      <section className="sm:py-28 py-16" id='why-us'>
        <div className="container">
          <div className="mb-10 md:mb-20">
            <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
              Why <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 from">Work With</span> Us?
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex max-sm:justify-center">
                <div className="mb-5 flex size-16 items-center justify-center rounded-lg bg-zinc-900">
                  {reason.icon}
                </div>
                </div>
                
                <h3 className="mb-2 text-xl font-semibold text-orange-400 max-sm:text-center">{reason.title}</h3>
                <p className="text-muted-foreground max-sm:text-center">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Feature43;
  