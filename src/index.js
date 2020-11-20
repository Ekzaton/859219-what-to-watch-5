import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import {createAPI} from "./services/api";

import {fetchMoviesList, fetchPromoMovie} from "./store/api-action";
import {reducer} from "./store/reducer";

import App from "./components/app/app";

import reviews from "./mocks/reviews";

const api = createAPI();

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

Promise.all([
  store.dispatch(fetchMoviesList()),
  store.dispatch(fetchPromoMovie()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App reviews={reviews}/>
      </Provider>,
      document.querySelector(`#root`)
  );
});
