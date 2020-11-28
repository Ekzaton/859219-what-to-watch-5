import {ActionType} from "../../actions";

import {AuthorizationStatus} from "../../../const";
import {extend} from "../../../utils";

import {appUser} from "./app-user";

const mockInitialState = {
  status: AuthorizationStatus.NO_AUTH,
};

describe(`appUser reducer testing (without payload)`, () => {
  it(`returns initial state`, () => {
    expect(appUser(void 0, {})).toEqual(mockInitialState);
  });
});

describe(`appUser reducer testing (with payload)`, () => {
  it(`returns authorization status`, () => {
    expect(appUser(mockInitialState, {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual(extend(mockInitialState, {
      status: AuthorizationStatus.AUTH,
    }));
  });
});
