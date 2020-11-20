import {ActionType} from "../../action";

import {ALL_GENRES} from "../../../const";
import {extend} from "../../../utils";

const initialState = {
  activeGenre: ALL_GENRES,
  movies: [],
  moviesByGenre: [],
  promo: {},
  shownMovies: 0,
};

export const movies = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIES_BY_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });
    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {
        shownMovies: action.payload,
      });
    case ActionType.GET_ALL_MOVIES:
      return extend(state, {
        movies: action.payload,
      });
    case ActionType.GET_PROMO_MOVIE:
      return extend(state, {
        promo: action.payload,
      });
  }

  return state;
};
