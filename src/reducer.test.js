import {reducer, ActionCreator} from './reducer.js';

describe(`check reducer`, () => {
  const initialState = {
    genre: `All_genres`,
  };

  it(`initial state`, () => {
    const store = reducer();
    expect(store).toEqual(initialState);
  });

  it(`action SET_ALL_GENRES`, () => {
    const store = reducer(initialState, ActionCreator.setAllGeneres());
    expect(store.genre).toBe(`All_genres`);
  });

  it(`action SET_GENRE`, () => {
    const genreName = `Drama`;
    const store = reducer(initialState, ActionCreator.setGenre(genreName));
    expect(store.genre).toBe(genreName);
  });

});
