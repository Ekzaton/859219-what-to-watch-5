import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {ALL_GENRES} from "../../const";

import mockMovies from "../../mocks/movies";

import GenresList from "./genres-list";

describe(`GenresList snapshot testing`, () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    APP_DATA: {
      movies: mockMovies,
    },
    APP_STATE: {
      activeGenre: ALL_GENRES,
    }
  });

  const genresListComponent = renderer.create(
      <Provider store={store}>
        <GenresList
          onGenreClick={() => {}}
        />
      </Provider>
  );

  it(`renders component correctly`, () => {
    expect(genresListComponent.toJSON()).toMatchSnapshot();
  });
});
