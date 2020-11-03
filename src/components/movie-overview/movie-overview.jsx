import React from "react";

import {movieType} from "../../types";

const MovieOverview = (props) => {
  const {movie} = props;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.ratingScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{movie.ratingLevel}</span>
          <span className="movie-rating__count">{movie.ratingCount}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{movie.text}</p>
        <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {movie.starring}</strong></p>
      </div>
    </React.Fragment>
  );
};

MovieOverview.propTypes = {
  movie: movieType,
};

export default MovieOverview;
