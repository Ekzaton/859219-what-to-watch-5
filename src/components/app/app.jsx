import React from "react";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";

import history from "../../history";

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
        <Route exact path="/" component={Main}/>
        <Route exact path="/sign-in" component={SignIn}/>
        <PrivateRoute exact path="/my-list" render={() => (<MyList/>)}/>
        <Route exact path="/films/:id" component={Movie}/>
        <PrivateRoute exact path="/films/:id/review" render={() => (<Review/>)}/>
        <Route exact path="/player/:id" component={PlayerWrapped}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
