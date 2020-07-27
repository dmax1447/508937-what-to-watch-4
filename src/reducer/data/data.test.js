import {reducer, ActionCreator} from './data.js';
import filmsMock from '../../mocks/tests/films.js';

describe(`check reducer DATA`, () => {
  const initialState = {
    films: [],
  };

  it(`initial state`, () => {
    const store = reducer();
    expect(store).toEqual(initialState);
  });

  it(`action SET_FILMS`, () => {
    const store = reducer(initialState, ActionCreator.setFilms(filmsMock));
    expect(store.films).toEqual(filmsMock);
  });
});
