import React from "react";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import {connect} from "react-redux";

import {fetchMovie} from "../../store/api-actions";

import {movieType} from "../../types";

import withReviewForm from "../../hocs/with-review-form/with-review-form";

import ReviewForm from "../review-form/review-form";

const ReviewFormWrapped = withReviewForm(ReviewForm);

const Review = (props) => {
  const {movie, getMovie} = props;
  const params = useParams();

  React.useEffect(() => {
    getMovie(params.id);
  }, [params.id]);

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={movie.bgImage} alt={movie.title}/>
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
        <ReviewFormWrapped id={movie.id}/>
      </div>

    </section>
  );
};

const mapStateToProps = ({APP_DATA}) => ({
  movie: APP_DATA.activeMovie,
});

const mapDispatchToProps = (dispatch) => ({
  getMovie(id) {
    dispatch(fetchMovie(id));
  }
});

Review.propTypes = {
  movie: movieType,
  getMovie: PropTypes.func.isRequired,
};

export {Review};
export default connect(mapStateToProps, mapDispatchToProps)(Review);
