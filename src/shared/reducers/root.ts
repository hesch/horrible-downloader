import * as settings from './settings';
import { combineReducers } from 'redux';
import * as navigation from './navigation';
import * as series from '../../component/series-view/series-view.reducer';
import { Store } from './store';

export default combineReducers({
  settings: settings.default,
  navigation: navigation.default,
  series: series.default,
});

export const getDownloadLocation = (state: Store.All) =>
  settings.getDownloadLocation(state.settings);
