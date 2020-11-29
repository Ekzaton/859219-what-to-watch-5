import {ActionType} from "../../actions";

import {extend} from "../../../utils";

import mockMovies from "../../../mocks/movies";
import mockPromo from "../../../mocks/promo";
import mockReviews from "../../../mocks/reviews";

import {appData} from "./app-data";

const mockInitialState = {
  movies: [],
  favoriteMovies: [],
  promoMovie: {},
  activeMovie: {},
  movieReviews: [],
  isDataSending: false,
  isSendingError: false,
};

describe(`appData reducer testing (without payload)`, () => {
  it(`returns initial state`, () => {
    expect(appData(void 0, {})).toEqual(mockInitialState);
  });
});

describe(`appData reducer testing (with payload)`, () => {
  it(`returns all movies`, () => {
    expect(appData(mockInitialState, {
      type: ActionType.GET_ALL_MOVIES,
      payload: mockMovies,
    })).toEqual(extend(mockInitialState, {
      movies: mockMovies,
    }));
  });

  it(`returns favorite movies`, () => {
    expect(appData(mockInitialState, {
      type: ActionType.GET_FAVORITE_MOVIES,
      payload: mockMovies,
    })).toEqual(extend(mockInitialState, {
      favoriteMovies: mockMovies,
    }));
  });

  it(`returns promo movie`, () => {
    expect(appData(mockInitialState, {
      type: ActionType.GET_PROMO_MOVIE,
      payload: mockPromo,
    })).toEqual(extend(mockInitialState, {
      promoMovie: mockPromo,
      activeMovie: mockPromo,
    }));
  });

  it(`returns movie`, () => {
    expect(appData(mockInitialState, {
      type: ActionType.GET_MOVIE,
      payload: mockPromo,
    })).toEqual(extend(mockInitialState, {
      activeMovie: mockPromo,
    }));
  });

  it(`returns promo movie`, () => {
    expect(appData(mockInitialState, {
      type: ActionType.GET_MOVIE_REVIEWS,
      payload: mockReviews,
    })).toEqual(extend(mockInitialState, {
      movieReviews: mockReviews,
    }));
  });
});
