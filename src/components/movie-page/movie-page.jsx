import React from "react";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import {connect} from "react-redux";

import {getSimilarMovies} from "../../store/reducers/selectors";
import {fetchMovie} from "../../store/api-actions";

import {AppRoute} from "../../const";
import {movieType} from "../../types";

import withMoviesList from "../../hocs/with-movies-list/with-movies-list";
import withMovieTabToggler from "../../hocs/with-movie-tab-toggler/with-movie-tab-toggler";

import MoviesList from "../movies-list/movies-list";
import MyListButton from "../my-list-button/my-list-button";
import MovieTabToggler from "../movie-tab-toggler/movie-tab-toggler";
import ReviewButton from "../review-button/review-button";
import User from "../user/user";

const MoviesListWrapped = withMoviesList(MoviesList);
const MovieTabTogglerWrapped = withMovieTabToggler(MovieTabToggler);

const SIMILAR_MOVIES_COUNT = 4;

const MoviePage = (props) => {
  const {movie, getMovie, similarMovies} = props;
  const params = useParams();

  React.useEffect(() => {
    getMovie(params.id);
  }, [params.id]);

  return (
    <React.Fragment>
      <section
        className="movie-card movie-card--full"
        style={{backgroundColor: movie.bgColor}}
      >
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movie.bgImage} alt={movie.title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to={AppRoute.ROOT} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              <User/>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movie.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movie.genre}</span>
                <span className="movie-card__year">{movie.year}</span>
              </p>

              <div className="movie-card__buttons">
                <Link
                  to={`${AppRoute.PLAYER}${movie.id}`}
                  className="btn btn--play movie-card__button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <MyListButton
                  id={movie.id}
                  isFavorite={movie.isFavorite}
                />
                <ReviewButton
                  id={movie.id}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={movie.posterImage}
                alt={`${movie.title} poster`}
                width="218"
                height="327"
              />
            </div>

            <MovieTabTogglerWrapped
              movie={movie}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesListWrapped
            movies={similarMovies}
            shownMoviesCount={SIMILAR_MOVIES_COUNT}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  movie: movieType,
  getMovie: PropTypes.func.isRequired,
  similarMovies: PropTypes.arrayOf(movieType),
};

const mapStateToProps = ({APP_DATA}) => ({
  movie: APP_DATA.activeMovie,
  similarMovies: getSimilarMovies({APP_DATA}),
});

const mapDispatchToProps = (dispatch) => ({
  getMovie(id) {
    dispatch(fetchMovie(id));
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
