import PropTypes from "prop-types";

export const movieType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  ratingScore: PropTypes.number.isRequired,
  ratingLevel: PropTypes.string.isRequired,
  ratingCount: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.string.isRequired,
  runTime: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
});

export const reviewType = PropTypes.shape({
  movie: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }))
});
