export type Action =
  | {
      type: 'SETTINGS_CHANGE';
      payload: string;
    }
  | {
      type: 'RESET_COUNTER';
    }
  | {
      type: 'SERIES_SUBSCRIBE';
      payload: string;
    }
  | {
    type: 'SERIES_UNSUBSCRIBE';
    payload: string;
  };
