import {extend} from "../../utils.js";

const getFilm = (data) => ({
  id: `${data.id}`,
  title: data.name,
  picture: data.preview_image,
  genre: data.genre,
  year: `${data.released}`,
  poster: data.poster_image,
  video: data.preview_video_link,
  ratingScore: data.rating,
  ratingCount: data.scores_count,
  overview: data.description,
  director: data.director,
  starring: data.starring
});


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
        const films = response.data.map(getFilm);
        dispatch(ActionCreator.setFilms(films));
      });
  },
};


export {reducer, ActionType, ActionCreator, Operation};
