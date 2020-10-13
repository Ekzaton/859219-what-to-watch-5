import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

import movies from "./mocks/movies";

ReactDOM.render(
    <App title={movies[0].title} genre={movies[0].genre} year={movies[0].year}/>,
    document.querySelector(`#root`)
);
