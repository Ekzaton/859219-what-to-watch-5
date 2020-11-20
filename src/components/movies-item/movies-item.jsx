import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {movieType} from "../../types";

import Preview from "../preview/preview";

const MoviesItem = (props) => {
  const {movie, onMoviesItemClick, onMovieEnter, onMovieLeave, isPlaying} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={() => onMoviesItemClick(movie.id)}
      onMouseEnter={() => onMovieEnter(movie.id)}
      onMouseLeave={() => onMovieLeave()}
    >
      <Link to={`/films/${movie.id}`} className="small-movie-card__image">
        <Preview movie={movie} isPlaying={isPlaying}/>
      </Link>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${movie.id}`} className="small-movie-card__link">
          {movie.title}
        </Link>
      </h3>
    </article>
  );
};

MoviesItem.propTypes = {
  movie: movieType,
  onMoviesItemClick: PropTypes.func.isRequired,
  onMovieEnter: PropTypes.func.isRequired,
  onMovieLeave: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default MoviesItem;
