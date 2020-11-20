import {ActionType} from "../../action";

import {extend} from "../../../utils";

const initialState = {
  reviews: [],
};

export const reviews = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIE_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
  }

  return state;
};
