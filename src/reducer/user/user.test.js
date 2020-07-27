import {reducer, ActionCreator} from './user.js';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

describe(`check reducer USER`, () => {


  const initialState = {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  };

  it(`initial state`, () => {
    const store = reducer();
    expect(store).toEqual(initialState);
  });

  it(`action REQUIRED_AUTHORIZATION`, () => {
    const status = AuthorizationStatus.AUTH;
    const store = reducer(initialState, ActionCreator.requireAuthorization(status));
    expect(store.authorizationStatus).toEqual(status);
  });
});
