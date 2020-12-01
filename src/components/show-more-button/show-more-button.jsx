import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {showMoreMovies} from "../../store/actions";

import {DEFAULT_MOVIES_COUNT} from "../../const";

const ShowMoreButton = (props) => {
  const {onShowMoreClick} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onShowMoreClick}
      >
        Show more
      </button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  onShowMoreClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick() {
    dispatch(showMoreMovies(DEFAULT_MOVIES_COUNT));
  }
});

export {ShowMoreButton};
export default connect(null, mapDispatchToProps)(ShowMoreButton);
