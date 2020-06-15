import React from "react";
import renderer from "react-test-renderer";
import Main from "./Main.jsx";

const promo = {
  title: `Birds`,
  genre: `horror`,
  year: `1963`,
};

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`<Main /> should render promo and films list`, () => {
  const main = renderer
    .create(<Main
      promo={promo}
      films={films}
    />)
        .toJSON();

  expect(main).toMatchSnapshot();
});
