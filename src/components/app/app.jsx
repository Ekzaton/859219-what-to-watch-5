import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {movieType, reviewType} from "../../types";

import withPlayer from "../../hocs/with-player/with-player";

import Main from "../main/main";
import Movie from "../movie/movie";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import Review from "../review/review";
import SignIn from "../sign-in/sign-in";

const PlayerWrapped = withPlayer(Player);

const App = (props) => {
  const {movies, reviews} = props;
  const movie = movies[0];

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main movie={movie} movies={movies}/>
        </Route>
        <Route path="/sign-in" exact>
          <SignIn/>
        </Route>
        <Route path="/my-list" exact>
          <MyList movies={movies}/>
        </Route>
        <Route path="/movies/:id" exact>
          <Movie movie={movie} movies={movies} reviews={reviews}/>
        </Route>
        <Route path="/movies/:id/review" exact>
          <Review movie={movie}/>
        </Route>
        <Route path="/player/:id" exact>
          <PlayerWrapped movie={movie}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movies: PropTypes.arrayOf(movieType),
  reviews: PropTypes.arrayOf(reviewType),
};

export default App;
