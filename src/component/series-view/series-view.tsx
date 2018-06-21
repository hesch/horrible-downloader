import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../shared/reducers/store';
import { getCurrentSeries } from './series-view.reducer';

interface MyProps {
  subscribe: (series: string) => void;
  series: Series;
}

class SeriesView extends React.Component<MyProps, any> {
  render() {
    const { series } = this.props;

    return (
      <div>
        <h1 className="title">{series.name}</h1>
        <ul className="episode-list">
          {series.episodes.map(episode => (
            <li key={episode.episode}>
              <span>{episode.episode}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: Store.All) => getCurrentSeries(state)

const mapDispatchToProps = (dispatch: any) => ({
    subscribe: (series: string) => {
      dispatch({
        type: 'SERIES_SUBSCRIBE',
        payload: series,
      });
    },
  })

export const Series = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SeriesView);
