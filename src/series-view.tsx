import * as React from 'react';

export class SeriesView extends React.Component {
  private series: Series | null;

  constructor(props: {}) {
    super(props);
    this.series = null;
  }

  render() {
    return (
      <div>
        {!!this.series ? (
          <div>
            <h1 className="title">{this.series.name}</h1>
            <ul className="episode-list">
              {this.series.episodes.map(episode => (
                <li key={episode.episode}>
                  <span>{episode.episode}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <span />
        )}
      </div>
    );
  }
}
