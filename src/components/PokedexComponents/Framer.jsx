export const parent = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.4,
    },
  },
};

export const child = {
  initial: {
    x: "-20vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};
