import { ComponentType, ReactNode } from "react";

// Animation Types
export interface AnimationVariant {
  hidden: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    filter?: string;
  };
  visible: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    filter?: string;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string | number[];
      type?: string;
      stiffness?: number;
      damping?: number;
      staggerChildren?: number;
      delayChildren?: number;
    };
  };
}

export interface ContainerVariants {
  hidden: { opacity?: number };
  visible: {
    opacity?: number;
    transition?: {
      staggerChildren?: number;
      delayChildren?: number;
    };
  };
}

// Component Props Types
export interface DotPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
}

export interface HoveredLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

// Data Types
export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface Company {
  id: number;
  name: string;
  designation: string;
  image: string;
  href: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
  highlights: string[];
}

export interface BlogPost {
  title: string;
  description: string;
  link: string;
  image?: string;
  tags: string[];
  version: number;
}

export interface Service {
  title: string;
  description: string | ReactNode;
  icon: ComponentType<{ className?: string; weight?: string }>;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface ProcessStep {
  name: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  details: ReactNode[];
}

export interface TrustedByLogo {
  name: string;
  image: string;
  className: string;
  alt: string;
}

export interface NavItem {
  title: string;
  path: string;
  children?: NavChild[];
}

export interface NavChild {
  title: string;
  path: string;
  icon: ComponentType<{ className?: string; weight?: string }>;
}

// Impact Metrics Types
export interface ImpactMetric {
  value: string;
  label: string;
}
