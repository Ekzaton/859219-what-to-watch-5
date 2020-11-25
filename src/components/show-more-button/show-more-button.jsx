import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {showMoreMovies} from "../../store/actions";

const ShowMoreButton = (props) => {
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

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick(shownMovies) {
    dispatch(showMoreMovies(shownMovies));
  }
});

ShowMoreButton.propTypes = {
  shownMovies: PropTypes.number.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
};

export {ShowMoreButton};
export default connect(null, mapDispatchToProps)(ShowMoreButton);
