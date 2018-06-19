import * as ReleaseParser from './service/release-parser';
import * as React from 'react';

export class Feed extends React.Component {
  private data: Series[];

  constructor(props: {}) {
    super(props);
    this.data = [];
    this.fetchData();
  }

  public fetchData() {
    ReleaseParser.default.search('[720p]', 'Ginpachi-Sensei').then(releases => {
      console.log(releases);
      this.data = releases;
      this.forceUpdate();
    });
  }

  public render() {
    return (
      <ul id="feed">
        {this.data.map(series => (
          <li key={series.name}>
            {series.name} -
            {series.episodes.map(episode => (
              <span key={episode.pack}> {episode.episode}</span>
            ))}
          </li>
        ))}
      </ul>
    );
  }
}
