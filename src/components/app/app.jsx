import React from "react";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";

import history from "../../history";

import {AppRoute} from "../../const";

import withPlayerPage from "../../hocs/with-player-page/with-player-page";

import MainPage from "../main-page/main-page";
import MoviePage from "../movie-page/movie-page";
import MyListPage from "../my-list-page/my-list-page";
import PlayerPage from "../player-page/player-page";
import PrivateRoute from "../private-route/private-route";
import ReviewPage from "../review-page/review-page";
import SignInPage from "../sign-in-page/sign-in-page";

const PlayerPageWrapped = withPlayerPage(PlayerPage);

const App = () => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT} component={MainPage}/>
        <Route exact path={AppRoute.SIGN_IN} component={SignInPage}/>
        <PrivateRoute exact path={AppRoute.MY_LIST} render={() => (<MyListPage/>)}/>
        <Route exact path={AppRoute.FILMS_ID} component={MoviePage}/>
        <PrivateRoute exact path={AppRoute.REVIEW_ID} render={() => (<ReviewPage/>)}/>
        <Route exact path={AppRoute.PLAYER_ID} component={PlayerPageWrapped}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
