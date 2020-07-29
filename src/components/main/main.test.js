import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import promo from '../../mocks/tests/promo.js';
import filmsMock from '../../mocks/tests/films.js';


const onCardTitleClick = (evt) => {
  evt.preventDefault();
};


const mockStore = configureStore([]);
const store = mockStore({
  APP: {
    genre: `All_genres`,
  },
  DATA: {
    films: filmsMock
  }
});

const genres = [...new Set(filmsMock.map((item) => item.genre))];

it(`<Main /> should render correctly`, () => {
  const main = renderer
    .create(
        <Provider store={store}>
          <Main
            promo={promo}
            films={filmsMock}
            onCardTitleClick={onCardTitleClick}
            genres={genres}
            authState="AUTH"
          />
        </Provider>
    ).toJSON();

  expect(main).toMatchSnapshot();
});
