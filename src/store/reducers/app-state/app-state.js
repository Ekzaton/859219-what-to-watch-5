import {ActionType} from "../../actions";

import {ALL_GENRES} from "../../../const";
import {extend} from "../../../utils";

const initialState = {
  activeGenre: ALL_GENRES,
  shownMovies: 0,
};

export const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIES_BY_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });
    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {
        shownMovies: action.payload,
      });
  }

  return state;
};
