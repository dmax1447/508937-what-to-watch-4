import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {Provider} from "react-redux";
import promo from '../../mocks/tests/promo.js';
import filmsMock from '../../mocks/tests/films.js';
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
const store = mockStore({
  APP: {
    genre: `All_genres`,
  },
  DATA: {
    films: filmsMock
  }
});


const onCardTitleClick = (evt) => {
  evt.preventDefault();
};

it(`<App /> should render correctly`, () => {
  const app = renderer
    .create(
        <Provider store={store}>
          <App
            promo={promo}
            onCardTitleClick={onCardTitleClick}
          />
        </Provider>
    ).toJSON();

  expect(app).toMatchSnapshot();
});
