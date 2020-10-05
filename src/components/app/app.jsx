import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Main from "../main/main";
import MoviePage from "../movie-page/movie-page";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import Review from "../review/review";
import SignIn from "../sign-in/sign-in";

const App = (props) => {
  const {title, genre, year} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main title={title} genre={genre} year={year}/>
        </Route>
        <Route path="/sign-in" exact>
          <SignIn/>
        </Route>
        <Route path="/my-list" exact>
          <MyList/>
        </Route>
        <Route path="/movies/:id" exact>
          <MoviePage/>
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
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
};

export default App;
