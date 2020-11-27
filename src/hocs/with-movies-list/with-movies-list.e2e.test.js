import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withMoviesList from "./with-movies-list";

describe(`withMoviesList e2e testing`, () => {
  configure({adapter: new Adapter()});

  it(`passes active movie id`, () => {
    const MockComponent = () => <div/>;
    const MockComponentWrapped = withMoviesList(MockComponent);

    const withMoviesListComponent = shallow(
        <MockComponentWrapped/>
    );

    expect(withMoviesListComponent.state().activeMovieId).toEqual(-1);
  });
});
