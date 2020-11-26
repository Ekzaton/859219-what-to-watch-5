import React from "react";
import renderer from "react-test-renderer";

import mockPromo from "../../mocks/promo";

import MovieOverviewTab from "./movie-overview-tab";

describe(`MovieOverviewTab snapshot testing`, () => {
  const movieOverviewTabComponent = renderer.create(
      <MovieOverviewTab
        movie={mockPromo}
      />
  );

  it(`renders component correctly`, () => {
    expect(movieOverviewTabComponent.toJSON()).toMatchSnapshot();
  });
});
