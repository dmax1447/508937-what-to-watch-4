import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./MovieCard.jsx";

const movieMock = `Terminator`;

const onCardTitleClick = (evt) => {
  evt.preventDefault();
};

it(`<MovieCard /> should render card with title "Terminator"`, () => {
  const card = renderer
        .create(<MovieCard
          movie={movieMock}
          onCardTitleClick={onCardTitleClick}
        />)
        .toJSON();

  expect(card).toMatchSnapshot();
});
