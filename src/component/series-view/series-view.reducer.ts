import { Reducer } from 'redux';
import { Action } from '../../shared/reducers/Action';
import { Store } from '../../shared/reducers/store';
import { update as updateIn } from 'lodash';

export default ((
  state: Store.Series = {
    current: 'Darling in the Franxx',
    list: {},
  },
  action: Action,
): Store.Series => {
  switch (action.type) {
    case 'SERIES_SUBSCRIBE':
      return updateIn(state, `series['${action.payload}'].subscribed`, () => true);
    default:
      return state;
  }
}) as Reducer;

export const getSeries = (state: Store.All, series: string) =>
  state.series.list[series].data

export const getCurrentSeries = (state: Store.All) => getSeries(state, state.series.current)

export const isSubscribed = (state: Store.All, series: string) =>
  state.series.list[series].subscribed;
