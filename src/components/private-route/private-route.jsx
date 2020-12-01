import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {AppRoute, AuthorizationStatus} from "../../const";

const PrivateRoute = (props) => {
  const {path, exact, render, status} = props;
  const isAuthorized = (status === AuthorizationStatus.AUTH);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          isAuthorized
            ? render(routeProps)
            : <Redirect to={AppRoute.SIGN_IN}/>
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

const mapStateToProps = ({APP_USER}) => ({
  status: APP_USER.status,
});

export {PrivateRoute};
export default connect(mapStateToProps, null)(PrivateRoute);
