import {combineReducers} from "redux";

import {appData} from "./app-data/app-data";
import {appState} from "./app-state/app-state";

export const NameSpace = {
  APP_DATA: `APP_DATA`,
  APP_STATE: `APP_STATE`,
};

export default combineReducers({
  [NameSpace.APP_DATA]: appData,
  [NameSpace.APP_STATE]: appState,
});
