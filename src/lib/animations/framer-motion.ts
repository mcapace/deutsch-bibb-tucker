import { Variants } from 'framer-motion';

// Page transition variants
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

// Hero section animations
export const heroVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

// Card hover animations
export const cardHover = {
  scale: 1.05,
  y: -10,
  transition: {
    duration: 0.3,
    ease: 'easeOut' as const,
  },
};

export const cardTap = {
  scale: 0.98,
  transition: {
    duration: 0.1,
  },
};

// Premium button animations
export const buttonHover = {
  scale: 1.05,
  boxShadow: '0 20px 40px -10px rgba(217, 119, 6, 0.4)',
  transition: {
    duration: 0.3,
    ease: 'easeOut' as const,
  },
};

export const buttonTap = {
  scale: 0.95,
  transition: {
    duration: 0.1,
  },
};

// Text reveal animations
export const textReveal = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
    },
  },
};

// Fade in from bottom
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
    },
  },
};

// Fade in from left
export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
    },
  },
};

// Fade in from right
export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
    },
  },
};

// Scale in animation
export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

// Rotate in animation
export const rotateIn = {
  hidden: {
    opacity: 0,
    rotate: -10,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
    },
  },
};

// Slide in from bottom
export const slideInUp = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut' as const,
    },
  },
};

// Parallax scroll animation
export const parallaxVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: 'easeOut' as const,
    },
  },
};

// Floating animation for decorative elements
export const floating = {
  y: [-10, 10, -10],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

// Pulse animation
export const pulse = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

// Glow effect
export const glow = {
  boxShadow: [
    '0 0 0 0 rgba(217, 119, 6, 0.4)',
    '0 0 20px 10px rgba(217, 119, 6, 0.1)',
    '0 0 0 0 rgba(217, 119, 6, 0.4)',
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

// Typewriter effect
export const typewriter = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

// Magnetic hover effect
export const magneticHover = {
  scale: 1.1,
  rotate: 5,
  transition: {
    duration: 0.3,
    ease: 'easeOut' as const,
  },
};

// Smooth scroll reveal
export const scrollReveal = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
    },
  },
};

// Loading spinner
export const spinner = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear' as const,
    },
  },
};

// Bounce in
export const bounceIn = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
      type: 'spring',
      bounce: 0.4,
    },
  },
};

// Slide and fade
export const slideFade = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
    },
  },
};

// Elastic bounce
export const elasticBounce = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
      type: 'spring',
      bounce: 0.6,
    },
  },
};
