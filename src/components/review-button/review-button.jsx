import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {AppRoute, AuthorizationStatus} from "../../const";

const ReviewButton = (props) => {
  const {id, status} = props;
  const isAuthorized = (status === AuthorizationStatus.AUTH);

  return (
    <React.Fragment>
      {isAuthorized &&
        <Link
          to={`${AppRoute.FILMS}${id}${AppRoute.REVIEW}`}
          className="btn movie-card__button"
        >
          Add review
        </Link>
      }
    </React.Fragment>
  );
};

const mapStateToProps = ({APP_USER}) => ({
  status: APP_USER.status,
});

ReviewButton.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};

export {ReviewButton};
export default connect(mapStateToProps, null)(ReviewButton);
