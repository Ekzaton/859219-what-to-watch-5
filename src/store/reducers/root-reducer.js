import {combineReducers} from "redux";

import {movies} from "./movies/movies";
import {reviews} from "./reviews/reviews";

export const NameSpace = {
  MOVIES: `MOVIES`,
  REVIEWS: `REVIEWS`,
};

export default combineReducers({
  [NameSpace.MOVIES]: movies,
  [NameSpace.REVIEWS]: reviews,
});
