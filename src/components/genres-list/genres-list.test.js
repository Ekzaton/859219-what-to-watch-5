import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import mockMovies from "../../mocks/movies";

import GenresList from "./genres-list";

describe(`GenresList component`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let genresListComponent = null;

  store = mockStore({
    APP_DATA: {
      movies: mockMovies,
    },
    APP_STATE: {
      activeGenre: `Action`,
    }
  });

  genresListComponent = renderer.create(
      <Provider store={store}>
        <GenresList
          onGenreClick={() => {}}
        />
      </Provider>
  );

  it(`Renders store-connected component correctly`, () => {
    expect(genresListComponent.toJSON()).toMatchSnapshot();
  });
});
