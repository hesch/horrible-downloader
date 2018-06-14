import {Reducer} from "redux";
import {Action} from "./Action";
import {Store} from "./store";

export default ((state: Store.Settings = { downloadLocation: '' }, action: Action): Store.Settings => {
  switch (action.type) {
    case 'SETTINGS_CHANGE':
      return { downloadLocation: action.payload };
    default:
      return state;
  }
}) as Reducer;

export const getDownloadLocation = (state: Store.Settings) => state.downloadLocation;
