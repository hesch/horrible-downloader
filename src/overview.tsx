import * as ReleaseParser from './service/release-parser';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

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
        console.log(series);
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
              <NavLink
                // fixme: series name can contain invalid symbols, we need an id
                to={`series/${series.name}`}
                activeStyle={{ textDecoration: 'none', color: 'black' }}
              >
                {series.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
