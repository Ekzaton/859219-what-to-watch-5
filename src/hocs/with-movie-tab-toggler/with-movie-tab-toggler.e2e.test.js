import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {Tab} from "../../const";

import withMovieTabToggler from "./with-movie-tab-toggler";

describe(`withMovieTabToggler e2e testing`, () => {
  configure({adapter: new Adapter()});

  it(`passes active tab`, () => {
    const MockComponent = () => <div/>;
    const MockComponentWrapped = withMovieTabToggler(MockComponent);

    const withMovieTabTogglerComponent = shallow(
        <MockComponentWrapped/>
    );

    expect(withMovieTabTogglerComponent.state().activeTab).toEqual(Tab.OVERVIEW);
  });
});
