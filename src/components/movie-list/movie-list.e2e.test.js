import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieList from './movie-list.jsx';

import films from '../../mocks/tests/films.js';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`when mouse hover over movie card currenFilm in MovieList state should be updated`, () => {
  const onCardTitleClick = jest.fn();

  const movieList = mount(
      <MovieList films={films} onCardTitleClick={onCardTitleClick} />
  );

  films.forEach((item, i) => {
    const card = movieList.find(`.small-movie-card`).at(i);
    card.simulate(`mouseEnter`);
    expect(movieList.state(`currentMovie`)).toBe(item.title);
  });
});
