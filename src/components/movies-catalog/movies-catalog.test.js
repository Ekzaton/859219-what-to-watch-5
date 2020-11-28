import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Route, BrowserRouter} from "react-router-dom";

import {DEFAULT_GENRE, DEFAULT_MOVIES_COUNT} from "../../const";

import mockMovies from "../../mocks/movies";

import MoviesCatalog from "./movies-catalog";

describe(`MoviesCatalog snapshot testing`, () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    APP_DATA: {
      movies: mockMovies,
    },
    APP_STATE: {
      activeGenre: DEFAULT_GENRE,
      shownMoviesCount: DEFAULT_MOVIES_COUNT,
    }
  });

  const moviesCatalogComponent = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Route>
            <MoviesCatalog/>
          </Route>
        </BrowserRouter>
      </Provider>
  );

  it(`renders component correctly`, () => {
    expect(moviesCatalogComponent.toJSON()).toMatchSnapshot();
  });
});
