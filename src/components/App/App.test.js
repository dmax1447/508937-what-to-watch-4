import React from "react";
import renderer from "react-test-renderer";
import App from "./App.jsx";

const promo = {
  title: `Birds`,
  genre: `horror`,
  year: `1963`,
};

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

const onCardTitleClick = (evt) => {
  evt.preventDefault();
};

it(`<App /> should render Main with promo and films list`, () => {
  const main = renderer
    .create(<App
      promo={promo}
      films={films}
      onCardTitleClick={onCardTitleClick}
    />)
    .toJSON();

  expect(main).toMatchSnapshot();
});
