import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getGenres} from "../../store/reducers/selectors";
import {getActiveGenre} from "../../store/actions";

const GenresList = (props) => {
  const {genres, activeGenre, onGenreClick} = props;
  const activeClass = `catalog__genres-item--active`;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => (
        <li
          key={`genre-${i}`}
          className={`catalog__genres-item ${genre === activeGenre ? activeClass : ``}`}
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

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({APP_DATA, APP_STATE}) => {
  return {
    genres: getGenres({APP_DATA}),
    activeGenre: APP_STATE.activeGenre,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(activeGenre) {
    dispatch(getActiveGenre(activeGenre));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
