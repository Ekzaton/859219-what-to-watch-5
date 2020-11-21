import {movieAdapter, reviewAdapter} from "../services/adapters";

import {getAllMovies, getPromoMovie, getMovieReviews} from "./actions";

export const fetchAllMovies = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(getAllMovies(data.map(movieAdapter))))
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(getPromoMovie(movieAdapter(data))))
);

export const fetchMovieReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(getMovieReviews(data.map(reviewAdapter))))
);
