import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getMoviesByGenre} from "../../store/reducers/selectors";

import {movieType} from "../../types";

import withMoviesList from "../../hocs/with-movies-list/with-movies-list";

import GenresList from "../genres-list/genres-list";
import MoviesList from "../movies-list/movies-list";
import ShowMoreButton from "../show-more-button/show-more-button";

const MoviesListWrapped = withMoviesList(MoviesList);

const MoviesCatalog = (props) => {
  const {movies, shownMoviesCount} = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList/>

      <MoviesListWrapped
        movies={movies}
        shownMoviesCount={shownMoviesCount}
      />

      {shownMoviesCount < movies.length &&
        <ShowMoreButton/>
      }
    </section>
  );
};

MoviesCatalog.propTypes = {
  movies: PropTypes.arrayOf(movieType),
  shownMoviesCount: PropTypes.number.isRequired,
};

const mapStateToProps = ({APP_DATA, APP_STATE}) => {
  return {
    movies: getMoviesByGenre({APP_DATA, APP_STATE}),
    shownMoviesCount: APP_STATE.shownMoviesCount,
  };
};

export {MoviesCatalog};
export default connect(mapStateToProps, null)(MoviesCatalog);
