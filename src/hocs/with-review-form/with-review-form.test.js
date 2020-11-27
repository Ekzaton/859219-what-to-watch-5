import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";

import withReviewForm from "./with-review-form";

describe(`withReviewForm snapshot testing`, () => {
  const MockComponent = (props) => {
    const {children} = props;

    return (
      <div>
        {children}
      </div>
    );
  };

  MockComponent.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
  };

  const MockComponentWrapped = withReviewForm(MockComponent);

  it(`renders component correctly`, () => {

    const withReviewFormComponent = renderer.create(
        <MockComponentWrapped>
          <React.Fragment/>
        </MockComponentWrapped>
    );

    expect(withReviewFormComponent.toJSON()).toMatchSnapshot();
  });
});
