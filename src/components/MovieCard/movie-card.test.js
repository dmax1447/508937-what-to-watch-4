import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

import movieMock from '../../mocks/tests/movie.js';

const onCardTitleClick = (evt) => {
  evt.preventDefault();
};

const onMouseEnter = () => {};

it(`<MovieCard /> should render card Fantastic Beasts`, () => {
  const card = renderer
        .create(
            <MovieCard
              movie={movieMock}
              onCardTitleClick={onCardTitleClick}
              onMouseEnter={onMouseEnter}
            />)
        .toJSON();

  expect(card).toMatchSnapshot();
});
