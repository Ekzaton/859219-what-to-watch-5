import {movieAdapter, reviewAdapter} from "../services/adapters";

import {
  getAllMovies,
  getFavoriteMovies,
  getPromoMovie,
  getMovie,
  getMovieReviews,
  requireAuthorization,
  redirectToRoute,
  setDataSending,
  setSendingError
} from "./actions";

import {APIRoute, AppRoute, AuthorizationStatus} from "../const";

export const fetchAllMovies = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(getAllMovies(data.map(movieAdapter))))
    .catch(() => {
      throw Error(`Ошибка загрузки фильмов`);
    })
);

export const fetchFavoriteMovies = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(getFavoriteMovies(data.map(movieAdapter))))
    .catch(() => {
      throw Error(`Ошибка загрузки фильмов к просмотру`);
    })
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(getPromoMovie(movieAdapter(data))))
    .catch(() => {
      throw Error(`Ошибка загрузки промо-фильма`);
    })
);

export const fetchMovie = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}${id}`)
    .then(({data}) => dispatch(getMovie(movieAdapter(data))))
    .catch(() => {
      throw Error(`Ошибка загрузки фильма`);
    })
);

export const fetchMovieReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}${id}`)
    .then(({data}) => dispatch(getMovieReviews(data.map(reviewAdapter))))
    .catch(() => {
      throw Error(`Ошибка загрузки отзывов`);
    })
);

export const checkAuthorization = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch(() => {
      throw Error(`Ошибка авторизации`);
    })
);

export const sendReview = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}${id}`, {rating, comment})
    .then(() => {
      dispatch(setSendingError(false));
      dispatch(redirectToRoute(`${AppRoute.FILMS}${id}`));
      dispatch(setDataSending(false));
    })
    .catch(() => {
      dispatch(setDataSending(false));
      dispatch(setSendingError(true));
    })
);

export const changeFavorite = (id, isFavorite) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}${id}/${isFavorite ? 0 : 1}`)
    .then(() => dispatch(fetchPromoMovie()))
    .then(() => dispatch(fetchMovie(id)))
);
