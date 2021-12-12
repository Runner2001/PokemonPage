export const parent = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
};
export const child = {
  initial: (custom) => {
    if (custom == "left") {
      return {
        x: -200,
        scale: 0,
      };
    } else {
      return {
        x: 200,
        scale: 0,
      };
    }
  },
  animate: {
    x: 0,
    scale: 1,
  },
};

export const gameChild = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};
