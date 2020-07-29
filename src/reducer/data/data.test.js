import {reducer, ActionCreator, ActionType, Operation} from './data.js';
import filmsMock from '../../mocks/tests/films.js';
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import createFilm from "../../adapters/create-film.js";

const initialState = {
  films: [],
};

const api = createAPI(() => { });


describe(`check reducer DATA`, () => {
  it(`reducer should return initial state`, () => {
    const store = reducer();
    expect(store).toEqual(initialState);
  });

  it(`action SET_FILMS should set films`, () => {
    const store = reducer(initialState, ActionCreator.setFilms(filmsMock));
    expect(store.films).toEqual(filmsMock);
  });

  it(`operation LOAD_FILMS should make a correct API call to /questions`, () => {
    const apiMock = new MockAdapter(api);
    const dispatchMock = jest.fn();
    const filmsLoader = Operation.loadFilms();
    const replyMock = [{
      "background_color": `#A6B7AC`,
      "background_image": `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`,
      "description": `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`,
      "director": `Martin Scorsese`,
      "genre": `Crime`,
      "id": 1,
      "is_favorite": false,
      "name": `Gangs of new york`,
      "poster_image": `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`,
      "preview_image": `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`,
      "preview_video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      "rating": 8.8,
      "released": 2002,
      "run_time": 167,
      "scores_count": 370881,
      "starring": [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`],
      "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    }];

    const replyMockMapped = replyMock.map(createFilm);

    apiMock
      .onGet(`/films`)
      .reply(200, replyMock);

    return filmsLoader(dispatchMock, () => {}, api)
      .then(() => {
        expect(dispatchMock).toHaveBeenCalledTimes(1);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_FILMS,
          payload: replyMockMapped,
        });
      });
  });
});
