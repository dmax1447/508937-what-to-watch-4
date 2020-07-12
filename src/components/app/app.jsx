import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import PropTypes from "prop-types";
import MainScreen from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movieId: null,
    };

    this.onCardTitleClick = this.onCardTitleClick.bind(this);

  }

  onCardTitleClick(id) {
    this.setState({movieId: id});
  }

  renderMainRoute() {
    if (this.state.movieId) {
      const filmSelected = this.props.films.find((item) => item.id === this.state.movieId);
      return (<MoviePage film={filmSelected} />);
    }
    return (<MainScreen
      promo={this.props.promo}
      films={this.getFilmsListByGenre(this.props.genre)}
      onCardTitleClick={this.onCardTitleClick}
    />);
  }

  getFilmsListByGenre(genre) {
    if (genre === `All_genres`) {
      return this.props.films;
    }
    return this.props.films.filter((item) => item.genre === genre);
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
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClick() {
    dispatch(ActionCreator.incrementStep());
  },
  onUserAnswer() {
    dispatch(ActionCreator.incrementStep());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

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
  genre: PropTypes.string.isRequired
};
