import {createSelector} from 'reselect';

import {ALL_GENRES} from "../../../const";

const SHOWN_MOVIES_COUNT = 8;

const getActiveGenre = ({MOVIES}) => MOVIES.activeGenre;
const getMovies = ({MOVIES}) => MOVIES.movies;
const getShownMovies = ({MOVIES}) => MOVIES.shownMovies;

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
    getShownMovies,
    getMoviesByGenre,
    (shownMovies, moviesByGenre) => {
      if (shownMovies < moviesByGenre.length - SHOWN_MOVIES_COUNT) {
        return shownMovies + SHOWN_MOVIES_COUNT;
      } else {
        return moviesByGenre.length;
      }
    }
);
