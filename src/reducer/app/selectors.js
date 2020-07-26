import NameSpace from "../name-space.js";


const NAME_SPACE = NameSpace.APP;

export const getMovieID = (state) => {
  return state[NAME_SPACE].movieId;
};

export const getGenre = (state) => {
  return state[NAME_SPACE].genre;
};
