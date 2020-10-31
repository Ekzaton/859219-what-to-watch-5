import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {movieType} from "../../types";

const MoviesItem = (props) => {
  const {movie, onMovieEnter, onMovieLeave} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMovieEnter(movie.id)}
      onMouseLeave={() => onMovieLeave()}
    >
      <Link to={`/movies/${movie.id}`} className="small-movie-card__image">
        <div className="small-movie-card__image">
          <img src={movie.cardImage} alt={movie.title} width="280" height="175"/>
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <Link to={`/movies/${movie.id}`} className="small-movie-card__link">
          {movie.title}
        </Link>
      </h3>
    </article>
  );
};

MoviesItem.propTypes = {
  movie: movieType,
  onMovieEnter: PropTypes.func.isRequired,
  onMovieLeave: PropTypes.func.isRequired,
};

export default MoviesItem;
