import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from '../video-player/video-player.jsx';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app/app.js";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this.cardClickHandler = this.cardClickHandler.bind(this);
    this.cardMouseEnterHandler = this.cardMouseEnterHandler.bind(this);
  }

  cardClickHandler(evt) {
    evt.preventDefault();
    this.props.onCardTitleClick(this.props.movie.id);
  }

  cardMouseEnterHandler() {
    this.props.onMouseEnter(this.props.movie.id);
  }

  render() {
    const {movie} = this.props;
    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this.cardMouseEnterHandler}
        onClick={this.cardClickHandler}
      >
        <VideoPlayer movie={movie} />
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href={`/movie-page/${movie.id}`}>
            {movie.title}
          </a>
        </h3>
      </article>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onCardTitleClick(id) {
    dispatch(ActionCreator.setMovieId(id));
  },

});

export {MovieCard};
export default connect(null, mapDispatchToProps)(MovieCard);

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }),
  onCardTitleClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  active: PropTypes.bool,
};
