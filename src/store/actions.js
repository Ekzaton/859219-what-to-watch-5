export const ActionType = {
  GET_ACTIVE_GENRE: `GET_ACTIVE_GENRE`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
  GET_ALL_MOVIES: `GET_ALL_MOVIES`,
  GET_FAVORITE_MOVIES: `GET_FAVORITE_MOVIES`,
  GET_PROMO_MOVIE: `GET_PROMO_MOVIE`,
  GET_MOVIE: `GET_MOVIE`,
  GET_MOVIE_REVIEWS: `GET_MOVIE_REVIEWS`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SET_DATA_SENDING: `SET_DATA_SENDING`,
  SET_SENDING_ERROR: `SET_SENDING_ERROR`,
};

export const getActiveGenre = (activeGenre) => ({
  type: ActionType.GET_ACTIVE_GENRE,
  payload: activeGenre,
});

export const showMoreMovies = (addedMoviesCount) => ({
  type: ActionType.SHOW_MORE_MOVIES,
  payload: addedMoviesCount,
});

export const getAllMovies = (movies) => ({
  type: ActionType.GET_ALL_MOVIES,
  payload: movies,
});

export const getFavoriteMovies = (favoriteMovies) => ({
  type: ActionType.GET_FAVORITE_MOVIES,
  payload: favoriteMovies,
});

export const getPromoMovie = (promoMovie) => ({
  type: ActionType.GET_PROMO_MOVIE,
  payload: promoMovie,
});

export const getMovie = (activeMovie) => ({
  type: ActionType.GET_MOVIE,
  payload: activeMovie,
});

export const getMovieReviews = (moviewReviews) => ({
  type: ActionType.GET_MOVIE_REVIEWS,
  payload: moviewReviews,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const setDataSending = (bool) => ({
  type: ActionType.SET_DATA_SENDING,
  payload: bool,
});

export const setSendingError = (bool) => ({
  type: ActionType.SET_SENDING_ERROR,
  payload: bool,
});
