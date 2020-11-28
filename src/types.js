import PropTypes from "prop-types";

export const movieType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  bgImage: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  ratingScore: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  runTime: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
});

export const reviewType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
});
