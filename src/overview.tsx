import * as ReleaseParser from './service/release-parser';
import * as React from 'react';

export class Overview extends React.Component {
  private data: Series[];

  constructor(props: {}) {
    super(props);
    this.data = [];
    this.fetchData();
  }

  public fetchData() {
    ReleaseParser.default
      .search('', 'Ginpachi-Sensei')
      .then(releases => ReleaseParser.default.groupBySeries(releases))
      .then(series =>
        series.sort(({ name: nameA }, { name: name2 }) =>
          nameA.localeCompare(name2),
        ),
      )
      .then(series => {
        this.data = series;
        this.forceUpdate();
      });
  }

  render() {
    return (
      <div>
        <h1 className="title">Alle Serien</h1>
        <ul className="menu-list">
          {this.data.map(series => (
            <li key={series.name}>
              <a>{series.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
