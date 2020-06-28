import React from "react";
import PropTypes from "prop-types";

import VideoPlayer from '../video-player/video-player.jsx';

const MovieCard = (props) => {
  const {movie, onCardTitleClick, onMouseEnter} = props;

  const cardClickHandler = (evt) => {
    evt.preventDefault();
    onCardTitleClick(movie.id);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMouseEnter(movie)}
      onClick={cardClickHandler}
    >
      <div className="small-movie-card__image">
        <VideoPlayer movie={movie} />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={`/movie-page/${movie.id}`}>
          {movie.title}
        </a>
      </h3>
    </article>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }),
  onCardTitleClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
};
