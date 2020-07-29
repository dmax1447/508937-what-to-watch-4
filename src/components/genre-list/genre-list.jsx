import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app/app.js";
import {getGenre} from '../../reducer/app/selectors.js';


class GenreList extends PureComponent {
  constructor(props) {
    super(props);

    this._onAllGenreClick = this._onAllGenreClick.bind(this);
    this._onGenreClick = this._onGenreClick.bind(this);
  }

  _onGenreClick(item, evt) {
    evt.preventDefault();
    this.props.onGenreClick(item);
  }

  _onAllGenreClick(evt) {
    evt.preventDefault();
    this.props.onAllGenreClick();
  }

  render() {
    const currentGenre = this.props.genre;

    return (
      <ul className="catalog__genres-list">
        <li
          className={`catalog__genres-item ${currentGenre === `All_genres` ? `catalog__genres-item--active` : ``}`}
        >
          <a href="#" className="catalog__genres-link" onClick={(evt) => this._onAllGenreClick(evt)}>
            All genres
          </a>
        </li>
        {this.props.genres.map((item) => (
          <li key={item}
            className={`catalog__genres-item ${item === currentGenre ? `catalog__genres-item--active` : ``}`}
          >
            <a href="#" className="catalog__genres-link" onClick={(evt) => this._onGenreClick(item, evt)}>
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
  genre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  onAllGenreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: getGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.setGenre(genre));
  },
  onAllGenreClick() {
    dispatch(ActionCreator.setAllGeneres());
  },
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
