export const ActionType = {
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
  GET_ALL_MOVIES: `GET_ALL_MOVIES`,
  GET_PROMO_MOVIE: `GET_PROMO_MOVIE`,
  GET_MOVIE_REVIEWS: `GET_MOVIE_REVIEWS`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export const getMoviesByGenre = (activeGenre) => ({
  type: ActionType.GET_MOVIES_BY_GENRE,
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

export const getPromoMovie = (promo) => ({
  type: ActionType.GET_PROMO_MOVIE,
  payload: promo,
});

export const getMovieReviews = (reviews) => ({
  type: ActionType.GET_MOVIE_REVIEWS,
  payload: reviews,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
