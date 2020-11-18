import React from "react";

import {movieType} from "../../types";

const MovieDetails = (props) => {
  const {movie} = props;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">
            Director
          </strong>
          <span className="movie-card__details-value">
            {movie.director}
          </span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">
            Starring
          </strong>
          <span className="movie-card__details-value">
            {movie.starring.map((star, i) => {
              if (i < movie.starring.length - 1) {
                return <React.Fragment key={`star-${i}`}>{star}, <br/></React.Fragment>;
              } else {
                return star;
              }
            })}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{movie.runTime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{movie.genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{movie.year}</span>
        </p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: movieType,
};

export default MovieDetails;
