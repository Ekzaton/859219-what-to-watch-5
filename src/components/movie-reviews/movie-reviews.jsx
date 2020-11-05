import React from "react";
import PropTypes from "prop-types";

import {movieType, reviewType} from "../../types";


const MovieReviews = (props) => {
  const {movie, reviews} = props;
  const content = reviews.find((it) => it.id === movie.id).content;

  let leftColumn = [];
  let rightColumn = [];
  content.forEach((it, i) => (i % 2 === 0) ? leftColumn.push(it) : rightColumn.push(it));

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {leftColumn.map((review, i) =>
          <div key={`review-${i}`} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{review.text}</p>

              <footer className="review__details">
                <cite className="review__author">{review.author}</cite>
                <time className="review__date" dateTime="2016-12-24">{review.date}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>
        )}
      </div>
      <div className="movie-card__reviews-col">
        {rightColumn.map((review, i) =>
          <div key={`review-${i}`} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{review.text}</p>

              <footer className="review__details">
                <cite className="review__author">{review.author}</cite>
                <time className="review__date" dateTime="2016-12-24">{review.date}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>
        )}
      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  movie: movieType,
  reviews: PropTypes.arrayOf(reviewType),
};

export default MovieReviews;
