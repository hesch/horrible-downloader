import * as ReleaseParser from './service/release-parser';
import * as React from 'react';

export class Feed extends React.Component {
  private data: Episode[];

  constructor(props: {}) {
    super(props);
    this.data = [];
    this.fetchData();
  }

  public fetchData() {
    ReleaseParser.default
      .search('[1080p]', 'Ginpachi-Sensei')
      .then(releases => {
        console.log(releases);
        this.data = releases;
        this.forceUpdate();
      });
  }

  public render() {
    return (
      <ul id="feed">
        {this.data.map(episode => (
          <li key={episode.pack}>
            {episode.series} - {episode.episode}
          </li>
        ))}
      </ul>
    );
  }
}
