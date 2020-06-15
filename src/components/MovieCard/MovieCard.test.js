import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./MovieCard.jsx";

const movieMock = `Terminator`;

it(`<MovieCard /> should render card with title "Terminator"`, () => {
  const card = renderer
        .create(<MovieCard
          movie={movieMock}
        />)
        .toJSON();

  expect(card).toMatchSnapshot();
});
