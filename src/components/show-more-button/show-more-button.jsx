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

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick() {
    dispatch(showMoreMovies(DEFAULT_MOVIES_COUNT));
  }
});

ShowMoreButton.propTypes = {
  onShowMoreClick: PropTypes.func.isRequired,
};

export {ShowMoreButton};
export default connect(null, mapDispatchToProps)(ShowMoreButton);
