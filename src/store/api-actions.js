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

import {AuthorizationStatus} from "../const";

export const fetchAllMovies = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(getAllMovies(data.map(movieAdapter))))
);

export const fetchFavoriteMovies = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(getFavoriteMovies(data.map(movieAdapter))))
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(getPromoMovie(movieAdapter(data))))
);

export const fetchMovie = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => dispatch(getMovie(movieAdapter(data))))
);

export const fetchMovieReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(getMovieReviews(data.map(reviewAdapter))))
);

export const checkAuthorization = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
);
