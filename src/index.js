import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import {reducer} from "./store/reducer";

import App from "./components/app/app";

import movies from "./mocks/movies";
import reviews from "./mocks/reviews";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App movies={movies} reviews={reviews}/>
    </Provider>,
    document.querySelector(`#root`)
);
