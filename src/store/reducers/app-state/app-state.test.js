import {ActionType} from "../../actions";

import {DEFAULT_GENRE, DEFAULT_MOVIES_COUNT} from "../../../const";
import {extend} from "../../../utils";

import {appState} from "./app-state";

const mockInitialState = {
  activeGenre: DEFAULT_GENRE,
  shownMoviesCount: DEFAULT_MOVIES_COUNT,
};

describe(`appState reducer testing (without payload)`, () => {
  it(`returns initial state`, () => {
    expect(appState(void 0, {})).toEqual(mockInitialState);
  });
});

describe(`appState reducer testing (with payload)`, () => {
  it(`returns active genre and deafault movies count`, () => {
    expect(appState(mockInitialState, {
      type: ActionType.GET_ACTIVE_GENRE,
      payload: DEFAULT_GENRE,
    })).toEqual(extend(mockInitialState, {
      activeGenre: DEFAULT_GENRE,
      shownMoviesCount: mockInitialState.shownMoviesCount,
    }));
  });

  it(`returns shown movies count`, () => {
    expect(appState(mockInitialState, {
      type: ActionType.SHOW_MORE_MOVIES,
      payload: DEFAULT_MOVIES_COUNT,
    })).toEqual(extend(mockInitialState, {
      shownMoviesCount: mockInitialState.shownMoviesCount + DEFAULT_MOVIES_COUNT,
    }));
  });
});
