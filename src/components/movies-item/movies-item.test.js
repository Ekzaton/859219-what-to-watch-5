import React from "react";
import renderer from "react-test-renderer";
import {Route, BrowserRouter} from "react-router-dom";

import mockPromo from "../../mocks/promo";

import MoviesItem from "./movies-item";

describe(`MoviesItem snapshot testing`, () => {

  const movieItemComponent = renderer.create(
      <BrowserRouter>
        <Route>
          <MoviesItem
            movie={mockPromo}
            onMovieEnter={() => {}}
            onMovieLeave={() => {}}
            isPlaying={false}
          />
        </Route>
      </BrowserRouter>
  );

  it(`renders component correctly`, () => {
    expect(movieItemComponent.toJSON()).toMatchSnapshot();
  });
});
