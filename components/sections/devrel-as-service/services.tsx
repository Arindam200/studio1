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
      "24/7 technical support and guidance for your developer community.",
    icon: MessageSquare,
  },
  {
    title: "Video Content",
    description:
      "Engaging video tutorials, product demos, and technical workshops.",
    icon: Youtube,
  },
  {
    title: "API Strategy",
    description:
      "Strategic guidance on API design, documentation, and developer experience.",
    icon: GitBranch,
  },
];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Comprehensive DevRel Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to build and maintain a successful developer
            relations program.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {service.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
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
