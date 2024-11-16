import React from 'react'
import { CardWithGridEllipsis,CardBody  } from "@/components/ui/cards";
const cardContent = [{
    title: 'Blogs as a Servqice',
    description:
      'We provide a both technical and growth oriented blog writing service. Our team of expert writers can help you create content that will help you grow your business.',
  },
  {
    title: 'DevRel as a Service',
    description:
      'We have an Experienced team of Devrels who can help you grow your developer community. We can help you with the strategy, content creation, and distribution of the content.',
  },
  {
    title: 'Comming Soon',
    description:
      'We are working on some exciting products. Stay tuned for more updates.',
  },
  ];

function Service() {
  return (
    <div className="sm:py-16 py-28 px-5 space-y-8 overflow-x-hidden" id="services">
        <h2 className="text-3xl text-center font-semibold lg:text-5xl mb-12"> What  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 from">We Do</span></h2>
        <div className="flex justify-center gap-10 sm:mx-10 max-sm:mx-2 max-sm:flex-col">
          {cardContent.map((content, index) => (
            <CardWithGridEllipsis key={index}>
              <CardBody {...content} />
            </CardWithGridEllipsis>
          ))}
        </div>
      </div>
  )
}

export default Service;