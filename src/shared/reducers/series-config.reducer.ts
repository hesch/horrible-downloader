import { Reducer } from 'redux';
import { Action } from './Action';
import { Store } from './store';

export default ((
  state: Store.SeriesConfig = { },
  action: Action,
): Store.SeriesConfig => {
  switch (action.type) {
    default:
      return state;
  }
}) as Reducer;
