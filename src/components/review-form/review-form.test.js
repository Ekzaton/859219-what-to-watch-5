import React from "react";
import renderer from "react-test-renderer";

import {ReviewForm} from "./review-form";

describe(`ReviewForm snapshot testing`, () => {
  it(`renders component correctly`, () => {
    const reviewFormComponent = renderer.create(
        <ReviewForm
          id={1}
          ratingValue={3}
          textValue={`Good movie`}
          isValid
          onSubmit={() => {}}
          onRatingChange={() => {}}
          onTextChange={() => {}}
          isDataSending
          isSendingError
        />
    );

    expect(reviewFormComponent.toJSON()).toMatchSnapshot();
  });
});
