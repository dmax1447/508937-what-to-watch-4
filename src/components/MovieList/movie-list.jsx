import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../MovieCard/movie-card.jsx";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: null,
    };

    this._cardMouseEnterHandler = this._cardMouseEnterHandler.bind(this);
  }

  _cardMouseEnterHandler(movieName) {
    this.setState({currentMovie: movieName});
  }

  render() {
    const {films, onCardTitleClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((item) => (
          <MovieCard
            movie={item}
            onCardTitleClick={onCardTitleClick}
            onMouseEnter={this._cardMouseEnterHandler}
            key={item.id}
          />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
      })
  ).isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
};

export default MovieList;
