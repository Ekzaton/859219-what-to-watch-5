import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {moviesValidator} from "../../validators";

import Main from "../main/main";
import Movie from "../movie/movie";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import Review from "../review/review";
import SignIn from "../sign-in/sign-in";

const App = (props) => {
  const {movies} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main movies={movies}/>
        </Route>
        <Route path="/sign-in" exact>
          <SignIn/>
        </Route>
        <Route path="/movies-list" exact>
          <MyList/>
        </Route>
        <Route path="/movies/:id" exact>
          <Movie/>
        </Route>
        <Route path="/movies/:id/review" exact>
          <Review/>
        </Route>
        <Route path="/player/:id" exact>
          <Player/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movies: PropTypes.arrayOf(moviesValidator),
};

export default App;
