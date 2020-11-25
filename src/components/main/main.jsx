import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {getMoviesByGenre, showMoreMovies} from "../../store/reducers/selectors";

import {AppRoute} from "../../const";
import {movieType} from "../../types";

import withMoviesList from "../../hocs/with-movies-list/with-movies-list";

import GenresList from "../genres-list/genres-list";
import MoviesList from "../movies-list/movies-list";
import MyListButton from "../my-list-button/my-list-button";
import ShowMore from "../show-more/show-more";
import User from "../user/user";

const MoviesListWrapped = withMoviesList(MoviesList);

const Main = (props) => {
  const {moviesByGenre, promoMovie, shownMovies} = props;

  return (
    <React.Fragment>
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

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList/>

          <MoviesListWrapped
            movies={moviesByGenre}
            shownMovies={shownMovies}
          />

          {shownMovies < moviesByGenre.length &&
            <ShowMore
              shownMovies={shownMovies}
            />
          }
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({APP_DATA, APP_STATE}) => {
  return {
    moviesByGenre: getMoviesByGenre({APP_DATA, APP_STATE}),
    promoMovie: APP_DATA.promoMovie,
    shownMovies: showMoreMovies({APP_DATA, APP_STATE}),
  };
};

Main.propTypes = {
  moviesByGenre: PropTypes.arrayOf(movieType),
  promoMovie: movieType,
  shownMovies: PropTypes.number.isRequired,
};

export {Main};
export default connect(mapStateToProps, null)(Main);
