import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {movieType} from "../../types";

import withReviewForm from "../../hocs/with-review-form/with-review-form";

import ReviewForm from "../review-form/review-form";

const ReviewFormWrapped = withReviewForm(ReviewForm);

const Review = (props) => {
  const {movies, currentMovieId} = props;
  const movie = movies.find((it) => it.id === currentMovieId);

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={movie.cardImage} alt={movie.title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${movie.id}`} className="breadcrumbs__link">
                  {movie.title}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={movie.posterImage} alt={`${movie.title} poster`} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <ReviewFormWrapped/>
      </div>

    </section>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

Review.propTypes = {
  movies: PropTypes.arrayOf(movieType),
  currentMovieId: PropTypes.number.isRequired,
};

export {Review};
export default connect(mapStateToProps, null)(Review);
