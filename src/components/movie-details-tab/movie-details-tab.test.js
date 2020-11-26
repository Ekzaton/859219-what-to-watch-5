import React from "react";
import renderer from "react-test-renderer";

import mockPromo from "../../mocks/promo";

import MovieDetailsTab from "./movie-details-tab";

describe(`MovieDetailsTab snapshot testing`, () => {
  const movieDetailsTabComponent = renderer.create(
      <MovieDetailsTab
        movie={mockPromo}
      />
  );

  it(`renders component correctly`, () => {
    expect(movieDetailsTabComponent.toJSON()).toMatchSnapshot();
  });
});
