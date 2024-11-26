import {
  Code2,
  Users,
  BookOpen,
  MessageSquare,
  Youtube,
  GitBranch,
} from "lucide-react";

const services = [
  {
    title: "Technical Content Creation",
    description:
      "High-quality tutorials, documentation, and technical blog posts that resonate with developers.",
    icon: Code2,
  },
  {
    title: "Community Management",
    description:
      "Build and nurture a thriving developer community around your product or platform.",
    icon: Users,
  },
  {
    title: "Developer Education",
    description:
      "Comprehensive training programs and workshops to help developers succeed with your tools.",
    icon: BookOpen,
  },
  {
    title: "Developer Support",
    description:
      "Building a responsive developer community where questions are answered and solutions are shared collaboratively.",
    icon: MessageSquare,
  },
  {
    title: "Video Content",
    description:
      "Engaging video tutorials, product demos, and technical livestreams.",
    icon: Youtube,
  },
  {
    title: "Tool Audit",
    description:
      "Strategic onboarding and developer experience assessment through comprehensive tool ecosystem analysis.",
    icon: GitBranch,
  },
];

export default function Services() {
  return (
    <div id="work" className="sm:py-24 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
        <div className="text-center mb-6 font-semibold lg:text-5xl text-2xl pb-4">
          Our{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 from">
            Services
          </span>
        </div>
          {/* <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to build and maintain a successful developer
            relations program.
          </p> */}
        </div>

        <div className="sm:mt-20 grid grid-cols-1 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-black p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-zinc-900 text-white ">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">
                  <a href="#" className="focus:outline-none text-2xl text-orange-400">
                    <span className="absolute inset-0 " aria-hidden="true" />
                    {service.title}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
