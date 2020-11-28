import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {fetchFavoriteMovies} from "../../store/api-actions";

import {AppRoute} from "../../const";
import {movieType} from "../../types";

import withMoviesList from "../../hocs/with-movies-list/with-movies-list";

import MoviesList from "../movies-list/movies-list";

const MoviesListWrapped = withMoviesList(MoviesList);

const MyListPage = (props) => {
  const {favoriteMovies, getFavoriteMovies} = props;

  React.useEffect(() => {
    getFavoriteMovies();
  }, []);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesListWrapped
          movies={favoriteMovies}
          shownMoviesCount={favoriteMovies.length}
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

MyListPage.propTypes = {
  favoriteMovies: PropTypes.arrayOf(movieType),
  getFavoriteMovies: PropTypes.func.isRequired,
};

export {MyListPage};
export default connect(mapStateToProps, mapDispatchToProps)(MyListPage);
