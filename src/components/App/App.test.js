import React from "react";
import renderer from "react-test-renderer";
import App from "./App.jsx";

import promo from '../../mocks/tests/promo.js';
import films from '../../mocks/tests/films.js';

const onCardTitleClick = (evt) => {
  evt.preventDefault();
};

it(`<App /> should render Main with promo and films list`, () => {
  const app = renderer
    .create(
        <App
          promo={promo}
          films={films}
          onCardTitleClick={onCardTitleClick}
        />)
    .toJSON();

  expect(app).toMatchSnapshot();
});
