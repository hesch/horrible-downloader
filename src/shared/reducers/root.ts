import * as settings from './settings';
import {combineReducers} from "redux";
import * as navigation from "./navigation";

export default combineReducers({
  settings: settings.default,
  navigation: navigation.default,
})

export const getDownloadLocation = (state: {settings: {downloadLocation: string}}) => settings.getDownloadLocation(state.settings);
