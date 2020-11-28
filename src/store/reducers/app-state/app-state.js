import {ActionType} from "../../actions";

import {DEFAULT_GENRE, DEFAULT_MOVIES_COUNT} from "../../../const";
import {extend} from "../../../utils";

const initialState = {
  activeGenre: DEFAULT_GENRE,
  shownMoviesCount: DEFAULT_MOVIES_COUNT,
};

export const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
        shownMoviesCount: initialState.shownMoviesCount,
      });
    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {
        shownMoviesCount: state.shownMoviesCount + action.payload,
      });
  }

  return state;
};
