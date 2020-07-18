import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

import promo from '../../mocks/tests/promo.js';
import films from '../../mocks/tests/films.js';

import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "../../reducer.js";

const store = createStore(reducer);

const onCardTitleClick = (evt) => {
  evt.preventDefault();
};

it(`<App /> should render correctly`, () => {
  const app = renderer
    .create(
        <Provider store={store}>
          <App
            promo={promo}
            films={films}
            onCardTitleClick={onCardTitleClick}
          />
        </Provider>
    ).toJSON();

  expect(app).toMatchSnapshot();
});
