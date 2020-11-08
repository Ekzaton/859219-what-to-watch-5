import {ActionType} from "./action";
import {extend} from "../utils";

import movies from "./mocks/movies";

const initialState = {
  activeGenre: `All genres`,
  moviesList: movies,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_MOVIES_GENRE:
      return extend(state, {
        activeGenre: action.payload,
        moviesList: movies,
      });
  }

  return state;
};
