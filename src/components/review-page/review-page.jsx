import React from "react";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import {connect} from "react-redux";

import {fetchMovie} from "../../store/api-actions";

import {AppRoute} from "../../const";
import {movieType} from "../../types";

import withReviewForm from "../../hocs/with-review-form/with-review-form";

import ReviewForm from "../review-form/review-form";
import User from "../user/user";

const ReviewFormWrapped = withReviewForm(ReviewForm);

const ReviewPage = (props) => {
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
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.FILMS}${movie.id}`} className="breadcrumbs__link">
                  {movie.title}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <User/>
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

ReviewPage.propTypes = {
  movie: movieType,
  getMovie: PropTypes.func.isRequired,
};

const mapStateToProps = ({APP_DATA}) => ({
  movie: APP_DATA.activeMovie,
});

const mapDispatchToProps = (dispatch) => ({
  getMovie(id) {
    dispatch(fetchMovie(id));
  }
});

export {ReviewPage};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewPage);
