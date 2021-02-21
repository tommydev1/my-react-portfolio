export const pageAnimation = {
  hidden: {
    opacity: 0,
    x: -1000,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    x: 3000,
    transition: {
      duration: 0.75,
    },
  },
};

export const titleAnimation = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

export const fadeAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 0.75, ease: "easeInOut" },
  },
};
export const carouselRight = {
  hidden: {
    scale: 0.5,
    opacity: 0.8,
    x: -1000,
  },
  show: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
    },
  },
};
export const carouselLeft = {
  hidden: {
    scale: 0.5,
    opacity: 0.8,
    x: 1000,
  },
  show: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
    },
  },
};
