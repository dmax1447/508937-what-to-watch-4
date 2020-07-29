import {extend} from "../../utils.js";
import createFilm from "../../adapters/create-film.js";

const initialState = {
  films: [],
};

const ActionType = {
  SET_FILMS: `SET_FILMS`,
};

const ActionCreator = {
  setFilms: (films) => {
    return {
      type: ActionType.SET_FILMS,
      payload: films,
    };
  },
};

const reducer = (state = initialState, action) => {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case ActionType.SET_FILMS:
      return extend(state, {
        films: action.payload,
      });
  }

  return state;
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const films = response.data.map(createFilm);
        dispatch(ActionCreator.setFilms(films));
      });
  },
};


export {reducer, ActionType, ActionCreator, Operation};
