import React from "react";
import renderer from "react-test-renderer";

import mockPromo from "../../mocks/promo";

import MoviesItemPreview from "./movies-item-preview";

describe(`MoviesItemPreview snapshot testing`, () => {
  const movieItemPreviewComponent = renderer.create(
      <MoviesItemPreview
        movie={mockPromo}
        isPlaying={false}
      />
  );

  it(`renders component correctly`, () => {
    expect(movieItemPreviewComponent.toJSON()).toMatchSnapshot();
  });
});
