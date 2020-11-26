import React from "react";
import renderer from "react-test-renderer";

import {ShowMoreButton} from "./show-more-button";

describe(`ShowMoreButton snapshot testing`, () => {
  it(`renders component correctly`, () => {
    const showMoreButtonComponent = renderer.create(
        <ShowMoreButton
          shownMovies={8}
          onShowMoreClick={() => {}}
        />
    );

    expect(showMoreButtonComponent.toJSON()).toMatchSnapshot();
  });
});
