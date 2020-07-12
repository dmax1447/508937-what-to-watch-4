import {extend} from "./utils.js";

const initialState = {
  genre: `All_genres`,
};

const ActionType = {
  SET_GENRE: `SET_GENGE`,
  SET_ALL_GENERES: `SET_ALL_GENERES`,
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
};

const genres = [
  `Drama`,
  `Adventure`,
  `Bio`,
  `Mystery`,
  `Horror`,
  `Comedy`,
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return extend(state, {
        genre: action.payload,
      });

    case ActionType.SET_ALL_GENERES:
      return extend(state, {
        genre: `All_genres`,
      });
  }

  return state;
};


export {reducer, ActionType, ActionCreator, genres};
