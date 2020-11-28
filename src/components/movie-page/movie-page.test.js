import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Route, BrowserRouter} from "react-router-dom";

import {AuthorizationStatus} from "../../const";

import mockMovies from "../../mocks/movies";
import mockPromo from "../../mocks/promo";

import MoviePage from "./movie-page";

describe(`MoviePage snapshot testing`, () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    APP_DATA: {
      movies: mockMovies,
      activeMovie: mockPromo,
    },
    APP_USER: {
      status: AuthorizationStatus.NO_AUTH,
    }
  });

  const moviePageComponent = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Route>
            <MoviePage/>
          </Route>
        </BrowserRouter>
      </Provider>
  );

  it(`renders component correctly`, () => {
    expect(moviePageComponent.toJSON()).toMatchSnapshot();
  });
});
