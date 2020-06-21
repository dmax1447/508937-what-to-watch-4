import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";

import movieMockFull from '../../mocks/tests/movie-full.js';

it(`Movie page should render correctly`, () => {
  const card = renderer
        .create(
            <MoviePage film={movieMockFull} />)
        .toJSON();

  expect(card).toMatchSnapshot();
});
