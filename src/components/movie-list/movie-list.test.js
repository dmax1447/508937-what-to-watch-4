import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list.jsx";

import films from '../../mocks/tests/films.js';
import {Provider} from "react-redux";

import configureStore from "redux-mock-store";
const mockStore = configureStore([]);
const store = mockStore({});

const onCardTitleClick = (evt) => {
  evt.preventDefault();
};

describe(`check MovieList`, () => {
  it(`should render 8 cards`, () => {
    const card = renderer
          .create(
              <Provider store={store}>
                <MovieList films={films} onCardTitleClick={onCardTitleClick} />
              </Provider>
          )
          .toJSON();

    expect(card).toMatchSnapshot();
  });
});
