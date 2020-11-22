import {ActionType} from "../../actions";

import {AuthorizationStatus} from "../../../const";
import {extend} from "../../../utils";

const initialState = {
  status: AuthorizationStatus.NO_AUTH,
};

export const appUser = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        status: action.payload,
      });
  }

  return state;
};
