import React from "react";
import renderer from "react-test-renderer";
import {Route, BrowserRouter} from "react-router-dom";

import mockMovies from "../../mocks/movies";

import withMoviesList from "../../hocs/with-movies-list/with-movies-list";

import MoviesList from "./movies-list";

const MoviesListWrapped = withMoviesList(MoviesList);

describe(`MoviesList snapshot testing`, () => {
  const moviesListComponent = renderer.create(
      <BrowserRouter>
        <Route>
          <MoviesListWrapped
            movies={mockMovies}
            shownMovies={8}
          />
        </Route>
      </BrowserRouter>
  );

  it(`renders component correctly`, () => {
    expect(moviesListComponent.toJSON()).toMatchSnapshot();
  });
});
