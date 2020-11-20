export const ActionType = {
  CHANGE_MOVIES_GENRE: `CHANGE_MOVIES_GENRE`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
  GET_ALL_MOVIES: `GET_ALL_MOVIES`,
  GET_PROMO_MOVIE: `GET_PROMO_MOVIE`,
  GET_MOVIE_REVIEWS: `GET_MOVIE_REVIEWS`,
};

export const ActionCreator = {
  changeMoviesGenre: (activeGenre) => ({
    type: ActionType.CHANGE_MOVIES_GENRE,
    payload: activeGenre,
  }),
  showMoreMovies: (shownMovies) => ({
    type: ActionType.SHOW_MORE_MOVIES,
    payload: shownMovies,
  }),
  getAllMovies: (movies) => ({
    type: ActionType.GET_ALL_MOVIES,
    payload: movies,
  }),
  getPromoMovie: (movie) => ({
    type: ActionType.GET_PROMO_MOVIE,
    payload: movie,
  }),
  getMovieReviews: (reviews) => ({
    type: ActionType.GET_MOVIE_REVIEWS,
    payload: reviews,
  }),
};
