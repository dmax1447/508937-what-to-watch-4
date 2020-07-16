import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from './app.jsx';

import promo from '../../mocks/tests/promo.js';
import films from '../../mocks/tests/films.js';

import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "../../reducer.js";

const store = createStore(reducer);

Enzyme.configure({
  adapter: new Adapter(),
});

it(`State key "movieId" should be updated with movie id when user click on movie card`, () => {

  const app = mount(
      <Provider store={store}>
        <App films={films} promo={promo} />
      </Provider>
  );

  const cards = app.find(`.small-movie-card`);

  films.forEach((item, i) => {
    const card = cards.at(i);
    card.simulate(`click`);
    expect(app.state(`movieId`)).toEqual(item.id);
  });
});
