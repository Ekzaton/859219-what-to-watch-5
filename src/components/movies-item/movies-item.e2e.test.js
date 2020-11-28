import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import mockPromo from "../../mocks/promo";

import MoviesItem from "./movies-item";

describe(`MoviesItem e2e testing`, () => {
  configure({adapter: new Adapter()});

  it(`execute callback on mouse enter`, () => {
    const onMovieEnter = jest.fn();

    const moviesItemComponent = shallow(
        <MoviesItem
          movie={mockPromo}
          onMovieEnter={onMovieEnter}
          onMovieLeave={() => {}}
          isPlaying={true}
        />
    );

    const moviesCard = moviesItemComponent.find(`.catalog__movies-card`);
    moviesCard.simulate(`mouseenter`);
    expect(onMovieEnter).toHaveBeenCalledTimes(1);
  });

  it(`execute callback on mouse leave`, () => {
    const onMovieLeave = jest.fn();

    const moviesItemComponent = shallow(
        <MoviesItem
          movie={mockPromo}
          onMovieEnter={() => {}}
          onMovieLeave={onMovieLeave}
          isPlaying={true}
        />
    );

    const moviesCard = moviesItemComponent.find(`.catalog__movies-card`);
    moviesCard.simulate(`mouseleave`);
    expect(onMovieLeave).toHaveBeenCalledTimes(1);
  });
});
