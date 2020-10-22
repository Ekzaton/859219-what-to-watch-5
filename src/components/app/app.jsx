import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {getRandomIndex} from "../../utils";
import {moviesValidator, reviewsValidator} from "../../validators";

import Main from "../main/main";
import Movie from "../movie/movie";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import Review from "../review/review";
import SignIn from "../sign-in/sign-in";

const App = (props) => {
  const {movies, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main movie={getRandomIndex(movies)} movies={movies}/>
        </Route>
        <Route path="/sign-in" exact>
          <SignIn/>
        </Route>
        <Route path="/my-list" exact>
          <MyList movies={movies}/>
        </Route>
        <Route path="/movies/:id" exact>
          <Movie movie={getRandomIndex(movies)} movies={movies} reviews={reviews}/>
        </Route>
        <Route path="/movies/:id/review" exact>
          <Review movie={getRandomIndex(movies)}/>
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
  reviews: PropTypes.arrayOf(reviewsValidator),
};

export default App;
