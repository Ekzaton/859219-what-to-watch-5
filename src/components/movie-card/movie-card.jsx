import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {title, posterImage} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={posterImage} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
};

export default MovieCard;
