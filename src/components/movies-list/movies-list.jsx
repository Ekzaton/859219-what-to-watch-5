import React from "react";
import PropTypes from "prop-types";

import {movieType} from "../../types";

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
            cardImage={movie.cardImage}
          />
        )
      }
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieType),
};

export default MoviesList;
