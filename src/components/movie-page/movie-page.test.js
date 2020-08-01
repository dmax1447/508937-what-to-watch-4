import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

import MoviePage from "./movie-page.jsx";

import movieMockFull from '../../mocks/tests/movie-full.js';

it(`Movie page should render correctly`, () => {
  const page = renderer
        .create(
            <BrowserRouter>
              <MoviePage film={movieMockFull} authState={`NO_AUTH`} />
            </BrowserRouter>
        ).toJSON();

  expect(page).toMatchSnapshot();
});
