import {extend} from "../../utils.js";

const initialState = {
  genre: `All_genres`,
  movieId: null,
};

const ActionType = {
  SET_GENRE: `SET_GENGE`,
  SET_ALL_GENERES: `SET_ALL_GENERES`,
  SET_MOVIE_ID: `SET_MOVIE_ID`,
};

const ActionCreator = {
  setGenre: (genre) => ({
    type: ActionType.SET_GENRE,
    payload: genre,
  }),
  setAllGeneres: () => ({
    type: ActionType.SET_ALL_GENERES,
    payload: null,
  }),
  setMovieId: (id) => ({
    type: ActionType.SET_MOVIE_ID,
    payload: id,
  })
};

const reducer = (state = initialState, action) => {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case ActionType.SET_GENRE:
      return extend(state, {
        genre: action.payload,
      });

    case ActionType.SET_ALL_GENERES:
      return extend(state, {
        genre: `All_genres`,
      });

    case ActionType.SET_MOVIE_ID:
      return extend(state, {
        movieId: action.payload
      });
  }

  return state;
};

const Operation = {
  postComment: (payload, onSuccess, onError) => (dispatch, getState, api) => {
    return api.post(`/comments/${payload.id}`, {
      rating: payload.rating,
      comment: payload.comment,
    })
      .then(() => {
        onSuccess();
      })
      .catch(() => {
        onError();
      });
  },
};

export {reducer, ActionType, ActionCreator, Operation};
