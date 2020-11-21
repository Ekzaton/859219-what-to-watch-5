import React from "react";
import PropTypes from "prop-types";

import {movieType} from "../../types";

import MoviesItem from "../movies-item/movies-item";

const MoviesList = (props) => {
  const {movies, shownMovies, onMoviesItemClick, onMovieEnter, onMovieLeave, activeMovieId} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((movie, i) => i < shownMovies &&
        <MoviesItem
          key={`movie-${i}`}
          movie={movie}
          onMoviesItemClick={onMoviesItemClick}
          onMovieEnter={onMovieEnter}
          onMovieLeave={onMovieLeave}
          isPlaying={activeMovieId === movie.id}
        />
      )}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieType),
  shownMovies: PropTypes.number.isRequired,
  onMoviesItemClick: PropTypes.func.isRequired,
  onMovieEnter: PropTypes.func.isRequired,
  onMovieLeave: PropTypes.func.isRequired,
  activeMovieId: PropTypes.number.isRequired,
};

export default MoviesList;
