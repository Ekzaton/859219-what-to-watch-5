import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {fetchMovieReviews} from "../../store/api-actions";

import {movieType, reviewType} from "../../types";
import {formatReviewDate} from "../../utils";

const MovieReviewsTab = (props) => {
  const {movie, movieReviews, getMovieReviews} = props;

  React.useEffect(() => {
    getMovieReviews(movie.id);
  }, [movie.id]);

  let leftReviewsColumn = [];
  let rightReviewsColumn = [];
  movieReviews.forEach((it, i) =>
    i % 2 === 0 ? leftReviewsColumn.push(it) : rightReviewsColumn.push(it)
  );

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {leftReviewsColumn.map((review, i) =>
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
        {rightReviewsColumn.map((review, i) =>
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
  movieReviews: APP_DATA.movieReviews,
});

const mapDispatchToProps = (dispatch) => ({
  getMovieReviews(id) {
    dispatch(fetchMovieReviews(id));
  }
});

MovieReviewsTab.propTypes = {
  movie: movieType,
  movieReviews: PropTypes.arrayOf(reviewType),
  getMovieReviews: PropTypes.func.isRequired,
};

export {MovieReviewsTab};
export default connect(mapStateToProps, mapDispatchToProps)(MovieReviewsTab);
