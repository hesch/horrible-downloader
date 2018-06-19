import * as settings from './settings';
import { combineReducers } from 'redux';
import * as navigation from './navigation';
import { Store } from './store';

export default combineReducers({
  settings: settings.default,
  navigation: navigation.default,
});

export const getDownloadLocation = (state: Store.All) =>
  settings.getDownloadLocation(state.settings);
