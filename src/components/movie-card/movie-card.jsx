import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const MovieCard = (props) => {
  const {title, cardImage} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={cardImage} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link to="/movies/:id" className="small-movie-card__link">
          {title}
        </Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
};

export default MovieCard;
