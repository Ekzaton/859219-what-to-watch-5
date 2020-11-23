import {ActionType} from "../../actions";

import {extend} from "../../../utils";

const initialState = {
  movies: [],
  favoriteMovies: [],
  promoMovie: {},
  reviews: [],
};

export const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_ALL_MOVIES:
      return extend(state, {
        movies: action.payload,
      });
    case ActionType.GET_FAVORITE_MOVIES:
      return extend(state, {
        favoriteMovies: action.payload,
      });
    case ActionType.GET_PROMO_MOVIE:
      return extend(state, {
        promoMovie: action.payload,
      });
    case ActionType.GET_MOVIE_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
  }

  return state;
};
