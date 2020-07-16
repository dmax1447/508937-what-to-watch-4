import React from "react";
import renderer from "react-test-renderer";
import {GenreList} from "./genre-list.jsx";

import films from '../../mocks/tests/films.js';

const genres = [...new Set(films.map((item) => item.genre))];
const genre = `All_genres`;

it(`<GenreList /> should render correctly`, () => {
  const _onGenreClick = jest.fn();
  const _onAllGenreClick = jest.fn();

  const genreList = renderer
    .create(<GenreList genres={genres} genre={genre} onGenreClick={_onGenreClick} onAllGenreClick={_onAllGenreClick} />)
    .toJSON();

  expect(genreList).toMatchSnapshot();
});
