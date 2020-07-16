import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from './main.jsx';

import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "../../reducer.js";

import promo from '../../mocks/tests/promo.js';
const store = createStore(reducer);
import films from '../../mocks/tests/films.js';


const mockgenres = [...new Set(films.map((item) => item.genre))];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`when film title clicked callback must be called`, () => {
  const onTitleClick = jest.fn();

  const main = mount(
      <Provider store={store}>
        <Main promo={promo} films={films} onCardTitleClick={onTitleClick} genres={mockgenres} />
      </Provider>
  );

  const titleLinks = main.find(`.small-movie-card__link`);
  const titleLinksCount = titleLinks.length;

  titleLinks.forEach((item) => {
    item.simulate(`click`);
  });

  expect(onTitleClick).toHaveBeenCalledTimes(titleLinksCount);
});
