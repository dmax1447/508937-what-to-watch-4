import {reducer, ActionCreator} from './app.js';

describe(`check reducer`, () => {
  const initialState = {
    genre: `All_genres`,
    movieId: null
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
