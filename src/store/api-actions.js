import {movieAdapter, reviewAdapter} from "../services/adapters";

import {
  getAllMovies,
  getFavoriteMovies,
  getPromoMovie,
  getMovie,
  getMovieReviews,
  requireAuthorization,
  redirectToRoute
} from "./actions";

import {APIRoute, AppRoute, AuthorizationStatus} from "../const";

export const fetchAllMovies = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(getAllMovies(data.map(movieAdapter))))
);

export const fetchFavoriteMovies = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(getFavoriteMovies(data.map(movieAdapter))))
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(getPromoMovie(movieAdapter(data))))
);

export const fetchMovie = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}${id}`)
    .then(({data}) => dispatch(getMovie(movieAdapter(data))))
);

export const fetchMovieReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}${id}`)
    .then(({data}) => dispatch(getMovieReviews(data.map(reviewAdapter))))
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
);

export const sendReview = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}${id}`, {rating, comment})
    .then(() => dispatch(redirectToRoute(`${AppRoute.FILMS}${id}`)))
);

export const changeFavorite = (id, isFavorite) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}${id}/${isFavorite ? 0 : 1}`)
    .then(() => dispatch(fetchPromoMovie()))
    .then(() => dispatch(fetchMovie(id)))
);
