"use client";

import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    referral: "$5K",
    description: "Includes:",
    isRecommended: false,
    features: [
      "Unlimited referrals",
      "All integrations",
      "Core platform features",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline",
  },
  {
    id: "grow",
    name: "Grow",
    price: "$350",
    referral: "$50K",
    description: "Everything in Free, Plus:",
    isRecommended: true,
    features: [
      "In-brand customization",
      "In-brand email design widget",
      "Menu integration",
    ],
    buttonText: "Get Started",
    buttonVariant: "primary",
  },
  {
    id: "scale",
    name: "Scale",
    price: "$750",
    referral: "$100K",
    description: "Everything in Grow, Plus:",
    isRecommended: false,
    features: ["Premium SLAs", "Dedicated support", "Advanced analytics"],
    buttonText: "Get Started",
    buttonVariant: "outline",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    referral: "special needs",
    referralPrefix: "For businesses with",
    description: "Everything in Scale, Plus:",
    isRecommended: false,
    features: [
      "Custom integrations",
      "Enterprise SSO",
      "Dedicated account manager",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline",
  },
];

export default function PricingSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full py-24 max-w-7xl mx-auto relative">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary blur-[4em] rounded-full rotate-12 " />
      <div className="absolute bottom-0 left-20 w-24 h-24 bg-primary blur-[4em] rounded-full -rotate-12 " />
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold mb-4 md:text-5xl">
            The Perfect Plan for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary">
              Your Needs
            </span>
          </h2>
          <p className="text-muted-foreground">
            Our transparent pricing makes it easy to find
            <br /> a plan that works within your financial constraints.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div key={plan.id} variants={itemVariants}>
              <Card
                className={`border ${
                  plan.isRecommended
                    ? "border-primary dark:bg-accent/20 shadow-lg shadow-primary/20 ring-1 ring-primary/50 relative"
                    : "dark:bg-accent/20 border-border"
                }`}
              >
                {/* Card content remains the same */}
                {plan.isRecommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Recommended
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex flex-col items-start">
                    <span className="text-lg font-bold mb-2">{plan.name}</span>
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && (
                        <span className="text-muted-foreground mb-1">/mo</span>
                      )}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="font-medium mb-4">{plan.description}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-400 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={
                      plan.buttonVariant === "primary" ? "default" : "outline"
                    }
                    className={`w-full ${
                      plan.buttonVariant === "primary"
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : ""
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
