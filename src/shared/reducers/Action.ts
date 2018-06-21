import * as ReleaseParser from '../../service/release-parser';

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
    }
  | {
      type: 'REQUEST_SERIES';
    }
  | {
      type: 'RECEIVE_SERIES';
      series: string;
    };

export const requestSeries = () => {
  return {
    type: 'REQUEST_SERIES',
  };
};

export const receiveSeries = (series: Series[]) => {
  return {
    series,
    type: 'RECEIVE_SERIES',
  };
};

export const loadSeries = () => {
  return (dispatch: any) => {
    dispatch(requestSeries());

    ReleaseParser.default
      .search('', 'Ginpachi-Sensei')
      .then(releases => ReleaseParser.default.groupBySeries(releases))
      .then(series => dispatch(receiveSeries(series)));
  };
};
