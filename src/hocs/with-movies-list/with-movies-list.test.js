import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";

import withMoviesList from "./with-movies-list";

describe(`withMoviesList snapshot testing`, () => {
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

  const MockComponentWrapped = withMoviesList(MockComponent);

  it(`renders component correctly`, () => {
    const withMoviesListComponent = renderer.create(
        <MockComponentWrapped>
          <React.Fragment/>
        </MockComponentWrapped>
    );

    expect(withMoviesListComponent.toJSON()).toMatchSnapshot();
  });
});
