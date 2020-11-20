import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {reviewType} from "../../types";

import withPlayer from "../../hocs/with-player/with-player";

import Main from "../main/main";
import Movie from "../movie/movie";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import Review from "../review/review";
import SignIn from "../sign-in/sign-in";

const PlayerWrapped = withPlayer(Player);

const App = (props) => {
  const {reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({history}) => (
            <Main
              onMoviesItemClick={(id) => history.push(`/films/${id}`)}
            />
          )}
        />
        <Route
          exact
          path="/sign-in"
        >
          <SignIn/>
        </Route>
        <Route
          exact
          path="/my-list"
          render={({history}) => (
            <MyList
              onMoviesItemClick={(id) => history.push(`/films/${id}`)}
            />
          )}
        />
        <Route
          exact
          path="/films/:id"
          render={({history, match}) => (
            <Movie
              reviews={reviews}
              currentMovieId={Number(match.params.id)}
              onMoviesItemClick={(id) => history.push(`/films/${id}`)}
            />
          )}
        >
        </Route>
        <Route
          exact
          path="/films/:id/review"
          render={({match}) => (
            <Review
              currentMovieId={Number(match.params.id)}
            />
          )}
        />
        <Route
          exact
          path="/player/:id"
          render={({match}) => (
            <PlayerWrapped
              currentMovieId={Number(match.params.id)}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  reviews: PropTypes.arrayOf(reviewType),
};

export default App;
