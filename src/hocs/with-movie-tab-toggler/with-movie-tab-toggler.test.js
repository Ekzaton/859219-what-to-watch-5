import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";

import withMovieTabToggler from "./with-movie-tab-toggler";

describe(`withMovieTabToggler snapshot testing`, () => {
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

  const MockComponentWrapped = withMovieTabToggler(MockComponent);

  it(`renders component correctly`, () => {
    const withMovieTabTogglerComponent = renderer.create(
        <MockComponentWrapped>
          <React.Fragment/>
        </MockComponentWrapped>
    );

    expect(withMovieTabTogglerComponent.toJSON()).toMatchSnapshot();
  });
});
