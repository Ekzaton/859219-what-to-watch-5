import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {changeFavorite} from "../../store/api-actions";

import {AuthorizationStatus} from "../../const";

const MyListButton = (props) => {
  const {id, isFavorite, onButtonClick, status} = props;
  const isAuthorized = (status === AuthorizationStatus.AUTH);

  return (
    <React.Fragment>
      {isAuthorized &&
        <button
          className="btn btn--list movie-card__button"
          type="button"
          onClick={(evt) => {
            evt.preventDefault();

            onButtonClick(id, isFavorite);
          }}
        >
          {isFavorite
            ? <svg viewBox="0 0 18 14" width="18" height="14">
              <use xlinkHref="#in-list"></use>
            </svg>
            : <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>
          }
          <span>My list</span>
        </button>
      }
    </React.Fragment>
  );
};

const mapStateToProps = ({APP_USER}) => ({
  status: APP_USER.status,
});

const mapDispatchToProps = (dispatch) => ({
  onButtonClick(id, isFavorite) {
    dispatch(changeFavorite(id, isFavorite));
  }
});

MyListButton.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export {MyListButton};
export default connect(mapStateToProps, mapDispatchToProps)(MyListButton);
