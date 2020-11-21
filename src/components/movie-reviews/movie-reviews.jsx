import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {fetchMovieReviews} from "../../store/api-action";

import {movieType, reviewType} from "../../types";
import {formatReviewDate} from "../../utils";

const MovieReviews = (props) => {
  const {movie, reviews, getMovieReviews} = props;

  React.useEffect(() => {
    getMovieReviews(movie.id);
  }, [movie.id]);

  let leftColumn = [];
  let rightColumn = [];
  reviews.forEach((it, i) => (i % 2 === 0) ? leftColumn.push(it) : rightColumn.push(it));

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {leftColumn.map((review, i) =>
          <div key={`review-${i}`} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{review.text}</p>

              <footer className="review__details">
                <cite className="review__author">{review.author}</cite>
                <time className="review__date" dateTime="2016-12-24">
                  {formatReviewDate(review.date)}
                </time>
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
                <time className="review__date" dateTime="2016-12-24">
                  {formatReviewDate(review.date)}
                </time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({APP_DATA}) => ({
  reviews: APP_DATA.reviews,
});

MovieReviews.propTypes = {
  movie: movieType,
  reviews: PropTypes.arrayOf(reviewType),
  getMovieReviews: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getMovieReviews(id) {
    dispatch(fetchMovieReviews(id));
  }
});

export {MovieReviews};
export default connect(mapStateToProps, mapDispatchToProps)(MovieReviews);
