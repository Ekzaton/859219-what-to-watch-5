import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {AuthorizationStatus} from "../../const";

const PrivateRoute = (props) => {
  const {path, exact, render, status} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          status === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={`/sign-in`}/>
        );
      }}
    />
  );
};

const mapStateToProps = ({APP_USER}) => ({
  status: APP_USER.status,
});

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
