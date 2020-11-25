import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {AppRoute, AuthorizationStatus} from "../../const";

const User = (props) => {
  const {status} = props;
  const isAuthorized = (status === AuthorizationStatus.AUTH);

  return (
    <React.Fragment>
      {isAuthorized
        ? <div className="user-block__avatar">
          <Link to={AppRoute.MY_LIST}>
            <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </Link>
        </div>
        : <div className="user-block__link">
          <Link to={AppRoute.SIGN_IN} className="user-block__link">Sign in</Link>
        </div>
      }
    </React.Fragment>
  );
};

User.propTypes = {
  status: PropTypes.string.isRequired,
};

const mapStateToProps = ({APP_USER}) => ({
  status: APP_USER.status,
});

export {User};
export default connect(mapStateToProps, null)(User);
