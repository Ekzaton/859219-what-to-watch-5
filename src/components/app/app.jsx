import React from "react";
import PropTypes from "prop-types";
import {Router as BrowserRouter, Redirect, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";

import history from "../../history";

import {AppRoute, AuthorizationStatus} from "../../const";

import withPlayerPage from "../../hocs/with-player-page/with-player-page";

import MainPage from "../main-page/main-page";
import MoviePage from "../movie-page/movie-page";
import MyListPage from "../my-list-page/my-list-page";
import PlayerPage from "../player-page/player-page";
import PrivateRoute from "../private-route/private-route";
import ReviewPage from "../review-page/review-page";
import SignInPage from "../sign-in-page/sign-in-page";

const PlayerPageWrapped = withPlayerPage(PlayerPage);

const App = (props) => {
  const {status} = props;
  const isAuthorized = (status === AuthorizationStatus.AUTH);

  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT} component={MainPage}/>
        <Route exact path={AppRoute.SIGN_IN}
          render={() => isAuthorized ? <Redirect to={AppRoute.ROOT}/> : <SignInPage/>}
        />
        <PrivateRoute exact path={AppRoute.MY_LIST} render={() => <MyListPage/>}/>
        <Route exact path={AppRoute.FILMS_ID} component={MoviePage}/>
        <PrivateRoute exact path={AppRoute.REVIEW_ID} render={() => <ReviewPage/>}/>
        <Route exact path={AppRoute.PLAYER_ID} component={PlayerPageWrapped}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  status: PropTypes.string.isRequired,
};

const mapStateToProps = ({APP_USER}) => ({
  status: APP_USER.status,
});

export {App};
export default connect(mapStateToProps, null)(App);
