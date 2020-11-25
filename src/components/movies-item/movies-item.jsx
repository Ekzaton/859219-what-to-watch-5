import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {AppRoute} from "../../const";
import {movieType} from "../../types";

import MoviesItemPreview from "../movies-item-preview/movies-item-preview";

const MoviesItem = (props) => {
  const {movie, onMovieEnter, onMovieLeave, isPlaying} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMovieEnter(movie.id)}
      onMouseLeave={() => onMovieLeave()}
    >
      <Link to={`${AppRoute.FILMS}${movie.id}`} className="small-movie-card__image">
        <MoviesItemPreview
          movie={movie}
          isPlaying={isPlaying}
        />
      </Link>
      <h3 className="small-movie-card__title">
        <Link to={`${AppRoute.FILMS}${movie.id}`} className="small-movie-card__link">
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
  isPlaying: PropTypes.bool.isRequired,
};

export default MoviesItem;
