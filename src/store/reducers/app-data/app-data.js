import {ActionType} from "../../actions";

import {extend} from "../../../utils";

const initialState = {
  movies: [],
  favoriteMovies: [],
  promoMovie: {},
  activeMovie: {},
  movieReviews: [],
  isDataSending: false,
  isSendingError: false,
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
        activeMovie: action.payload,
      });
    case ActionType.GET_MOVIE:
      return extend(state, {
        activeMovie: action.payload,
      });
    case ActionType.GET_MOVIE_REVIEWS:
      return extend(state, {
        movieReviews: action.payload,
      });
    case ActionType.SET_DATA_SENDING:
      return extend(state, {
        isDataSending: action.payload,
      });
    case ActionType.SET_SENDING_ERROR:
      return extend(state, {
        isSendingError: action.payload,
      });
  }

  return state;
};
