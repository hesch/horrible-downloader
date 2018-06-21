import { Reducer } from 'redux';
import { Action } from '../../shared/reducers/Action';
import { Store } from '../../shared/reducers/store';

export default ((
  state: Store.SeriesView = {
    current: 'Darling in the Franxx',
    series: {},
  },
  action: Action,
): Store.SeriesView => {
  switch (action.type) {
    case 'SERIES_SUBSCRIBE':
      return Object.assign({}, state, {
        series: {
          [action.payload]: {
            subscribed: true,
          },
        },
      });
    default:
      return state;
  }
}) as Reducer;

export const getSeries = (state: Store.All, series: string) =>
  state.series.list[series].data;

export const getCurrentSeries = (state: Store.All) =>
  getSeries(state, state.seriesView.current);

export const isSubscribed = (state: Store.All, series: string) =>
  state.series[series].subscribed;
