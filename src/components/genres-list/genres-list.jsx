import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator} from "../../store/action";

import {ALL_GENRES} from "../../const";
import {getGenres} from "../../movies-filter";

import {movieType} from "../../types";

const GenresList = (props) => {
  const {movies, activeGenre, onGenreClick} = props;
  const genres = getGenres(movies);
  genres.push(ALL_GENRES);

  return (
    <ul className="catalog__genres-list">
      {genres.sort((a, b) => a > b ? 1 : -1).map((genre, i) => (
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
              evt.stopPropagation();

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

const mapStateToProps = (state) => {
  return {
    activeGenre: state.activeGenre,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(activeGenre) {
    dispatch(ActionCreator.changeMoviesGenre(activeGenre));
  }
});

GenresList.propTypes = {
  movies: PropTypes.arrayOf(movieType),
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
