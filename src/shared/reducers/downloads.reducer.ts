import { Reducer } from 'redux';
import { Action } from './Action';
import { Store } from './store';

export default ((
  state: Store.Downloads = [],
  action: Action,
): Store.Downloads => {
  switch (action.type) {
    default:
      return state;
  }
}) as Reducer;
