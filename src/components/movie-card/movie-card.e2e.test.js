import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MovieCard} from './movie-card.jsx';

import films from '../../mocks/tests/films.js';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`when mouse hover over movie card callback should be called with movie card data`, () => {
  const cardTitleClickHandler = jest.fn();
  const cardHoverHandler = jest.fn();

  const movie = films[0];
  const movieCard = shallow(
      <MovieCard movie={movie} onCardTitleClick={cardTitleClickHandler} onMouseEnter={cardHoverHandler} />
  );

  movieCard.simulate(`mouseEnter`);
  expect(cardHoverHandler.mock.calls[0][0]).toBe(movie.id);
});
