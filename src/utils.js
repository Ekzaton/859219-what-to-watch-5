export const capitalize = (title) => {
  return title[0].toUpperCase() + title.slice(1);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
