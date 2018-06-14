import {Reducer} from "redux";
import {Action} from "./Action";
import {Store} from "./store";

export default ((state: Store.Settings = {}, action: Action): Store.Settings => {
  switch (action.type) {
    case 'SETTINGS_CHANGE':
      return action.payload;
    default:
      return state;
  }
}) as Reducer;

export const getDownloadLocation = (state: {downloadLocation:string}) => state.downloadLocation;
