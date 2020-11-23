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
        <Route exact path="/"
          render={() => (
            <Main/>
          )}
        />
        <Route exact path="/sign-in"
          render={() => (
            <SignIn/>
          )}
        />
        <PrivateRoute exact path="/my-list"
          render={() => (
            <MyList/>
          )}
        />
        <Route exact path="/films/:id"
          render={({match}) => (
            <Movie currentMovieId={Number(match.params.id)}/>
          )}
        />
        <PrivateRoute exact path="/films/:id/review"
          render={({match}) => (
            <Review currentMovieId={Number(match.params.id)}/>
          )}
        />
        <Route exact path="/player/:id"
          render={({match}) => (
            <PlayerWrapped currentMovieId={Number(match.params.id)}/>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
