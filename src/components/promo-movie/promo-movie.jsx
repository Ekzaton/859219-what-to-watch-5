import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {AppRoute} from "../../const";
import {movieType} from "../../types";

import MyListButton from "../my-list-button/my-list-button";
import User from "../user/user";

const PromoMovie = (props) => {
  const {promoMovie} = props;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promoMovie.bgImage} alt={promoMovie.title}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          <User/>
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img
              src={promoMovie.posterImage}
              alt={`${promoMovie.title} poster`}
              width="218"
              height="327"
            />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoMovie.title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoMovie.genre}</span>
              <span className="movie-card__year">{promoMovie.year}</span>
            </p>

            <div className="movie-card__buttons">
              <Link
                to={`${AppRoute.PLAYER}${promoMovie.id}`}
                className="btn btn--play movie-card__button"
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              <MyListButton
                id={promoMovie.id}
                isFavorite={promoMovie.isFavorite}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PromoMovie.propTypes = {
  promoMovie: movieType,
};

const mapStateToProps = ({APP_DATA}) => {
  return {
    promoMovie: APP_DATA.promoMovie,
  };
};

export {PromoMovie};
export default connect(mapStateToProps, null)(PromoMovie);
