import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {ALL_GENRES} from "../../const";

import {GenresList} from "./genres-list";

describe(`GenresList e2e testing`, () => {
  configure({adapter: new Adapter()});

  it(`execute callback on genre click`, () => {
    const genres = [ALL_GENRES, `Action`, `Crime`, `Drama`];
    const onGenreClick = jest.fn();

    const genresListComponent = shallow(
        <GenresList
          genres={genres}
          activeGenre={ALL_GENRES}
          onGenreClick={onGenreClick}
        />
    );

    const genresLink1 = genresListComponent.find(`.catalog__genres-link`).at(0);
    const genresLink2 = genresListComponent.find(`.catalog__genres-link`).at(1);
    const genresLink3 = genresListComponent.find(`.catalog__genres-link`).at(2);
    const genresLink4 = genresListComponent.find(`.catalog__genres-link`).at(3);

    genresLink1.simulate(`click`, {preventDefault() {}});
    genresLink2.simulate(`click`, {preventDefault() {}});
    genresLink3.simulate(`click`, {preventDefault() {}});
    genresLink4.simulate(`click`, {preventDefault() {}});

    expect(onGenreClick).toHaveBeenCalledTimes(4);
  });
});
