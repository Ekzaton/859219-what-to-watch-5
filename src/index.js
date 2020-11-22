import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import {createAPI} from "./services/api";

import {redirect} from "./store/middlewares/redirect";
import rootReducer from "./store/reducers/root-reducer";
import {requireAuthorization} from "./store/actions";
import {fetchAllMovies, fetchPromoMovie} from "./store/api-actions";

import {AuthorizationStatus} from "./const";

import App from "./components/app/app";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
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
