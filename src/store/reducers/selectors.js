import {createSelector} from 'reselect';

import {DEFAULT_GENRE} from "../../const";

const getActiveGenre = ({APP_STATE}) => APP_STATE.activeGenre;
const getActiveMovie = ({APP_DATA}) => APP_DATA.activeMovie;
const getMovies = ({APP_DATA}) => APP_DATA.movies;

export const getGenres = createSelector(
    getMovies,
    (movies) => {
      return [DEFAULT_GENRE, ...new Set(movies.map((it) => it.genre))];
    }
);

export const getMoviesByGenre = createSelector(
    getActiveGenre,
    getMovies,
    (activeGenre, movies) => {
      if (activeGenre === DEFAULT_GENRE) {
        return movies;
      } else {
        return movies.filter((it) => it.genre === activeGenre);
      }
    }
);

export const getSimilarMovies = createSelector(
    getMovies,
    getActiveMovie,
    (movies, activeMovie) => {
      return movies.filter((it) =>
        it.genre === activeMovie.genre && it.id !== activeMovie.id
      );
    }
);
