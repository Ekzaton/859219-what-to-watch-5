import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {movieType} from "../../types";

import withMoviesList from "../../hocs/with-movies-list/with-movies-list";

import GenresList from "../genres-list/genres-list";
import MoviesList from "../movies-list/movies-list";
import ShowMore from "../show-more/show-more";

const MoviesListWrapped = withMoviesList(MoviesList);

const Main = (props) => {
  const {moviesByGenre, promo, shownMovies, onMoviesItemClick} = props;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promo.cardImage} alt={promo.title}/>
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
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promo.posterImage} alt={`${promo.title} poster`} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promo.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promo.genre}</span>
                <span className="movie-card__year">{promo.year}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`/player/${promo.id}`} className="btn btn--play movie-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to="/my-list" className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </Link>
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
            onMoviesItemClick={onMoviesItemClick}
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

const mapStateToProps = (state) => {
  return {
    moviesByGenre: state.moviesByGenre,
    promo: state.promo,
    shownMovies: state.shownMovies,
  };
};

Main.propTypes = {
  moviesByGenre: PropTypes.arrayOf(movieType),
  promo: movieType,
  shownMovies: PropTypes.number.isRequired,
  onMoviesItemClick: PropTypes.func.isRequired
};

export {Main};
export default connect(mapStateToProps, null)(Main);
