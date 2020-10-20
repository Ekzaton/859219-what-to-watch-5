import React from "react";
import PropTypes from "prop-types";

import {moviesValidator} from "../../validators";

import MovieCard from "../movie-card/movie-card";

const MoviesList = (props) => {
  const {movies} = props;

  return (
    <div className="catalog__movies-list">
      {
        movies.map((movie, i) =>
          <MovieCard
            key={`movie-${i}`}
            title={movie.title}
            posterImage={movie.posterImage}
          />
        )
      }
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(moviesValidator),
};

export default MoviesList;
