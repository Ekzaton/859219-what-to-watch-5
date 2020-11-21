import {ActionType} from "../../action";

import {extend} from "../../../utils";

const initialState = {
  movies: [],
  promo: {},
  reviews: [],
};

export const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_ALL_MOVIES:
      return extend(state, {
        movies: action.payload,
      });
    case ActionType.GET_PROMO_MOVIE:
      return extend(state, {
        promo: action.payload,
      });
    case ActionType.GET_MOVIE_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
  }

  return state;
};
