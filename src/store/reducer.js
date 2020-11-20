import {ActionType} from "./action";

import {ALL_GENRES} from "../const";
import {getMoviesByGenre} from "../movies-filter";
import {extend} from "../utils";

import movies from "../mocks/movies";

const SHOWN_MOVIES_COUNT = 8;

const initialState = {
  activeGenre: ALL_GENRES,
  movies,
  moviesByGenre: movies,
  promo: movies[0],
  shownMovies: SHOWN_MOVIES_COUNT,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_MOVIES_GENRE:
      const isDeafaultGenre = (initialState.activeGenre === action.payload);
      const filteredMovies = isDeafaultGenre
        ? movies
        : getMoviesByGenre(movies, action.payload);
      return extend(state, {
        activeGenre: action.payload,
        moviesByGenre: filteredMovies,
      });
    case ActionType.SHOW_MORE_MOVIES:
      if (state.shownMovies < state.moviesByGenre.length - SHOWN_MOVIES_COUNT) {
        return extend(state, {
          shownMovies: action.payload + SHOWN_MOVIES_COUNT,
        });
      } else {
        return extend(state, {
          shownMovies: state.moviesByGenre.length,
        });
      }
  }

  return state;
};
