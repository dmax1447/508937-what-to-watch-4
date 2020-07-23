import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this._cardMouseEnterHandler = this._cardMouseEnterHandler.bind(this);
  }

  _cardMouseEnterHandler(id) {
    this.props.setActiveItem(id);
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
  activeItem: PropTypes.string,
  setActiveItem: PropTypes.func.isRequired,
};

export default withActiveItem(MovieList);
export {MovieList};
