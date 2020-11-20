export const capitalize = (title) => {
  return title[0].toUpperCase() + title.slice(1);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const formatMovieDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = Math.floor((duration % 60));
  return hours === 0 ? `${minutes}m` : `${hours}h ${minutes}m`;
};

export const formatReviewDate = (date) => {
  return new Date(date).toLocaleString(
      `en-US`, {month: `long`, day: `numeric`, year: `numeric`}
  );
};
