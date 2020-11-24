import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {fetchFavoriteMovies} from "../../store/api-actions";

import {movieType} from "../../types";

import withMoviesList from "../../hocs/with-movies-list/with-movies-list";

import MoviesList from "../movies-list/movies-list";
import User from "../user/user";

const MoviesListWrapped = withMoviesList(MoviesList);

const MyList = (props) => {
  const {favoriteMovies, getFavoriteMovies} = props;

  React.useEffect(() => {
    getFavoriteMovies();
  }, []);

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
          <User/>
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

const mapStateToProps = ({APP_DATA}) => ({
  favoriteMovies: APP_DATA.favoriteMovies,
});

const mapDispatchToProps = (dispatch) => ({
  getFavoriteMovies() {
    dispatch(fetchFavoriteMovies());
  }
});

MyList.propTypes = {
  favoriteMovies: PropTypes.arrayOf(movieType),
  getFavoriteMovies: PropTypes.func.isRequired,
};

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
