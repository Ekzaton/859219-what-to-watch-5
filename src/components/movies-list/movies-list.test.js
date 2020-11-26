import React from "react";
import renderer from "react-test-renderer";
import {Route, BrowserRouter} from "react-router-dom";

import mockMovies from "../../mocks/movies";

import MoviesList from "./movies-list";

describe(`MoviesList snapshot testing`, () => {
  const moviesListComponent = renderer.create(
      <BrowserRouter>
        <Route>
          <MoviesList
            movies={mockMovies}
            shownMovies={8}
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
