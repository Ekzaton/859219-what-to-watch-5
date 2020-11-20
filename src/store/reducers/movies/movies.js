import {ActionType} from "../../action";

import {ALL_GENRES} from "../../../const";
import {getMoviesByGenre} from "../../../movies-filter";
import {extend} from "../../../utils";

const SHOWN_MOVIES_COUNT = 8;

const initialState = {
  activeGenre: ALL_GENRES,
  movies: [],
  moviesByGenre: [],
  promo: {},
  shownMovies: SHOWN_MOVIES_COUNT,
};

export const movies = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_MOVIES_GENRE:
      const isDeafaultGenre = (initialState.activeGenre === action.payload);
      const filteredMovies = isDeafaultGenre
        ? state.movies
        : getMoviesByGenre(state.movies, action.payload);
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
    case ActionType.GET_ALL_MOVIES:
      return extend(state, {
        movies: action.payload,
        moviesByGenre: action.payload,
      });
    case ActionType.GET_PROMO_MOVIE:
      return extend(state, {
        promo: action.payload,
      });
  }

  return state;
};
