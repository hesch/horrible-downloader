import * as settings from './settings';
import { combineReducers } from 'redux';
import * as navigation from './navigation';
import * as seriesData from './series.reducer';
import * as seriesConfig from './series-config.reducer';
import * as downloads from './downloads.reducer';
import * as seriesView from '../../component/series-view/series-view.reducer';
import { Store } from './store';

export default combineReducers({
  settings: settings.default,
  navigation: navigation.default,
  seriesView: seriesView.default,
  seriesData: seriesData.default,
  seriesConfig: seriesConfig.default,
  downloads: downloads.default,
});

export const getDownloadLocation = (state: Store.All) =>
  settings.getDownloadLocation(state.settings);
