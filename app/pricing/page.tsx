"use client";
// import { CheckIcon } from '@heroicons/react/20/solid'
import Navbar from "@/components/sections/navbar";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const blogPlans = [
  {
    name: "Basic Blog",
    price: "$499",
    description: "Perfect for startups and small teams",
    features: [
      "2 blog posts/month",
      "SEO optimization",
      "Content strategy",
      "1 revision/post",
    ],
  },
  {
    name: "Growth Blog",
    price: "$999",
    description: "For scaling companies",
    features: [
      "4 blog posts/month",
      "Advanced SEO",
      "Content calendar",
      "2 revisions/post",
      "Social media snippets",
    ],
  },
  {
    name: "Enterprise Blog",
    price: "Custom",
    description: "Full-scale content engine",
    features: [
      "Custom post volume",
      "Technical writer access",
      "Full content strategy",
      "Unlimited revisions",
      "Distribution strategy",
    ],
  },
];

const devrelPlans = [
  {
    name: "DevRel Starter",
    price: "$1,499",
    description: "Build developer awareness",
    features: [
      "Community management",
      "2 technical tutorials/month",
      "Developer newsletter",
      "Basic metrics tracking",
    ],
  },
  {
    name: "DevRel Pro",
    price: "$2,999",
    description: "Grow developer adoption",
    features: [
      "Full community strategy",
      "4 technical tutorials/month",
      "Developer advocacy",
      "Event representation",
      "Engagement analytics",
    ],
  },
  {
    name: "DevRel Enterprise",
    price: "Custom",
    description: "Scale developer ecosystem",
    features: [
      "Custom strategy",
      "Dedicated DevRel team",
      "Content production",
      "Event speaking",
      "Community building",
    ],
  },
];

const customSolutions = [
  {
    name: "Starter Pack",
    price: "From $4,999",
    description: "Customized solutions",
    features: [
      "Requirements analysis",
      "Custom strategy",
      "Dedicated team",
      "Monthly reporting",
    ],
  },
  {
    name: "Growth Pack",
    price: "From $9,999",
    description: "Comprehensive solutions",
    features: [
      "Full-scale analysis",
      "Integrated strategy",
      "Dedicated team",
      "Weekly reporting",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Enterprise-grade solutions",
    features: [
      "Enterprise analysis",
      "Custom implementation",
      "Dedicated team",
      "Real-time reporting",
      "24/7 support",
    ],
  },
];

const PricingSection = ({ title, plans }: { title: string; plans: any[] }) => (
  <div className="py-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center mb-16"
    >
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative bg-[#1a1f2c]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-orange-500/50 transition-colors"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              {!plan.price.includes("Custom") &&
                !plan.price.includes("From") && (
                  <span className="text-foreground/60 ml-2">/month</span>
                )}
            </div>
            <p className="text-foreground/60">{plan.description}</p>
          </div>

          <ul className="space-y-4 mb-8">
            {plan.features.map((feature: string) => (
              <li key={feature} className="flex items-center text-sm">
                <Check className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button className="w-full py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-medium">
            Get started
          </button>
        </motion.div>
      ))}
    </div>
  </div>
);

const tiers = [
  {
    name: "Hobby",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "$29",
    description:
      "The perfect plan if you're just getting started with our product.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
    ],
    featured: false,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$99",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Dedicated support representative",
      "Marketing automations",
      "Custom integrations",
    ],
    featured: true,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <div className="relative isolate bg-black px-6 py-24 sm:py-32 lg:px-8">
      <Navbar />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-orange-500 to-orange-300 opacity-20"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-orange-400">Pricing</h2>
        <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          Choose the{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 from">
            Right plan{" "}
          </span>{" "}
          for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-300 sm:text-xl/8">
        Choose an affordable plan that's packed with the best features for
        engaging your audience, creating customer loyalty, and driving sales.
      </p>
      <PricingSection title="Blog as a Service" plans={blogPlans} />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-55 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-orange-500 to-orange-300 opacity-20"
        />
      </div>
      <PricingSection title="DevRel as a Service" plans={devrelPlans} />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-orange-500 to-orange-300 opacity-20"
        />
      </div>
      <PricingSection title="Custom Solutions" plans={customSolutions} />
    </div>
  );
}
