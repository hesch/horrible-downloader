import * as React from 'react';

export class Overview extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Alle Serien</h1>
        <ul className="menu-list">
          <li>
            <a>Entry 1</a>
          </li>
          <li>
            <a>Entry 2</a>
          </li>
          <li>
            <a>Entry 3</a>
          </li>
          <li>
            <a>Entry 4</a>
          </li>
        </ul>
      </div>
    );
  }
}
