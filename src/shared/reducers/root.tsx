import * as settings from 'src/shared/reducers/settings';
import {combineReducers} from "redux";
import navigation from "./navigation";

export default combineReducers([
    settings,
    navigation,
])

export const getDownloadLocation = (state) => settings.getDownloadLocation(state.settings);