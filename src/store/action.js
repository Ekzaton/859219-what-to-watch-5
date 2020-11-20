export const ActionType = {
  CHANGE_MOVIES_GENRE: `CHANGE_MOVIES_GENRE`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
  GET_ALL_MOVIES: `GET_ALL_MOVIES`,
  GET_PROMO_MOVIE: `GET_PROMO_MOVIE`,
  GET_MOVIE_REVIEWS: `GET_MOVIE_REVIEWS`,
};

export const changeMoviesGenre = (activeGenre) => ({
  type: ActionType.CHANGE_MOVIES_GENRE,
  payload: activeGenre,
});

export const showMoreMovies = (shownMovies) => ({
  type: ActionType.SHOW_MORE_MOVIES,
  payload: shownMovies,
});

export const getAllMovies = (movies) => ({
  type: ActionType.GET_ALL_MOVIES,
  payload: movies,
});

export const getPromoMovie = (movie) => ({
  type: ActionType.GET_PROMO_MOVIE,
  payload: movie,
});

export const getMovieReviews = (reviews) => ({
  type: ActionType.GET_MOVIE_REVIEWS,
  payload: reviews,
});
