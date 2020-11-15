import React from "react";

import {movieType} from "../../types";
import {RatingLevel} from "../../const";

const MovieOverview = (props) => {
  const {movie} = props;

  const getRatingLevel = (score) => {
    if (score > 0 && score < 3) {
      return RatingLevel.BAD;
    } else if (score >= 3 && score < 5) {
      return RatingLevel.NORMAL;
    } else if (score >= 5 && score < 8) {
      return RatingLevel.GOOD;
    } else if (score >= 8 && score < 10) {
      return RatingLevel.VERY_GOOD;
    } else if (score === 10) {
      return RatingLevel.AWESOME;
    } else {
      return RatingLevel.UNRATED;
    }
  };

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.ratingScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingLevel(movie.ratingScore)}</span>
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
