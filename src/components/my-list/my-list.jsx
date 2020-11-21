import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {movieType} from "../../types";

import withMoviesList from "../../hocs/with-movies-list/with-movies-list";

import MoviesList from "../movies-list/movies-list";

const MoviesListWrapped = withMoviesList(MoviesList);

const MyList = (props) => {
  const {movies} = props;
  const favoriteMovies = movies.filter((it) => it.isFavorite === true);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesListWrapped
          movies={favoriteMovies}
          shownMovies={favoriteMovies.length}
        />
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
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
  );
};

const mapStateToProps = ({MOVIES}) => ({
  movies: MOVIES.movies,
});

MyList.propTypes = {
  movies: PropTypes.arrayOf(movieType),
};

export {MyList};
export default connect(mapStateToProps, null)(MyList);
