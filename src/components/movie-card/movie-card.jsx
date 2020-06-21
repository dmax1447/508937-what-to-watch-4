import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {movie, onCardTitleClick, onMouseEnter} = props;

  const cardTitleClickHandler = (evt) => {
    evt.preventDefault();
    onCardTitleClick(movie.id);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onMouseEnter(movie)}>
      <div className="small-movie-card__image">
        <img
          src={`img/${movie.picture}`}
          alt={movie.title}
          width="280"
          height="175"
          onClick={cardTitleClickHandler}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href={`/movie-page/${movie.id}`}
          onClick={cardTitleClickHandler}
        >
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
