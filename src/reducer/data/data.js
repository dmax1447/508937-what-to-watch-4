import {extend} from "../../utils.js";


const initialState = {
  films: [],
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
};

const ActionCreator = {
  loadQuestions: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
  }

  return state;
};


export {reducer, ActionType, ActionCreator};
