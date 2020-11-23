import {ActionType} from "../actions";

import history from "../../history";

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    history.push(action.payload);
  }

  return next(action);
};
