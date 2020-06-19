import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

import promo from '../../mocks/tests/promo.js';
import films from '../../mocks/tests/films.js';

const onCardTitleClick = (evt) => {
  evt.preventDefault();
};

it(`<Main /> should render promo and films list`, () => {
  const main = renderer
    .create(<Main
      promo={promo}
      films={films}
      onCardTitleClick={onCardTitleClick}
    />)
        .toJSON();

  expect(main).toMatchSnapshot();
});
