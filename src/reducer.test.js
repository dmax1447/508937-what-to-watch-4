import {reducer, ActionCreator} from './reducer.js';

it(`check initial state`, () => {
  const initialState = {
    genre: `All_genres`,
  };

  const storeUpdated = reducer(null, ActionCreator.setAllGeneres());
  expect(storeUpdated).toEqual(initialState);
});
