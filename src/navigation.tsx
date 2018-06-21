import * as React from 'react';
import {NavLink} from "react-router-dom";
import {navItems} from "./Root";

export interface NavItem {
  title: string;
  component: React.ComponentClass;
}

export class Navigation extends React.Component {

  public render() {
    return (
      <nav className="column is-1">
        <aside className="menu">
          <p className="menu-label">Navigation</p>
          <ul className="menu-list">
            {navItems.map(item => (
              <li key={item.title}>
                  <NavLink
                    to={`${item.title}`}
                    activeStyle={{
                      textDecoration: 'none',
                      color: 'black'
                    }}
                  >{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </aside>
      </nav>
    );
  }
}
