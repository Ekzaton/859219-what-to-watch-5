import React from 'react';
import renderer from 'react-test-renderer';

import moviesMock from '../../mocks/movies.js';

import {ALL_GENRES} from "../../const";

import {GenresList} from './genres-list.jsx';

const getGenres = (movies) => {
  return [ALL_GENRES, ...new Set(movies.map((it) => it.genre))];
};

it(`Should render GenresList component correctly`, () => {
  const tree = renderer
    .create(
        <GenresList
          genres={getGenres(moviesMock)}
          activeGenre={ALL_GENRES}
          onGenreClick={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
