import {reducer, ActionCreator, Operation as OperationCreator} from './app.js';
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
const api = createAPI(() => { });


describe(`check reducer APP`, () => {
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

  it(`operation POST_COMMENT should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatchMock = jest.fn();
    const successMockCb = jest.fn();
    const failMockCb = jest.fn();
    const payload = {
      id: 1,
      comment: `test comment`,
      rating: `test rating`,
    };
    const operationPostComment = OperationCreator.postComment(payload, successMockCb, failMockCb);

    apiMock
      .onPost(`/comments/1`)
      .reply(200);

    return operationPostComment(dispatchMock, () => {}, api)
      .then(() => {
        expect(successMockCb).toHaveBeenCalledTimes(1);
      });
  });

});
