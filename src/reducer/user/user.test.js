import {reducer, ActionCreator, ActionType, Operation} from './user.js';
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";

const api = createAPI(() => { });

const userMock = {
  name: `mockName`,
  avatar: `mockAvatar`
};

const authDataMock = {
  login: `loginMock`,
  password: `passMock`
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

describe(`check reducer USER`, () => {


  const initialState = {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: null,
  };

  it(`initial state`, () => {
    const store = reducer();
    expect(store).toEqual(initialState);
  });

  it(`action REQUIRED_AUTHORIZATION set auth status`, () => {
    const status = AuthorizationStatus.AUTH;
    const store = reducer(initialState, ActionCreator.requireAuthorization(status));
    expect(store.authorizationStatus).toEqual(status);
  });

  it(`action SET_USER set user data`, () => {
    const store = reducer(initialState, ActionCreator.setUser(userMock));
    expect(store.user).toEqual(userMock);
  });

  it(`operation LOGIN shold make correct api call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatchMock = jest.fn();
    const operationLogin = Operation.login(authDataMock);

    apiMock
      .onPost(`/login`)
      .reply(200);

    return operationLogin(dispatchMock, () => { }, api)
      .then(() => {
        expect(dispatchMock).toHaveBeenCalledTimes(1);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: `AUTH`,
        });
      });
  });

  it(`operation CHECK_AUTH should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatchMock = jest.fn();
    const operationCheckAuth = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, userMock);

    return operationCheckAuth(dispatchMock, () => {}, api)
      .then(() => {
        expect(dispatchMock).toHaveBeenCalledTimes(2);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: `AUTH`,
        });
        expect(dispatchMock).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER,
          payload: userMock,
        });
      });
  });
});
