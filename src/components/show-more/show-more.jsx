import React from "react";
import PropTypes from "prop-types";

const ShowMore = (props) => {
  const {shownMovies, onShowMoreClick} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => {
          onShowMoreClick(shownMovies);
        }}
      >
        Show more
      </button>
    </div>
  );
};

ShowMore.propTypes = {
  shownMovies: PropTypes.number.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
};

export default ShowMore;
