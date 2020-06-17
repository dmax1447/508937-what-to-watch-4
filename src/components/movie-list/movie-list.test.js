import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list.jsx";

import films from '../../mocks/tests/films.js';

const onCardTitleClick = (evt) => {
  evt.preventDefault();
};

it(`<MovieList /> should render 8 cards`, () => {
  const card = renderer
        .create(<MovieList films={films} onCardTitleClick={onCardTitleClick} />)
        .toJSON();

  expect(card).toMatchSnapshot();
});
