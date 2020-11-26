import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Route, BrowserRouter} from "react-router-dom";

import mockMovies from "../../mocks/movies";

import MoviesCatalog from "./movies-catalog";

describe(`MoviesCatalog snapshot testing`, () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    APP_DATA: {
      movies: mockMovies,
    },
    APP_STATE: {
      activeGenre: `Action`,
      moviesByGenre: mockMovies,
      shownMovies: 0,
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

  it(`renders store-connected component correctly`, () => {
    expect(moviesCatalogComponent.toJSON()).toMatchSnapshot();
  });
});
