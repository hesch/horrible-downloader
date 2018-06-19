import { Reducer } from 'redux';
import { Action } from './Action';

export default ((state = {}, action: Action) => {
  switch (action.type) {
    case 'SETTINGS_CHANGE':
      return action.payload;
    default:
      return state;
  }
}) as Reducer;

export const getDownloadLocation = (state: { downloadLocation: string }) =>
  state.downloadLocation;
