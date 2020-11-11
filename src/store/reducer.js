import {ActionType} from "./action";
import {ALL_GENRES} from "../const";
import {getMoviesByGenre} from "../movies-filter";
import {extend} from "../utils";

import movies from "../mocks/movies";

const initialState = {
  activeGenre: ALL_GENRES,
  moviesByGenre: movies,
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
  }

  return state;
};
