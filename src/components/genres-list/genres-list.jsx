import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getMoviesByGenre} from "../../store/action";

import {ALL_GENRES} from "../../const";

import {movieType} from "../../types";

const GenresList = (props) => {
  const {activeGenre, movies, onGenreClick} = props;
  const genres = [ALL_GENRES, ...new Set(movies.map((movie) => movie.genre))];

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => (
        <li
          key={`genre-${i}`}
          className={`catalog__genres-item
            ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}
        >
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();

              onGenreClick(genre);
            }}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({MOVIES}) => {
  return {
    activeGenre: MOVIES.activeGenre,
    movies: MOVIES.movies,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(activeGenre) {
    dispatch(getMoviesByGenre(activeGenre));
  }
});

GenresList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(movieType),
  onGenreClick: PropTypes.func.isRequired,
};

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
