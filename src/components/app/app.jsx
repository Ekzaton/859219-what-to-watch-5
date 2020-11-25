import React from "react";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";

import history from "../../history";

import {AppRoute} from "../../const";

import withPlayer from "../../hocs/with-player/with-player";

import Main from "../main/main";
import Movie from "../movie/movie";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import PrivateRoute from "../private-route/private-route";
import Review from "../review/review";
import SignIn from "../sign-in/sign-in";

const PlayerWrapped = withPlayer(Player);

const App = () => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT} component={Main}/>
        <Route exact path={AppRoute.SIGN_IN} component={SignIn}/>
        <PrivateRoute exact path={AppRoute.MY_LIST} render={() => (<MyList/>)}/>
        <Route exact path={AppRoute.FILMS_ID} component={Movie}/>
        <PrivateRoute exact path={AppRoute.REVIEW_ID} render={() => (<Review/>)}/>
        <Route exact path={AppRoute.PLAYER_ID} component={PlayerWrapped}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
