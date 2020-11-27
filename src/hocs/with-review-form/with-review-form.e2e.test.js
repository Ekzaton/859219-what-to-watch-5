import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withReviewForm from "./with-review-form";

describe(`withReviewForm e2e testing`, () => {
  configure({adapter: new Adapter()});

  it(`passes rating value`, () => {
    const MockComponent = () => <div/>;
    const MockComponentWrapped = withReviewForm(MockComponent);

    const withReviewFormComponent = shallow(
        <MockComponentWrapped/>
    );

    expect(withReviewFormComponent.state().ratingValue).toEqual(1);
  });

  it(`passes text value`, () => {
    const MockComponent = () => <div/>;
    const MockComponentWrapped = withReviewForm(MockComponent);

    const withReviewFormComponent = shallow(
        <MockComponentWrapped/>
    );

    expect(withReviewFormComponent.state().textValue).toEqual(``);
  });
});
