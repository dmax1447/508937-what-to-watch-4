import React from "react";
import renderer from "react-test-renderer";
import Main from "./Main.jsx";

const promo = {
  title: `Birds`,
  genre: `horror`,
  year: `1963`,
};

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

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
