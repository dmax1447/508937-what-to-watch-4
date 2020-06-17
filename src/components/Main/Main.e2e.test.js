import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from './main.jsx';

import promo from '../../mocks/tests/promo.js';
import films from '../../mocks/tests/films.js';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should film title be pressed`, () => {
  const onTitleClick = jest.fn();

  const main = mount(
      <Main promo={promo} films={films} onCardTitleClick={onTitleClick} />
  );

  const titleLinks = main.find(`.small-movie-card__link`);
  const titleLinksCount = titleLinks.length;

  titleLinks.forEach((item) => {
    item.simulate(`click`);
  });

  expect(onTitleClick).toHaveBeenCalledTimes(titleLinksCount);
});
