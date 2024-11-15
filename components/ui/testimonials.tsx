// import Image from 'next/image'
// import { Card, CardContent } from "@/components/ui/card"
// import { Quote } from 'lucide-react'

// const testimonials = [
//   {
//     quote: "DevRel Boost transformed our developer community. Their strategies increased engagement by 200% in just three months!",
//     author: "Sarah Johnson",
//     title: "CTO, TechInnovate",
//     avatar: "/placeholder.svg?height=100&width=100"
//   },
//   {
//     quote: "Their technical writing team produced content that not only educated our users but also significantly improved our SEO rankings.",
//     author: "Michael Chen",
//     title: "Head of Marketing, AIFlow",
//     avatar: "/placeholder.svg?height=100&width=100"
//   },
//   {
//     quote: "The DevRel specialists at this agency truly understand the intersection of AI, MLOps, and community building. Invaluable partners!",
//     author: "Emily Rodriguez",
//     title: "Community Manager, DataSphere",
//     avatar: "/placeholder.svg?height=100&width=100"
//   }
// ]

// export default function TestimonialSection() {
//   return (
//     <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
//       <div className="container px-4 md:px-6">
//         <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
//           What Our Clients Say
//         </h2>
//         <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
//           {testimonials.map((testimonial, index) => (
//             <Card key={index} className="bg-white dark:bg-gray-900">
//               <CardContent className="p-6">
//                 <Quote className="h-8 w-8 text-purple-500 mb-4" />
//                 <p className="text-lg mb-4">{testimonial.quote}</p>
//                 <div className="flex items-center">
//                   <Image
//                     src={testimonial.avatar}
//                     alt={testimonial.author}
//                     width={50}
//                     height={50}
//                     className="rounded-full mr-4"
//                   />
//                   <div>
//                     <p className="font-semibold">{testimonial.author}</p>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }