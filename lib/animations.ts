/**
 * Shared animation variants for consistent motion design across the application.
 * These variants are designed to be used with Framer Motion / motion/react.
 */

// Basic fade in with upward movement
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

// Fade in without movement
export const fadeIn = {
  hidden: {
    opacity: 0,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

// Container for staggered children animations
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Alternative container with only stagger
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Item variants with spring animation
export const itemVariants = {
  hidden: {
    y: 50,
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 100,
      duration: 0.6,
    },
  },
};

// Header/title animation
export const headerVariants = {
  hidden: {
    y: 30,
    opacity: 0,
    filter: "blur(5px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 100,
      duration: 0.5,
    },
  },
};

// Scale animation with fade
export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

// Icon animation
export const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut" as const,
    },
  },
};

// Gradient/background element animation
export const gradientVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 0.3,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

// Card/item animation with easing
export const cardVariants = {
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
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// Service/feature item animation
export const serviceItemVariants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.3 },
  },
};

// Stagger children animation
export const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

/** Slow ambient drift for decorative hero glow orbs (product page). */
export const productHeroGlowAmbient = {
  y: [0, -14, 6, 0],
  x: [0, 12, -8, 0],
  opacity: [0.82, 0.98, 0.88, 0.82],
  scale: [1, 1.05, 0.98, 1],
  transition: {
    duration: 14,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut" as const,
  },
};

// Helper function to create floating animation
export const createFloatingAnimation = (delay: number, rotate: number) => ({
  y: [0, -6, 0],
  rotate: rotate,
  transition: {
    y: {
      duration: 5,
      repeat: Number.POSITIVE_INFINITY,
      ease: [0.45, 0, 0.55, 1] as const,
      delay: delay,
    },
    rotate: {
      duration: 0,
    },
  },
});

// Spring transition config
export const springTransition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// Factory function to create card variants with index-based delay
export const createCardVariantsWithDelay = (
  index: number,
  delayMultiplier: number = 0.15
) => ({
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
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: index * delayMultiplier,
    },
  },
});

// Simple fade animation with configurable delay
export const createFadeInWithDelay = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});
