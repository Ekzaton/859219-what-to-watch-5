import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getMoviesByGenre, showMoreMovies} from "../../store/reducers/selectors";

import {movieType} from "../../types";

import withMoviesList from "../../hocs/with-movies-list/with-movies-list";

import GenresList from "../genres-list/genres-list";
import MoviesList from "../movies-list/movies-list";
import ShowMoreButton from "../show-more-button/show-more-button";

const MoviesListWrapped = withMoviesList(MoviesList);

const MoviesCatalog = (props) => {
  const {movies, shownMovies} = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList/>

      <MoviesListWrapped
        movies={movies}
        shownMovies={shownMovies}
      />

      {shownMovies < movies.length &&
        <ShowMoreButton
          shownMovies={shownMovies}
        />
      }
    </section>
  );
};

const mapStateToProps = ({APP_DATA, APP_STATE}) => {
  return {
    movies: getMoviesByGenre({APP_DATA, APP_STATE}),
    shownMovies: showMoreMovies({APP_DATA, APP_STATE}),
  };
};

MoviesCatalog.propTypes = {
  movies: PropTypes.arrayOf(movieType),
  shownMovies: PropTypes.number.isRequired,
};

export {MoviesCatalog};
export default connect(mapStateToProps, null)(MoviesCatalog);
