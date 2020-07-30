import NameSpace from "../name-space.js";
import {createSelector} from 'reselect';
import {getFilms} from '../data/selectors';

const NAME_SPACE = NameSpace.APP;

export const getMovieID = (state) => {
  return state[NAME_SPACE].movieId;
};

export const getGenre = (state) => {
  return state[NAME_SPACE].genre;
};

export const getFilmsByGenre = createSelector(
    getFilms,
    getGenre,
    (films, genre) => {
      if (genre === `All_genres`) {
        return films;
      }
      return films.filter((item) => item.genre === genre);
    }
);

export const getFilmById = createSelector(
    getFilms,
    getMovieID,
    (films, movieId) => {

      const id = movieId || `7`;
      const film = films.find((item) => item.id === id);
      return film;
    }
);
