import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

import movieFullMock from '../../mocks/movie-full.js';

const App = (props) => {
  const onCardTitleClick = (evt) => {
    evt.preventDefault();
  };


  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              promo={props.promo}
              films={props.films}
              onCardTitleClick={onCardTitleClick}
            />
          </Route>
          <Route exact path="/dev-film">
            <MoviePage film={movieFullMock} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

App.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }),
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
      })
  ).isRequired,
};
