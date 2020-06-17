import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {movie, onCardTitleClick, onMouseEnter} = props;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onMouseEnter(movie.title)}>
      <div className="small-movie-card__image">
        <img
          src={`img/${movie.picture}`}
          alt={movie.title}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={onCardTitleClick}
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
