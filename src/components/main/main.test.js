import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

import promo from '../../mocks/tests/promo.js';
import films from '../../mocks/tests/films.js';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "../../reducer.js";

const store = createStore(reducer);

const onCardTitleClick = (evt) => {
  evt.preventDefault();
};

const genres = [...new Set(films.map((item) => item.genre))];

it(`<Main /> should render correctly`, () => {
  const main = renderer
    .create(
        <Provider store={store}>
          <Main
            promo={promo}
            films={films}
            onCardTitleClick={onCardTitleClick}
            genres={genres}
          />
        </Provider>
    ).toJSON();

  expect(main).toMatchSnapshot();
});
