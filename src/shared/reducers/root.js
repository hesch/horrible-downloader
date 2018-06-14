import * as settings from 'src/shared/reducers/settings';
import {combineReducers} from "redux";

export default combineReducers([
    settings
])

export const getDownloadLocation = (state) => settings.getDownloadLocation(state.settings);