import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list.jsx";

import films from '../../mocks/tests/films.js';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "../../reducer.js";

const store = createStore(reducer);

const onCardTitleClick = (evt) => {
  evt.preventDefault();
};

it(`<MovieList /> should render 8 cards`, () => {
  const card = renderer
        .create(
            <Provider store={store}>
              <MovieList films={films} onCardTitleClick={onCardTitleClick} />
            </Provider>
        )
        .toJSON();

  expect(card).toMatchSnapshot();
});
