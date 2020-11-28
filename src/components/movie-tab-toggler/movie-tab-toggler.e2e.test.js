import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {Tab} from "../../const";

import mockPromo from "../../mocks/promo";

import MovieTabToggler from "./movie-tab-toggler";

describe(`MovieTabToggler e2e testing`, () => {
  configure({adapter: new Adapter()});

  it(`execute callback on tab click`, () => {
    const onTabClick = jest.fn();

    const movieTabTogglerComponent = shallow(
        <MovieTabToggler
          movie={mockPromo}
          activeTab={Tab.OVERVIEW}
          onTabClick={onTabClick}
        />
    );

    const navLink1 = movieTabTogglerComponent.find(`.movie-nav__link`).at(0);
    const navLink2 = movieTabTogglerComponent.find(`.movie-nav__link`).at(1);
    const navLink3 = movieTabTogglerComponent.find(`.movie-nav__link`).at(2);

    navLink1.simulate(`click`, {preventDefault() {}});
    navLink2.simulate(`click`, {preventDefault() {}});
    navLink3.simulate(`click`, {preventDefault() {}});

    expect(onTabClick).toHaveBeenCalledTimes(3);
  });
});
