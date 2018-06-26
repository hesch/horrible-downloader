import { Reducer } from 'redux';
import { Action } from '../../shared/reducers/Action';
import { Store } from '../../shared/reducers/store';

export default ((
  state: Store.SeriesView = {
    current: 'Darling in the FranXX',
  },
  action: Action,
): Store.SeriesView => {
  switch (action.type) {
    default:
      return state;
  }
}) as Reducer;

export const getSeries = (state: Store.All, series: string) =>
  state.seriesData.data.find(current => current.name === series);

export const getCurrentSeries = (state: Store.All) => {
  return getSeries(state, state.seriesView.current);
};

export const isSubscribed = (state: Store.All, series: string) =>
  state.seriesConfig[series].subscribed;

export const getSubscriptions = (state: Store.All) =>
  Object.values(state.seriesConfig).filter(s => s.subscribed);
