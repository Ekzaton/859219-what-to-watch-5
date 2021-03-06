import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Route, BrowserRouter} from "react-router-dom";

import {AuthorizationStatus, DEFAULT_GENRE, DEFAULT_MOVIES_COUNT} from "../../const";

import mockMovies from "../../mocks/movies";
import mockPromo from "../../mocks/promo";

import MainPage from "./main-page";

describe(`MainPage snapshot testing`, () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    APP_DATA: {
      movies: mockMovies,
      promoMovie: mockPromo,
    },
    APP_STATE: {
      activeGenre: DEFAULT_GENRE,
      shownMoviesCount: DEFAULT_MOVIES_COUNT,
    },
    APP_USER: {
      status: AuthorizationStatus.NO_AUTH,
    }
  });

  const mainPageComponent = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Route>
            <MainPage/>
          </Route>
        </BrowserRouter>
      </Provider>
  );

  it(`renders component correctly`, () => {
    expect(mainPageComponent.toJSON()).toMatchSnapshot();
  });
});
