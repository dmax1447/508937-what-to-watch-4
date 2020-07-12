import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class GenreList extends PureComponent {
  constructor(props) {
    super(props);

    this._genreItemClickHandler = this._genreItemClickHandler.bind(this);
  }

  _genreItemClickHandler() {
  }

  render() {

    return (
      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link">
            All genres
          </a>
        </li>
        {this.props.genres.map((item) => (
          <li key={item} className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
};

export default GenreList;
