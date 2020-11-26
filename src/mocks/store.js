import configureStore from 'redux-mock-store';

import {AuthorizationStatus, ALL_GENRES} from "../const";

import moviesMock from './movies.js';
import promoMock from './promo.js';
import reviewsMock from './reviews.js';

const NameSpace = {
  APP_DATA: `APP_DATA`,
  APP_STATE: `APP_STATE`,
  APP_USER: `APP_USER`,
};

const mockStore = configureStore();

export const storeOnline = mockStore({
  [NameSpace.APP_DATA]: {
    movies: moviesMock,
    favoriteMovies: moviesMock,
    promoMovie: promoMock,
    activeMovie: promoMock,
    movieReviews: reviewsMock,
  },
  [NameSpace.APP_STATE]: {
    activeGenre: ALL_GENRES,
    moviesByGenre: moviesMock,
    shownMovies: 0,
  },
  [NameSpace.APP_USER]: {
    status: AuthorizationStatus.AUTH,
  }
});

export const storeOffline = mockStore({
  [NameSpace.APP_DATA]: {
    movies: [],
    favoriteMovies: [],
    promoMovie: {},
    activeMovie: {},
    movieReviews: [],
  },
  [NameSpace.APP_STATE]: {
    activeGenre: ALL_GENRES,
    moviesByGenre: [],
    shownMovies: 0,
  },
  [NameSpace.APP_USER]: {
    status: AuthorizationStatus.NO_AUTH,
  }
});
