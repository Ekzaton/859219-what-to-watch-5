import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {ReviewForm} from "./review-form";

describe(`ReviewForm e2e testing`, () => {
  configure({adapter: new Adapter()});

  it(`execute callback on submit`, () => {
    const handleSubmit = jest.fn();

    const reviewFormComponent = shallow(
        <ReviewForm
          id={1}
          ratingValue={3}
          textValue={`Good movie`}
          onSubmit={handleSubmit}
          onRatingChange={() => {}}
          onTextChange={() => {}}
        />
    );

    const addReviewForm = reviewFormComponent.find(`.add-review__form`);
    addReviewForm.simulate(`submit`, {preventDefault() {}});
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it(`execute callback on rating change`, () => {
    const onRatingChange = jest.fn();

    const reviewFormComponent = shallow(
        <ReviewForm
          id={1}
          ratingValue={3}
          textValue={`Good movie`}
          onSubmit={() => {}}
          onRatingChange={onRatingChange}
          onTextChange={() => {}}
        />
    );

    const ratingInput = reviewFormComponent.find(`.rating__input`).at(0);
    ratingInput.simulate(`change`, {target: {checked: true}});
    expect(onRatingChange).toHaveBeenCalledTimes(1);
  });

  it(`execute callback on text change`, () => {
    const onTextChange = jest.fn();

    const reviewFormComponent = shallow(
        <ReviewForm
          id={1}
          ratingValue={3}
          textValue={`Good movie`}
          onSubmit={() => {}}
          onRatingChange={() => {}}
          onTextChange={onTextChange}
        />
    );

    const addReviewTextarea = reviewFormComponent.find(`.add-review__textarea`);
    addReviewTextarea.simulate(`change`);
    expect(onTextChange).toHaveBeenCalledTimes(1);
  });
});
