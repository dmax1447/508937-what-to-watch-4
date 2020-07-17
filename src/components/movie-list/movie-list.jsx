import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: null,
    };

    this._cardMouseEnterHandler = this._cardMouseEnterHandler.bind(this);
  }

  _cardMouseEnterHandler(movie) {
    this.setState({currentMovie: movie});
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((item) => (
          <MovieCard
            movie={item}
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
};

export default MovieList;
