import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import {createAPI} from "./services/api";

import {fetchAllMovies, fetchPromoMovie} from "./store/api-actions";
import rootReducer from "./store/reducers/root-reducer";

import App from "./components/app/app";

const api = createAPI();

const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

Promise.all([
  store.dispatch(fetchAllMovies()),
  store.dispatch(fetchPromoMovie()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.querySelector(`#root`)
  );
});
