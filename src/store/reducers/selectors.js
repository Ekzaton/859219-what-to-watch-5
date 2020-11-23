import {createSelector} from 'reselect';

import {ALL_GENRES} from "../../const";

const SHOWN_MOVIES_COUNT = 8;

const getActiveGenre = ({APP_STATE}) => APP_STATE.activeGenre;
const getActiveMovie = ({APP_DATA}) => APP_DATA.activeMovie;
const getMovies = ({APP_DATA}) => APP_DATA.movies;
const getShownMovies = ({APP_STATE}) => APP_STATE.shownMovies;


export const getMoviesByGenre = createSelector(
    getActiveGenre,
    getMovies,
    (activeGenre, movies) => {
      if (activeGenre === ALL_GENRES) {
        return movies;
      } else {
        return movies.filter((it) => it.genre === activeGenre);
      }
    }
);

export const showMoreMovies = createSelector(
    getMoviesByGenre,
    getShownMovies,
    (moviesByGenre, shownMovies) => {
      if (shownMovies < moviesByGenre.length - SHOWN_MOVIES_COUNT) {
        return shownMovies + SHOWN_MOVIES_COUNT;
      } else {
        return moviesByGenre.length;
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
