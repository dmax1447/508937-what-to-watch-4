import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import MainScreen from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import {getGenre, getMovieID} from '../../reducer/app/selectors.js';
import {getFilms} from '../../reducer/data/selectors.js';
import {getFilmsByGenre} from '../../reducer/app/selectors.js';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  renderMainRoute() {
    if (this.props.movieId) {
      const filmSelected = this.props.films.find((item) => item.id === this.props.movieId);
      return (<MoviePage film={filmSelected} />);
    }
    const genres = [...new Set(this.props.films.map((item) => item.genre))];


    return (<MainScreen
      promo={this.props.promo}
      films={this.props.filmsByGenre}
      genres={genres}
    />);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {this.renderMainRoute()}
            </Route>
            <Route path="/dev-film">
              <MoviePage film={this.props.films[1]} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  genre: getGenre(state),
  movieId: getMovieID(state),
  films: getFilms(state),
  filmsByGenre: getFilmsByGenre(state),
});

export {App};
export default connect(mapStateToProps)(App);

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
        genre: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        video: PropTypes.string.isRequired,
        ratingScore: PropTypes.number.isRequired,
        ratingCount: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
  ).isRequired,
  filmsByGenre: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        video: PropTypes.string.isRequired,
        ratingScore: PropTypes.number.isRequired,
        ratingCount: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
  ).isRequired,
  genre: PropTypes.string.isRequired,
  movieId: PropTypes.string,
};
