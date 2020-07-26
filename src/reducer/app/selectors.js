import NameSpace from "../name-space.js";


const NAME_SPACE = NameSpace.APP;

export const getMovieID = (state) => {
  return state[NAME_SPACE].movieID;
};

export const getGenre = (state) => {
  return state[NAME_SPACE].genre;
};
