// Reusable Framer Motion animation variants
export const fadeInUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay,
    duration: 0.2,
  },
});

export const cardHover = {
  whileHover: {
    y: -4,
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.1,
    },
  },
};

export const staggerContainer = (staggerChildren: number = 0.1) => ({
  animate: {
    transition: {
      staggerChildren,
    },
  },
});

// Specific animation combinations
export const animatedCardVariants = (index: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay: index * 0.1,
    duration: 0.2,
  },
  whileHover: {
    y: -4,
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.1,
    },
  },
});

export const blogPostContentVariants = (index: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay: index * 0.02,
    duration: 0.4,
  },
});

export const skillsVariants = (index: number = 0) => ({
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    delay: index * 0.02,
    duration: 0.2,
  },
  whileHover: {
    y: -4,
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.1,
    },
  },
});
