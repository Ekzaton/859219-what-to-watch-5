import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {movieType} from "../../types";

import Preview from "../preview/preview";

const MoviesItem = (props) => {
  const {movie, onMovieEnter, onMovieLeave, showPreview} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMovieEnter(movie.id)}
      onMouseLeave={() => onMovieLeave()}
    >
      <Link to={`/movies/${movie.id}`} className="small-movie-card__image">
        {showPreview
          ? <Preview movie={movie}/>
          : <div className="small-movie-card__image">
            <img src={movie.cardImage} alt={movie.title} width="280" height="175"/>
          </div>
        }
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
  showPreview: PropTypes.bool.isRequired,
};

export default MoviesItem;
