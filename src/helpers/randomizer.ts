export const randomInteger = (min = 10, max = 45) => {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};
