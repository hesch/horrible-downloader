import { Reducer } from 'redux';
import { Action } from '../../shared/reducers/Action';
import { Store } from '../../shared/reducers/store';

export default ((
  state: Store.SeriesData = {
    loadState: 'none',
    data: [],
  },
  action: Action,
): Store.SeriesData => {
  switch (action.type) {
    case 'REQUEST_SERIES':
      return Object.assign({}, state, {
        loadState: 'fetching'
      });
    case 'RECEIVE_SERIES':
      return Object.assign({}, state, {
        loadState: 'loaded',
        data: action.series,
      });
    default:
      return state;
  }
}) as Reducer;

export const getSeries = (state: Store.All, series: string) =>
  state.seriesData.data.find(current => current.name === series)

export const getCurrentSeries = (state: Store.All) =>
  getSeries(state, state.seriesView.current);

export const isSubscribed = (state: Store.All, series: string) =>
  state.seriesConfig[series].subscribed;
