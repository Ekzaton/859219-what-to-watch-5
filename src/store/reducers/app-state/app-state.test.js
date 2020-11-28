import {ActionType} from "../../actions";

import {ALL_GENRES} from "../../../const";
import {extend} from "../../../utils";

import {appState} from "./app-state";

const mockInitialState = {
  activeGenre: ALL_GENRES,
  shownMovies: 0,
};

describe(`appState reducer testing (without payload)`, () => {
  it(`returns initial state`, () => {
    expect(appState(void 0, {})).toEqual(mockInitialState);
  });
});

describe(`appState reducer testing (with payload)`, () => {
  it(`returns active genre`, () => {
    expect(appState(mockInitialState, {
      type: ActionType.GET_ACTIVE_GENRE,
      payload: ALL_GENRES,
    })).toEqual(extend(mockInitialState, {
      activeGenre: ALL_GENRES,
    }));
  });

  it(`returns shown movies count`, () => {
    expect(appState(mockInitialState, {
      type: ActionType.SHOW_MORE_MOVIES,
      payload: 8,
    })).toEqual(extend(mockInitialState, {
      shownMovies: 8,
    }));
  });
});
