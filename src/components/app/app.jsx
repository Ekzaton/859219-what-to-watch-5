import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import withPlayer from "../../hocs/with-player/with-player";

import Main from "../main/main";
import Movie from "../movie/movie";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import Review from "../review/review";
import SignIn from "../sign-in/sign-in";

const PlayerWrapped = withPlayer(Player);

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/sign-in">
          <SignIn/>
        </Route>
        <Route exact path="/my-list">
          <MyList/>
        </Route>
        <Route exact path="/films/:id"
          render={({match}) => (
            <Movie currentMovieId={Number(match.params.id)}/>
          )}
        />
        <Route exact path="/films/:id/review"
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
