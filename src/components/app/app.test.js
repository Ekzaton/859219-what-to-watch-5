import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {AuthorizationStatus, ALL_GENRES} from "../../const";

import mockMovies from "../../mocks/movies";
import mockPromo from "../../mocks/promo";

import App from "./app";

describe(`App snapshot testing`, () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    APP_DATA: {
      movies: mockMovies,
      promoMovie: mockPromo,
    },
    APP_STATE: {
      activeGenre: ALL_GENRES,
    },
    APP_USER: {
      status: AuthorizationStatus.NO_AUTH,
    }
  });

  const appComponent = renderer.create(
      <Provider store={store}>
        <App/>
      </Provider>
  );

  it(`renders component correctly`, () => {
    expect(appComponent.toJSON()).toMatchSnapshot();
  });
});
