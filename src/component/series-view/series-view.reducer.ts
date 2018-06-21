import { Reducer } from 'redux';
import { Action } from '../../shared/reducers/Action';
import { Store } from '../../shared/reducers/store';

export default ((
  state: Store.Series = {
    current: 'Darling in the Franxx',
    list: {},
  },
  action: Action,
): Store.Series => {
  switch (action.type) {
    case 'SERIES_SUBSCRIBE':
      return Object.assign({}, state, {
        series: {
          [action.payload]: {
            subscribed: true,
          },
        },
      });
    case 'SERIES_UNSUBSCRIBE':
      return Object.assign({}, state, {
        series: {
          [action.payload]: {
            subscribed: false,
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
  getSeries(state, state.series.current);

export const isSubscribed = (state: Store.All, series: string) =>
  state.series.list[series].subscribed;

export const getSubscriptions = (state: Store.All) =>
  Object.values(state.series.list).filter(s => s.subscribed);
