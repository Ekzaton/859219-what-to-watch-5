import React from "react";
import renderer from "react-test-renderer";
import {Route, BrowserRouter} from "react-router-dom";

import {DEFAULT_MOVIES_COUNT} from "../../const";

import mockMovies from "../../mocks/movies";

import MoviesList from "./movies-list";

describe(`MoviesList snapshot testing`, () => {
  const moviesListComponent = renderer.create(
      <BrowserRouter>
        <Route>
          <MoviesList
            movies={mockMovies}
            shownMoviesCount={DEFAULT_MOVIES_COUNT}
            onMovieEnter={() => {}}
            onMovieLeave={() => {}}
            activeMovieId={1}
          />
        </Route>
      </BrowserRouter>
  );

  it(`renders component correctly`, () => {
    expect(moviesListComponent.toJSON()).toMatchSnapshot();
  });
});
